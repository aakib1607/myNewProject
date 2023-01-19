import { useEffect, useState } from "react";

import { useCookies } from "react-cookie";

import BasketRow from "./basketrow";

function Basket()
{
    let [basket,setBasket]=useCookies('ECOM');
    let pids=basket.pids.split('#');

    return(
        <div>
            {basket.pids==""?"Bsaket is Empty":""}
            <table className="table table-strip">
            <thead>
                <tr>
                    <td>S.no</td>
                    <td>Products</td>
                    <td>Price</td>
                    <td>Details</td>
                    <td>Photo</td>
                </tr>
            </thead>
            <tbody>
                {pids.map(pid=>
               <BasketRow pid={pid}/>
                )}
            </tbody>
            </table>
        </div>
)}
export default Basket;