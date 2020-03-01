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
        <form id="form1">
            <p class="calibri main-text">Please feel free to send me a message!  I will review what has been sent to me and get back to you as soon as possible!  Thank you for taking the time to look at my portfolio &amp; resume.</p>
            <br/>
            <div data-role="content">
                <div class="form-group trebuchet">
                    <label class="resume-label" for="name" data-theme="d">Name</label>

                    <div data-role="fieldcontainer">
                        <input class="form-control" type="text" id="name" name="name" data-theme="a" placeholder="Please Enter Your Name"/>
                    </div>

                </div>
                <br/>
                <div class="form-group trebuchet">
                    <label class="resume-label" for="email" data-theme="d">E-mail</label>
                    <div data-role="fieldcontainer">
                        <input class="form-control" type="email" id="email" name="email" data-theme="a" placeholder="Please Enter Your Email"/>
                    </div>

                </div>
                <br/>
                <div class="form-group trebuchet">
                    <label class="resume-label" for="comments" data-theme="d">Message</label>
                    <div data-role="fieldcontainer">
                        <textarea class="form-control" id="comments" name="comments" data-theme="d" placeholder="Please Enter Your Message"></textarea>
                    </div>
                </div>
            </div>
            <br/>
            <input class="btn btn-lg btn-dark" type="submit" data-theme="a" value="Send Message" id="submit"/>
            <br/>
            <br/>
        </form>
    </div>


</div>




</template>

<script>
    export default {
        name: 'Contact',

        components: {


        }

    }

</script>