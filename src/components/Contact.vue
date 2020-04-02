<template>


<div>


    <h1 id="contact_header" class="text-center trebuchet lg-headers"><b-icon-envelope-fill></b-icon-envelope-fill> Contact Chris</h1>

<!--    <div id="contact_success">-->
<!--        <h1 class="trebuchet text-center">Thank you for Contacting Me!</h1>-->
<!--        <div id="contact_success_words">-->
<!--            <p class="text-center calibri main-text">I will do my best to get back to you as soon as possible!</p>-->
<!--            <p class="text-center calibri main-text">Thank you and have an excellent day!</p>-->
<!--        </div>-->
<!--    </div>-->

    <div id="contact_form">
<!--        <form id="form1">-->
            <p class="calibri main-text">Please feel free to send me a message!  I will review what has been sent to me and get back to you as soon as possible!  Thank you for taking the time to look at my portfolio &amp; resume.</p>
            <br/>
            <div data-role="content">
                <div class="form-group trebuchet">
                    <label class="resume-label" for="name">Name</label>

                    <div data-role="fieldcontainer">
                        <input class="form-control" type="text" id="name" name="name" v-model="name" placeholder="Please Enter Your Name"/>
                    </div>

                </div>
                <br/>
                <div class="form-group trebuchet">
                    <label class="resume-label" for="email">E-mail</label>
                    <div data-role="fieldcontainer">
                        <input class="form-control" type="email" id="email" name="email" v-model="email" placeholder="Please Enter Your Email"/>
                    </div>

                </div>
                <br/>
                <div class="form-group trebuchet">
                    <label class="resume-label" for="message">Message</label>
                    <div data-role="fieldcontainer">
                        <textarea class="form-control" id="message" name="message" v-model="message"
                                  placeholder="Please Enter Your Message"/>
                    </div>
                </div>
            </div>

            <div id="captyCapn" class="g-recaptcha" data-sitekey="6Lc6uOUUAAAAAD06XtOzaXtr-2DoC15zQ4fh0mj4"></div>
            <br/>
            <input class="btn btn-lg btn-dark" type="submit" @click="sendContact()" value="Send Message" id="submit"/>
            <br/>
            <br/>
<!--        </form>-->
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

                message: '',
                email: '',
                name: '',


            }

        },

        methods: {

            sendContact(){

                let captchaDiv = document.getElementById('captyCapn');

                let captchaResponse = captchaDiv.querySelector('.g-recaptcha-response').value;


                fetch('http://resume-api.thisdudecodes.com/resume/send-contact', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name: this.name,
                        email: this.email,
                        message: this.message,
                        captyResponse: captchaResponse } )
                }).then(res=>res.json())
                    .then(res => console.log(res));

            },

            createRecaptcha () {
                let script = document.createElement('script')
                script.setAttribute('async', '')
                script.setAttribute('defer', '')
                script.id = 'recaptchaScript'
                script.setAttribute( 'src','https://www.google.com/recaptcha/api.js?render=explicit"')
                document.getElementsByTagName('head')[0].appendChild(script)

            }
        },

        mounted() {
            // create reCaptcha async defer with createRecaptcha function
            this.createRecaptcha()

        },


    }

</script>