<template>

<div>

    <br/>
    <h1 id="portfolio_header" class="text-center trebuchet lg-headers"><b-icon-document-code></b-icon-document-code> Portfolio</h1>
    <p class="main-text calibri">This section is dedicated to some of the work I have completed and felt appropriate to showcase.  If you click on a project image on this page, a navigable gallery will be displayed.  Each image in a gallery includes a  description of the pictured page.  If you click on an accompanying 'More Info' button then you will be able to read more about a particular project.</p>

    <!--beginning of portfolio galleries-->
    <div class="row mx-auto">

        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure itemprop="associatedMedia">
                    <a href="images-new/triad-behavioral-health-home.png" itemprop="contentUrl" data-size="995x2979">
                        <img src="images-new/triad-behavioral-health-main.png" itemprop="thumbnail" alt="Bootstrap 4 Custom Triad Behavioral Health theme" />
                    </a>
                    <figcaption itemprop="caption description">Custom Bootstrap 4 Theme/Laravel Site<br/> Triad Behavioral Health home page</figcaption>
                </figure>

            </div>

            <h6 class="trebuchet">Custom Bootstrap 4 Theme/Laravel Site<br/><a href="https://www.triadbehavioralhealth.com" class="port-links" target="_blank">TriadBehavioralHealth.com</a></h6>
            <a href="#demo11" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo11" class="collapse calibri">
                <br/>
                <p>This was the first project I completed at Triad Behavioral Health.  It is a custom Bootstrap 4 theme that is based off of mockups provided to me by the company's graphic designers.  The site is fully responsive and I am quite proud of how it turned out.  It is practically a pixel perfect representation of the design mockups I was given.  I learned a lot about Bootstrap 4 in the process of creating this site, and particularly how to stack elements in my desired orders at different screen sizes.  This site can be viewed at: <br/><a href="https://www.triadbehavioralhealth.com" target="_blank">https://www.triadbehavioralhealth.com</a></p></div>
        </div>

        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure itemprop="associatedMedia">
                    <a href="images-new/video-admin-playlist-home.png" itemprop="contentUrl" data-size="1068x823">
                        <img src="images-new/tbh-video-admin-main.png" itemprop="thumbnail" alt="TBH/TLS Audio Admin Interface" />
                    </a>
                    <figcaption itemprop="caption description">Laravel Video Admin AWS S3 Interface<br/> TBH playlist admin CRUD</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">Laravel TBH Video Admin AWS S3 Interface<br/> One-to-Many (one license can have many playlists).<br/> Many-to-Many (many playlists can have many videos)</h6>
            <a href="#demo15" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo15" class="collapse calibri">
                <br/>
                <p>With this work project (along with the proceeding Laravel Audio Admin AWS S3 Interface), I learned quite a bit about how to get more complex database relationships to work with Laravel/Eloquent ORM.  This required the use of a many-to-many relationship to store information about the video and the playlist associated with it in a pivot table.  It also required a one-to-many relationship so that one license could have many playlists associated with it.  This admin interface was replacing a third-party paid service that the company had used for years to store video files of instructional lectures.  This admin interface is useful because it also stores the video files on AWS S3, and behaves as a true CRUD app both in the database and on the S3 side when Creating, Reading, Updating, or Deleting (cascade deletion of related parent/child records, and files- - depending on what is deleted) Videos. In my capacity as a developer on this project, I was 'full-stack' in the truest sense.  I created the database structure, coded the back-end, and front-end from scratch with limited direction.  This project was completed in March/April 2019.</p></div>
        </div>


        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure>
                    <a href="images-new/playlist-admin-crud-hub.png" itemprop="contentUrl" data-size="1241x823">
                        <img src="images-new/tbh-audio-main.png" itemprop="thumbnail" alt="TBH/TLS Audio Admin Interface" />
                    </a>
                    <figcaption itemprop="caption description">Laravel Audio Admin AWS S3 Interface<br/> TBH playlist admin CRUD</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">Laravel Audio Admin AWS S3 Interface<br/> One-to-Many (one license can have many playlists).<br/> Many-to-Many (many playlists can have many audio tracks)</h6>
            <a href="#demo12" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo12" class="collapse calibri">
                <br/>
                <p>With this work project (along with the preceeding Laravel Video Admin AWS S3 Interface),  I learned quite a bit about how to get more complex database relationships to work with Laravel/Eloquent ORM.  This required the use of a many-to-many relationship to store information about the track and the playlist associated with it in a pivot table.  It also required a one-to-many relationship so that one license could have many playlists associated with it.  This admin interface was replacing a third-party paid service that the company had used for years to store audio files for instructional recordings.  This admin interface is useful because it also stores the audio files on AWS S3, and behaves as a true CRUD app both in the database and on the S3 side when Creating, Reading, Updating, or Deleting (cascade deletion of related parent/child records, and files- - depending on what is deleted) Tracks.  In my capacity as a developer on this project, I was 'full-stack' in the truest sense.  I created the database structure, coded the back-end, and front-end from scratch with limited direction.  This project was completed in February 2019.</p></div>
        </div>


        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure itemprop="associatedMedia">
                    <a href="images-new/tbh-finance-reporting-csv-tool.png" itemprop="contentUrl" data-size="1241x823">
                        <img src="images-new/tbh-finance-reporting-main.png" itemprop="thumbnail" alt="TBH Finance Crystal Reports replacement" />
                    </a>
                    <figcaption itemprop="caption description">TBH Crystal Reports replacement<br/> Page where most reports are run from... select desired report from dropdown, enter a date range, then click the 'Download Report' button to download a CSV.</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">TBH Crystal Reports Replacement<br/> Laravel/PHP</h6>
            <a href="#demo13" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo13" class="collapse calibri">
                <br/>
                <p>I created this internal reporting tool for TBH to better centralize several reports that the company's Accounting department utilizes in their daily duties.   It was also coded to be a more user-friendly experience when compared with Crystal Reports, which the company had been using before this app was introduced.  When a report is selected and a date range has been entered it will query the relevant database tables and generate a CSV file for easy viewing in Microsoft Excel.  I wrote the CSV creation script in vanilla PHP using the best practices instead of utilizing a Laravel package.</p></div>
        </div>


        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure>
                    <a href="images-new/tbh-timesheet-generator.png" itemprop="contentUrl" data-size="1241x823">
                        <img src="images-new/tbh-timesheet-generator-main.png" itemprop="thumbnail" alt="TBH/TLS Timesheet PDF generator" />
                    </a>
                    <figcaption itemprop="caption description">Laravel Calendar based Timesheet PDF Generator<br/> Home/navigation page to appropriate timesheet generation Calendar.</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">Laravel Calendar based Timesheet PDF Generator</h6>
            <a href="#demo14" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo14" class="collapse calibri">
                <br/>
                <p>With this work project I utilized some knowledge I gained from another project where I generated PDFs based on an HTML/CSS template.  I created the project in Laravel with Bootstrap 4, and utilized wkhtmltopdf open source technology with a Laravel package called Snappy. This replaced the company's generic Excel spreadsheet method for keeping track of employee's dates worked and hours.</p></div>
        </div>



        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">
                <figure itemprop="associatedMedia">
                    <a href="images-new/blazers-section-main.png" itemprop="contentUrl" data-size="964x1024">
                        <img src="images-new/tblazersfans-main.png" itemprop="thumbnail" alt="Image description" data-size="964x1024" />
                    </a>
                    <figcaption itemprop="caption description">Rails prototype- - Portland Trail Blazers fans website</figcaption>
                </figure>


            </div>
            <h6 class="trebuchet">Ruby on Rails</h6>
            <a href="#demo5" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo5" class="collapse calibri">
                <br/>
                <p>I am a big basketball fan both college (Gonzaga and March Madness) and the NBA.  As a challenge to myself while in my down time after studying, I decided to try to create a Ruby on Rails application that was inspired by my favorite NBA team, the Portland Trail Blazers.  I took the time to implement the things that I had learned from the course I took in Rails at Spokane Community College and I also took the time to learn about and implement things that I did not know about before like how to call multiple databases from one page, create a calendar that you can load events into, and upload a CSV file to seed data to a Model from a view.</p><p>I also learned to deploy this site using PostgreSQL  and Capistrano on an Apache Digital Ocean droplet.  If you wish to visit this site please do so at: <a href="http://dev.thisdudecodes.com/" target="_blank">http://dev.thisdudecodes.com</a>.  **Please note that this site is a prototype and still in development.  Here is the <a href="https://github.com/iplayguitar81/charlestonchoosetheright" target="_blank">GitHub repository</a> for this site.  I hope to be able to develop this Rails application out more and will do so as time allows.</p>
            </div>

        </div>

        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure itemprop="associatedMedia">
                    <a href="images-new/lilac-city-full.png" itemprop="contentUrl" data-size="1024x1024">
                        <img src="images-new/lilac-main.png" itemprop="thumbnail" alt="Image description" />
                    </a>
                    <figcaption itemprop="caption description">Static HTML5/CSS site developed in 2013</figcaption>
                </figure>
            </div>
            <h6 class="trebuchet">HTML5/CSS/jQuery<br/><a href="https://thisdudecodes.com/lilac-dogs" class="port-links" target="_blank">Lilac Dogs (Archived Site)</a></h6>
            <a href="#demo6" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo6" class="collapse calibri">
                <br/>
                <p>I completed this web page during summer break of 2013.  It was around this time that I started feeling that I was gaining greater competence with my HTML5/CSS3 skills and I also introduced myself to jQuery plug-ins (See the ‘Meet Our All Stars’ page).  I did this project for a friend.  Unfortunately, she has decided to discontinue her dog walking business to focus on her regular 9-5 job.  I spent many hours developing my front-end skills while creating this site.  Since the site is offline, I have decided to host the project on this site so you may still see a live version of it by visiting:<br/> <a href="http://thisdudecodes.com/lilac-dogs" target="_blank">http://thisdudecodes.com/lilac-dogs</a></p></div>
        </div>

        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">
                <figure>
                    <a href="images-new/checkenginefree-map-view-page.png" itemprop="contentUrl" data-size="1048x1258">
                        <img src="images-new/checkengine-main.png" itemprop="thumbnail" alt="checkenginefree.com" />
                    </a>
                    <figcaption itemprop="caption description">Single page jQuery Mobile fully responsive integrated with Google Maps API/Google Fusion Tables, GPS, browser geolocation, SSL,<br/> and functional search string location to GPS coordinates refresh map and nearest locations</figcaption>
                </figure>
            </div>
            <h6 class="trebuchet">Single Page jQuery Mobile<br/><a href="https://checkenginefree.com" target="_blank" class="port-links">CheckEngineFree.com</a></h6>
            <a href="#demo7" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo7" class="collapse calibri">
                <br/>
                <p>This one page responsive web app utilizes HTML5, CSS, Javascript/jQuery, jQuery Mobile, Google Maps API (JSON), Browser GPS and PHP (contact form page).  If you wish to see the live web page please visit: <a href="https://checkenginefree.com/" target="_blank">http://www.checkenginefree.com</a></p>  <p>NOTE- - This site needs to be updated (it was coded in Summer 2014) because Google Fusion Tables is being deprecated.  I have every intention of updating this site so that it can be useful for many years to come! (March 2019)</p>
            </div>

        </div>

        <div class="col-sm-12 mt-5 col-md-6">
            <div class="my-gallery">
                <figure>
                    <a href="images-new/amHodgson-Homepage.png" itemprop="contentUrl" data-size="574x1135">
                        <img src="images-new/amhodgson-main-wp.png" itemprop="thumbnail" alt="amhodgson.com" />
                    </a>
                    <figcaption itemprop="caption description">Custom responsive Bootstrap 4 Wordpress template/theme</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">Custom Wordpress Theme<br/><a href="https://wp.amhodgson.com" target="_blank" class="port-links">AMHodgson.com</a> (Coming Summer 2019)</h6>
            <a href="#demo16" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo16" class="collapse calibri">
                <br/>
                <p>I created this responsive custom Bootstrap 4 Wordpress template/theme for author AM Hodgson.  As of Spring 2019 this site is not launched and still in development, but if you wish to see the live version of this website please visit:  <a href="https://wp.amhodgson.com/" target="_blank">https://wp.amhodgson.com</a></p>
            </div>

        </div>

        <div class="col-sm-12 mt-5 col-md-6">
            <div class="my-gallery">
                <figure>
                    <a href="images-new/amhodgson-section-main.png" itemprop="contentUrl" data-size="1048x1333">
                        <img src="images-new/amhodgson-main.png" itemprop="thumbnail" alt="amhodgson.com" />
                    </a>
                    <figcaption itemprop="caption description">Custom responsive Tumblr template<br/> with added Contact page (PHP)</figcaption>
                </figure>


            </div>
            <h6 class="trebuchet">Custom Tumblr Theme<br/><a href="http://www.amhodgson.com" target="_blank" class="port-links">AMHodgson.com</a> (Summer 2014-Summer 2019)</h6>
            <a href="#demo8" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo8" class="collapse calibri">
                <br/>

                <p>I created this responsive custom Tumblr theme for author AM Hodgson.  Before taking on this project I did not know much about Tumblr, so I was required to learn how to create a custom theme and found that it is a similar process to creating Wordpress themes.  For this project I also created a custom contact form page utilizing PHP.  I would not say that I am proficient at creating Tumblr themes but I am confident I could get better at it, and it would also not be difficult for me to learn similar templating.  If you wish to see the live version of this website please visit:  <a href="http://amhodgson.com/" target="_blank">http://www.amhodgson.com</a></p>


            </div>

        </div>



        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure>
                    <a href="images-new/laravel-blazersfans-mainpage.png" itemprop="contentUrl" data-size="1175x2294">
                        <img src="images-new/laravel-blazersfans-mainpage-thumb.png" itemprop="thumbnail" alt="Laravel Trail Blazers fan site Main Page" />
                    </a>
                    <figcaption itemprop="caption description">Laravel MVC <br/> Trail Blazers fan site Main Page</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">Learning the Laravel  Framework 2015<br/><a href="https://trailblazersfans.com" class="port-links" target="_blank">TrailBlazersFans.com</a></h6>
            <a href="#demo10" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo10" class="collapse calibri">
                <br/>
                <p>Since I became familiar with Rails and MVC during school I had been reading about other similar MVC frameworks and decided to learn Laravel in 2015 during my free time outside of class.  I was very happy I did because it is steadily becoming a favorite in my skillset.  Here is a recent example of what I can do while working with this technology in combination with styling.  Currently, I have a live version of this site at: <a href="https://trailblazersfans.com" target="_blank">https://trailblazersfans.com</a>.  The site is definitely a demo, and work still remains to be done.   Here is the <a href="https://github.com/iplayguitar81/beeftaco" target="_blank">GitHub repository</a> for this site.  It has been a fun and rewarding experience learning Laravel because I have found I am able to learn MVC frameworks fairly easily and am excited to learn many more during my career or as my personal time allows!</p></div>
        </div>



        <div class="col-sm-12 mt-5 col-md-6">

            <div class="my-gallery">

                <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                    <a href="images-new/ASP-mvc-albums-CRUD.png" itemprop="contentUrl" data-size="1024x1024">
                        <img src="images-new/ASP-mvc-albums-CRUD-thumb.png" itemprop="thumbnail" alt="CRUD MVC ASP" />
                    </a>
                    <figcaption itemprop="caption description">MVC ASP CRUD</figcaption>
                </figure>

            </div>
            <h6 class="trebuchet">ASP.NET MVC</h6>
            <a href="#demo9" class="btn btn-dark" data-toggle="collapse">More Info</a>
            <div id="demo9" class="collapse calibri">
                <br/>
                <p>Since I became familiar with Rails and the concept of MVC during school, I decided to learn ASP.NET MVC at the same time, while not busy studying.  Here is some idea of what I can do with that technology in a short amount of time.  Unfortunately,  I do not currently have a neatly designed page as I have mostly been focusing on learning the backend of this technology.  There are also other things (not pictured) that I have figured out with this technology like pagination of records- - for example, but I do not have a photo at this time only the code itself.  I also do not have a live version of this site but if requested I can provide examples of said code!  It has been a cool experience learning ASP.NET MVC because I have found that I am able to learn it and other MVC frameworks fairly easily and am excited about the prospect of learning more as time allows!</p></div>
        </div>


    </div>
    <!--end of portfolio galleries-->

</div>

</template>

<script>
    export default {
    name: 'Portfolio',

        components: {

    }

    }

</script>