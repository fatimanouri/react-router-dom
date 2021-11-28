import {useEffect,useState }from 'react';

const Home=()=>{

const [data,setdata]=useState();

useEffect(()=>{
    fetch("").then(res =>res.json()).then(result=>setdata(result.result[0].email));
},[])

    return(
       <h4>Home</h4>
    )
};

export default Home;