<template>

<div>

    <h1 id="contact_header" class="text-center trebuchet lg-headers"><b-icon-envelope-fill></b-icon-envelope-fill> Contact Chris</h1>

    <div v-if="this.sent" id="contact_success">
        <h1 class="trebuchet text-center">Thank you for Contacting Me!</h1>
        <div id="contact_success_words">
            <p class="text-center calibri main-text">I will do my best to get back to you as soon as possible!</p>
            <p class="text-center calibri main-text">Thank you and have an excellent day! <font-awesome-icon :icon="['fa', 'smile']" size="2x" /></p>
        </div>
    </div>

    <div class="text-center" v-if="this.sending" id="contact_sending">
        <img class="mx-auto" src="../assets/sendingEmail.gif">
    </div>

    <div v-if="!this.sent && !this.sending" id="contact_form">

            <p class="calibri main-text">Please feel free to send me a message!  I will review what has been sent to me and get back to you as soon as possible!  Thank you for taking the time to look at my portfolio &amp; resume.</p>
            <br/>
            <div data-role="content">
                <div class="form-group trebuchet">
                    <label class="resume-label" for="name">Name</label>
                   <span>
                       <br/>
                       <label v-if="this.validations.name && !this.name" class="error"><b-icon icon="alert-circle-fill" variant="dark"/> <font-awesome-icon :icon="['fa', 'exclamation-circle']" size="1x" /> {{ validations.name }}</label>
                   </span>
                    <div data-role="fieldcontainer">
                        <input class="form-control" type="text" id="name" name="name" v-model="name" placeholder="Please Enter Your Name"/>
                    </div>

                </div>
                <br/>
                <div class="form-group trebuchet">
                    <label class="resume-label" for="email">E-mail</label>
                    <span>
                       <br/>
                       <label v-if="this.validations.email && !this.email" class="error"><b-icon icon="alert-circle-fill" variant="dark"/> <font-awesome-icon :icon="['fa', 'exclamation-circle']" size="1x" /> {{ validations.email }}</label>
                       <label v-else-if="this.validations.email && !validEmail()" class="error"><b-icon icon="alert-circle-fill" variant="dark"/> Please enter in your real email address!</label>
                    </span>

                    <div data-role="fieldcontainer">
                        <input class="form-control" type="email" novalidate="true" id="email" name="email" v-model="email" placeholder="Please Enter Your Email"/>
                    </div>

                </div>
                <br/>
                <div class="form-group trebuchet">
                    <label class="resume-label" for="message">Message</label>
                    <span>
                       <br/>
                       <label v-if="this.validations.message && !this.message" class="error"><b-icon icon="alert-circle-fill" variant="dark"/> <font-awesome-icon :icon="['fa', 'exclamation-circle']" size="1x" /> {{ validations.message }}</label>
                   </span>
                    <div data-role="fieldcontainer">
                        <textarea class="form-control" id="message" name="message" v-model="message"
                                  placeholder="Please Enter Your Message"/>
                    </div>
                </div>
            </div>
        <span>
            <br/>
            <label v-if="this.validations.captyResponse && this.captchaResponse === '' " class="error"><b-icon icon="alert-circle-fill" variant="dark"/><font-awesome-icon :icon="['fa', 'exclamation-circle']" size="1x" /> {{ validations.captyResponse }}</label>

        </span>
            <div id="captyCapn" class="g-recaptcha" data-sitekey="6Lc6uOUUAAAAAD06XtOzaXtr-2DoC15zQ4fh0mj4"></div>
            <br/>
            <input class="btn btn-lg btn-dark" type="submit" @click="sendContact()" value="Send Message" id="submit"/>
            <br/>
            <br/>
    </div>

</div>

</template>

<script>
    export default {
        name: 'Contact',

        components: {

        },

        data(){
            return{

                message: null,
                captchaResponse: null,
                email: null,
                emailFormat: false,
                name: "",
                errors: [], //this is the server errors array as fallback
                sending: false,
                sent: false,
                validations: {name: null, email: null, message: null, captyResponse: null},

            }

        },

        methods: {

            sendContact(){

                let self = this;

                let captchaDiv = document.getElementById('captyCapn');

                self.captchaResponse = captchaDiv.querySelector('.g-recaptcha-response').value;


              if(self.validateForm()) {


                self.sending = true;

                let emailData = JSON.stringify({ name: self.name, email: self.email, message: self.message, captyResponse: self.captchaResponse });


                fetch('https://resume-api.thisdudecodes.com/resume/send-contact', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  //play around with this part and see if you can get it to work faster so less of a delay after clicking the 'Send Message' button
                  body: emailData


                })
                    .then(
                        function(data) {

                          let json = data.json();

                          if (data.status >= 200 && data.status < 300) {
                            //set sending to true then set a timer for 2-3 seconds before sent is set to true
                            // self.sending = true;

                            setTimeout(self.emailSent, 3000); // in 3 seconds call emailSent method

                            return json;

                          } else {

                            return json.then(Promise.reject.bind(Promise));
                          }
                        }
                    ).catch((error) => {
                  self.errors = error.errors;
                  console.log(self.errors);
                });
              }


            },

            createRecaptcha() {
                let script = document.createElement('script')
                script.setAttribute('async', '')
                script.setAttribute('defer', '')
                script.id = 'recaptchaScript'
                script.setAttribute( 'src','https://www.google.com/recaptcha/api.js?render=explicit"')
                document.getElementsByTagName('head')[0].appendChild(script)

            },

          validateForm() {

            let self = this;

            if (self.name && self.email && self.message) {
              return true;
            }

            self.validations = [];

            if (!self.name) {
              self.validations.name = 'Please tell me your name so I know who is contacting me!';
            }
            if (!self.email) {
              self.validations.email = 'Please enter your email address so I know where to send a response to!';
            }

            if (!self.message) {
              self.validations.message = 'Please let me know why you are contacting me!';
            }

            if(!self.captchaResponse || self.captchaResponse === '') {
              self.validations.captyResponse = 'reCAPTCHA is required to prove you are a human!';
            }


          },

            validEmail() {

                let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return (this.email === '')? '' : (re.test(this.email)) ? this.emailFormat = true : this.emailFormat = false;
            },

            emailSent(){
                this.sent = true;
                this.sending = false;
            },
        },

        mounted() {
            // create reCaptcha async defer with createRecaptcha method when Contact component is mounted
            this.createRecaptcha()
        },

    }

</script>