import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'

const Myform = () => {
    const [pass, setpass] = useState("")
    const [Cpass, setCpass] = useState("")
    const [num, setnum] = useState("")
    const formsubmit = (e) => {
        let input = document.getElementById("input");
        let inputnum = document.getElementById("inputnum");
        let inputpass = document.getElementById("inputpass");
        let inputemail = document.getElementById("inputemail");
        if (pass === Cpass && num.length === 10) {
            console.log(input.value + inputnum.value + inputemail.value + inputpass.value);
            setpass("");
            setCpass("");
            setnum("");
            input.value = "";
            inputemail.value = "";
            document.getElementById("Cpass").classList.add("black")
            document.getElementById("ans").innerHTML = "success";
        } else if(pass!= Cpass){
            console.log("confirm password is incorrect");
            document.getElementById("Cpass").classList.add("red");
        }
         else if(num.length != 10){
            console.log("Number is invalid");
            document.getElementById("inputnum").classList.add("red");
        }
         else {
            document.getElementById("ans").innerHTML = "error";
        }
        e.preventDefault();
    }
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
            <h1 id='ans' className='text-[40px] font-bold'></h1>
            <div className="max-w-[600px] mx-auto px-3 bg-black py-10 rounded-xl">
                <h2 className='text-white text-[30px] font-bold font-sans text-center pb-4'>form validation</h2>
                <form onSubmit={formsubmit}>
                    <div className="flex items-center gap-5 justify-between">
                        <input className='border w-full border-[#00000066] rounded-[5px] pl-2 py-1' id="input" type="name" placeholder='name' required />
                        <input className='border w-full border-[#00000066] rounded-[5px] pl-2 py-1' id="inputnum" value={num} onChange={(e) => setnum(e.target.value)} type="number" placeholder='phone no.' required />
                    </div>
                    <p id='demo' className='text-red-800 text-[25px]'></p>
                    <div className="my-5">
                        <input className='border w-full border-[#00000066] rounded-[5px] pl-2 py-1' type="email" id="inputemail" placeholder='Email' required />
                    </div>
                    <div className="flex items-center gap-5 justify-between">
                        <input className='border w-full border-[#00000066] rounded-[5px] pl-2 py-1' id="inputpass" type="password" value={pass} placeholder='password' onChange={(e) => setpass(e.target.value)} required />
                        <input className='border w-full border-[#00000066] rounded-[5px] pl-2 py-1' id="Cpass" type="password" value={Cpass} placeholder='conform password' onChange={(e) => setCpass(e.target.value)} required />
                    </div>
                    <input className='w-full py-[11px] text-white bg-[#2C49FE] rounded-[23px] mt-5 cursor-pointer' type="submit" />
                </form>
            </div>
        </div>
    )
}
export default Myform