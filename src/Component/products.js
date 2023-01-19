import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useParams } from 'react-router-dom';
import addcart from '../image/addtocart.jpeg' 

function Products() {
  const [data,setData]=useState([]);
    let {id}=useParams();
    let [basket,setBasket]=useCookies('ECOM')
    useEffect(()=>
    {
        fetch("https://api.webroot.net.in/products.php").then(response=>response.json()).then(result=>setData(result));
    },[]);
    function myFilter(pr)
    {
        if(pr.cid==id || id==null)
            return true;
        else
            return false;
    }

      function addtocart(event){
        let pid=event.target.alt;
        if(basket.pids=undefined)
        {
          setBasket("pids",pid);
        }
        else{
          let x=basket.pids;
          setBasket("pids",x+"#"+pid);
        }
        // alert("success");
      }
  return (
    <div class="row">            
            {data.filter(myFilter).map(pr=>
                <div class="MainCard">
                    <center>
                    <img src={pr.photo}/><br/>
                   <p> {pr.pname}</p>
                    <p>{pr.details}</p>
                    <p>Rs {pr.price}/-</p>
                    <Link to={"/basket/"+pr.cid}><img width='100px' alt={pr.pid} src={addcart} onClick={addtocart}/></Link>
                    {/* <Link to={"/basket/"+pr.cid}><button className="btn btn-primary my-2" alt={pr.pid} onClick={addtocart}>AddToCart</button></Link> */}
                    </center>
                </div>
                )}
        </div>
  );
}

export default Products