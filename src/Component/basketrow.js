import { useEffect, useState } from "react";

function BasketRow(props)
{
    let [data,setData]=useState();    
    
    useEffect(()=>
    {
        fetch("https://api.webroot.net.in/products.php?pid="+props.pid).then(response=>response.json()).then(result=>
        {
        setData(result);        
        });    
    },[]);
    return(
        <tr>
            <td>{props.pid}</td>
            <td>{data!=undefined?data.pname:""}</td>
            <td>{data!=undefined?data.price:""}</td>
            <td>{data!=undefined?data.details:""}</td>
            <td><img src={data!=undefined?data.photo:""} width="50px" /></td>
        </tr>
    );
}
export default BasketRow;