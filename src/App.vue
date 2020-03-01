<template>
  <b-container id="app">
    <navbar></navbar>


    <router-view class="mt-5"> </router-view>

    <sticky-footer></sticky-footer>
  </b-container>
</template>

<script>
import Navbar from "./components/Navbar";

import StickyFooter from "./components/StickyFooter";

export default {
  name: 'App',
  components: {
    Navbar,
    StickyFooter,
  }
}
</script>

<style>


  .trebuchet {
    font-family: 'Trebuchet MS';
  }


  .portrait-about{
    border: 3px solid #6c757d;
  }

  h1 {
    font-size: 3rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2.lg-headers-sub{
    font-size: 1.5rem;
  }


  .calibri {
    font-family: 'Calibri';
  }

  .main-text {
    font-size: 1.3em;
  }

  .nav-tabs .nav-link {
    border: 1px solid #00000014;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }

  .nav-link{
    color: #000000;
  }

  .nav-link:hover{
    color: #000000;
  }

  .icon-link{
    color: #000000;
  }

  .icon-link:hover{
    color: #000000;
  }

  .badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 100%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .h3-resume {
    font-size: 1.45rem;

  }

  .resume-break{
    display:inline-block;
  }

  .rating {
    width: 150px;
    height: 30px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  .stars {
    background: url(./assets/stars-newer-bg-lg.png);
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
  }

  .back {
    background: #000000;
    border-bottom: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    border-top: 1px solid #ffffff;

  }

  .back, .stars {
    width: 100%;
    height: 100%;
  }



  .form-control:focus {
    color: #000000;
    background-color: #fff;
    border-color: #000000;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,0,0,.20);
  }

  label.error{

    color: black;
    background-color: #d2d6da;
    padding:.5em;
    font-family: calibri;
    font-size: 1.1em;
  }

  label.resume-label {
    font-size: 1.2em;
    font-weight: 900;
  }

  .my-gallery img {
    width: 100%;
    height: auto;
    border: 2px solid #000000 !important;
  }

  /*portfolio styles*/

  a.port-links{

    color: #000000;

  }

  a.port-links:hover{
    color:#000000;
  }

  a.port-links:visited{
    color:#000000;
  }


  /*portfolio experiments...*/

  .card-img-wrap {
    overflow: hidden;
    position: relative;
  }
  .card-img-wrap:after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    /*background: rgba(255,255,255,0.3);*/
    opacity: 0;
    transition: opacity .25s;
  }
  .card-img-wrap img {
    transition: transform .25s;
    width: 100%;
  }
  .card-img-wrap:hover img {
    transform: scale(1.2);

  }
  .card-img-wrap:hover:after {
    opacity: 1;

  }


  /*media queries*/

  /*max hide tab text */
  @media screen and (max-width: 499px) {
    span.tab-text {
      display: none;
    }

    .school-logo {
      width:35px;
    }

    .h3-school-title{
      font-size: 1rem;
    }


    h2.lg-headers-sub {
      font-size: 1.3rem;
    }


    h1#contact_header{
      font-size:2em;
    }

    h1#contact_header i{
      font-size:1em;
    }



    h1#resume_header{
      font-size:2em;
    }

    h1#resume_header i{
      font-size:1em;
    }


    h1#portfolio_header{
      font-size:2em;
    }

    h1#portfolio_header i{
      font-size:1em;
    }


    h2 {
      font-size:1.7rem;
    }

    img#portrait-img{
      width:150px;
    }


    h1#name_header{
      font-size:2em;
    }



    .rating {
      width: 120px;
      height: 24px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
    .stars {
      background: url(./assets/stars-newer-bg-lg_mobile.png);
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
    }

    .back {
      background: #000000;
      border-bottom: 1px solid #ffffff;
      border-left: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
      border-top: 1px solid #ffffff;

    }

    .back, .stars {
      width: 100%;
      height: 100%;
    }


  }

</style>
