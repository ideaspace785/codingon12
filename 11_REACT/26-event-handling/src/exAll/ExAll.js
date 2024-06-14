import { useState } from "react";
import Input from "./Input";
import Result from "./Result";

export default function ExAll(){
    const [data, setData]= useState({
        fruit:"apple",
        background:'black',
        color:'white',
        content:'text'
    });
    return <div>
        <div>
            <Select  setData={setData}/>
            <Input  setData={setData}/>
            <Result  data={data}/>

        </div>
    </div>
}