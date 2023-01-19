import React from 'react'
import Laptop from '/babydove/src/image/laptop.jpg'
import Mobile from '/babydove/src/image/mobile.png'
import Saree from '/babydove/src/image/saree.jpg'


function Home() {
  return (
    <>
<div class="container text-center">
      <div class="row">
               <div class="col MainCard">
                 <div class="card">
                    <img src={Laptop}  class="card-img-top" alt="..." height="300px"/>
                   <div class="card-body">
                     <h5 class="card-title">Laptops</h5>
                      <p class="card-text">A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered </p>
                      <a href="http://localhost:3000/products/101" class="btn btn-primary">More Products</a>
                  </div>
                 </div>
               </div>
               <div class="col MainCard">
                 <div class="card">
                   <img src={Mobile} class="card-img-top" alt="..." height="300px"/>
                    <div class="card-body">
                      <h5 class="card-title">Mobiles</h5>
                      <p class="card-text">A mobile,portable device for connecting to a telecommunications network in  video, or other data.</p>
                      <a href="http://localhost:3000/products/102" class="btn btn-primary">More Products</a>
                  </div>
                 </div>
               </div>
               <div class="col MainCard">
                 <div class="card">
                   <img src={Saree} class="card-img-top" alt="..." height="300px"/>
                    <div class="card-body">
                      <h5 class="card-title">Sarees</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="http://localhost:3000/products/103" class="btn btn-primary">More Products</a>
                    </div>
                 </div>
               </div>
               
      </div>
</div>
    </>
  )
}

export default Home