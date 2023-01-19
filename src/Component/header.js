import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import Basket from './basket'
import Categories from './categories'
import Footer from './footer'
import Home from './home'
import Products from './products'
import Babydove from '/babydove/src/image/Dove.webp'

function Header() {
  return (
    <div>
        <header class="header">
            <div class="mainheader">
                <div class="logo">
                    <img width="100px" src={Babydove}/>
                </div>
                <ul class="flex">
                    <li class="list"><Link to="/">Home</Link></li>
                    <li class="list"><Link to="/categories">Categories</Link></li>
                    <li class="list"><Link to="/products">Products</Link></li>
                    <li class="list"><Link to="/basket">Basket</Link></li>
                </ul>
               
                <div class="icons">
               <a href='https://www.facebook.com/' target='_blank'> <i class="fa fa-facebook-square headicon" aria-hidden="true"></i></a>
                <a href='https://www.linkedin.com/'  target='_blank'><i class="fa fa-linkedin headicon" aria-hidden="true"></i></a>
                <a href='https://twitter.com/'  target='_blank'><i class="fa fa-twitter headicon" aria-hidden="true"></i></a>
                <a href='https://www.instagram.com/'  target='_blank'><i class="fa fa-instagram headicon" aria-hidden="true"></i></a>
                </div>
            </div>
            
        </header>
        <Routes>
                <Route path='/' element={<Home/>} />
                 <Route path='/categories' element={<Categories/>} />
                 <Route path='/products' element={<Products/>} />
                 <Route path='/products/:id' element={<Products/>} />
                 <Route path='/basket' element={<Basket/>} />
                 <Route path='/basket/:id' element={<Basket/>} />

             </Routes> 
             <Footer/>
    </div>
  )

}

export default Header