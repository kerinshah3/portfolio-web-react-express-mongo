import React,{useState} from "react";
import Axios from "axios";

export default function Home(){

    const [excuse ,setExcuse] = useState("")


    const fetchData = (name) => {
        const url = `https://excuser-three.vercel.app/v1/excuse/${name}/`
        console.log(url)
        Axios.get(url)
            .then((res) =>  {
                setExcuse(res.data[0].excuse)
            })
    }

    return(
        <div>
            <button onClick={() => fetchData("office")}>Office</button>
            <button onClick={() => fetchData("party")}>Party</button>
            <button onClick={() => fetchData("developers")}>Developers</button>
            <h1>{excuse}</h1>
        </div>
    )
}