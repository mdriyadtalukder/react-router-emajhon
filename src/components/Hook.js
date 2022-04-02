import { useEffect, useState } from "react"

const useProduct=()=>{
    const [pro,setpro]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setpro(data))
    },[])
    return [pro,setpro]
}
export default useProduct;
