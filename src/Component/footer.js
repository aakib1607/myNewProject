import React from 'react';
import Footerimg2 from '../image/baby.svg'
import Footerimg from '../image/Dove.webp'


function Footer() {
  return (
    <div class="main">
    <div class="container footerContainer">
    <div class="section flex">
        <div class="content">
            <img src={Footerimg} alt=""/>
        </div>
        <div class="content1">
                    <li class="listitem"><a href="#" class="linklist">Site Map</a></li>
            <li class="listitem"><a href="#" class="linklist">Privacy Notice</a></li>
            <li class="listitem"><a href="#" class="linklist">Terms of use</a></li>
            <li class="listitem"><a href="#" class="linklist">Accessibility</a></li>
        </div>
        <div class="content1">
            <li class="listitem"><a href="#" class="linklist">Contact Us</a></li>
            <li class="listitem"><a href="#" class="linklist">
                <i class="fa fa-map-marker location"></i>Where to Buy</a></li>
            <li class="listitem"><a href="#" class="linklist">What’s in our products</a></li>
            <li class="listitem"><a href="#" class="linklist">smartlabel </a></li>
            <li class="listitem"><a href="#" class="linklist">Community guidelines</a></li>
        </div>
        <div class="content1">
            <img src={Footerimg2} width="100px" alt=""/>
            <div class=" flex">
                <i class="fa fa-facebook-f icon"></i>
                <i class='fa fa-twitter icon'></i>
                <i class="fa fa-instagram icon"></i>
                <i class="fa fa-youtube icon"></i>
            </div>
            <li class="listitem"><a href="#" class="linklist">United States</a></li>
            <li class="listitem"><a href="#" class="linklist">© 2022 Unilever</a></li>
        </div>
     </div>
    </div>
</div>
  )
}

export default Footer