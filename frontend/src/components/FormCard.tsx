import { useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {BiAnalyse} from "react-icons/bi";

function FormCard() {

    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <div className='card grid border-slate-300 border w-60'>
            <div className='card-top w-full'>
                <img src='formcard.png' className='h-40'/>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-full p-5'>
                    <p className='font-bold'>Hello World</p>
                    <p>Created at</p>
                </div>
                <div className='pr-4'>
                    {toggle &&
                        <div className='absolute popup'>
                            <div className='flex items-center'><AiOutlineEdit style={{"marginRight":"15px"}}/> Edit Form</div>
                            <div className='flex items-center'><AiOutlineDelete style={{"marginRight":"15px"}}/>Delete Form</div>
                            <div className='flex items-center'><BiAnalyse style={{"marginRight":"15px"}}/>Analyze Response</div>
                        </div>
                    }
                    <BsThreeDotsVertical size={20} style={{"cursor":"pointer"}} onClick={()=>setToggle(!toggle)}/>
                </div>
            </div>
        </div>
    )
}

export default FormCard