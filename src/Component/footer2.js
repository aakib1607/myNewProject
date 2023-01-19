import React from 'react'

function Footer2() {
  return (
    <div class="mainfooter">
        <div class="footer">
            <div class="footer-top">
                <ul class="navigation-list">
                    <li class="listitem"><a class="linklist" href=""></a>Work</li>
                    <li class="listitem"><a class="linklist" href=""></a>Services</li>
                    <li class="listitem"><a class="linklist" href=""></a>About</li>
                    <li class="listitem"><a class="linklist" href=""></a>Optimization </li>
                    <li class="listitem"><a class="linklist" href=""></a>Shopify Plus</li>
                    <li class="listitem"><a class="linklist" href=""></a>Insights</li>
                    <li class="listitem"><a class="linklist" href=""></a>Podcast</li>
                    <li class="listitem"><a class="linklist" href=""></a>Careers</li>
                    <li class="listitem"><a class="linklist" href=""></a>Contact</li>
                </ul> 
                <div class="textfooter">
                    <h4 class="text-form-head">New York</h4>
                      <p class="des-footer">
                          <a class="text-footer-link" href="">609 Greenwich Street</a>
                      </p>
                      <p class="des-footer">
                          <a class="text-footer-link" href="">New York, NY 10014</a>
                      </p>
                      <p class="des-footer">
                          <a class="text-footer-link" href="">(646)-982-1574</a>
                      </p>
                      <p class="des-footer">
                          <a class="text-footer-link" href="">newbusiness@avexdesigns.com</a>
                      </p>
                </div>
            </div>
            <div class="footer-middle">
                <div class="text-form">
                    <h4 class="text-form-head">Join for monthly Insights</h4>
                    <form action="" class="form-type">
                        <input type="email" name='EMAIL' placeholder='your email' />
                        <input type="submit" className='send-arrow null' value='&nbsp;' />
                    </form>
                    <span className='formresponsemessage'></span>
                </div>
                <div class="social-icon">
                      <i class="fa fa-facebook-f icon"></i>
                      <i class='fa fa-twitter icon'></i>
                      <i class="fa fa-instagram icon"></i>
                      <i class="fa fa-youtube icon"></i>
                </div>
            </div>
            <hr class="line"/>
            <div class="footer-bottom">
                <div class="footer-bottom-left">
                    <p className="copyright">©2021 AVEX DESIGNS</p>
                </div>
                <div class="footer-bottom-right">
                  <div class="descripton-text">
                    <p class="descripton-para">Avex is a eCommerce Agency and Shopify Plus agency in New York City. Avex specializes in web design, Shopify Plus eCommerce, development, design, email marketing and ecommerce optimization. Avex is rated 5 out of 5 on Google Clutch.co.</p>
                    <i class="fa fa-youtube icon"></i>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer2