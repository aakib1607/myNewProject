import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Categories() {
  const [data,setData]=useState([]);
  
    useEffect(()=>
    {
        fetch("https://api.webroot.net.in/categories.php").then(response=>response.json()).then(result=>setData(result));
    },[]);
    return(
        <div class="row">
            {data.map(cat=>
                <div class="MainCard">
                    <center>
                    <img src={cat.photo}/><br/>
                    <p> {cat.name} </p>
                    <p>{cat.details}</p>
                    <Link to={"/products/"+cat.cid}><button className="btn btn-primary pt-1">MoreProducts</button></Link>                                      
                    </center>
                </div>
                )}
        </div>
    );
}

export default Categories