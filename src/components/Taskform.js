import React, { useState } from "react";
import Todolist from "./Todolist";
import { FaCheck } from 'react-icons/fa' //change
import { RiDeleteBin6Line } from 'react-icons/ri'
import Main from "./Main";
import Date from "./Date"
export default function Taskform(props) {
    const [Editing, setEditing] = useState(true);
    const [input, setInput] = useState('');// using state for input task
    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmitTask = (e) => {
        e.preventDefault()// in order to prevent reloading of the page when the form submit  
        props.addComplete({
            id: Math.random(),
            text: input,
            isDone: false
        })
        setInput('');
    }
    return (
        <>
        <Date />
        <form className='todoform'>
            <input type="text" placeholder='Add a task todo' onChange={handleChange} className='input' value={input} name='text'></input>
            <button type="submit" className="button" onClick={handleSubmitTask}> Task</button>
        </form>
        </>
    )

}
