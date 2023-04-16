import React, { useState } from "react";
import Taskform from './Taskform'
import { FaCheck } from 'react-icons/fa' //change
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import Main from './Main'

export default function Todolist() {
    const [Editing, setEditing] = useState(true);
    const [Tasklist, setTasklist] = useState([]); // we need an array that contain all the task
    const [task, setTask] = useState('');
    const addComplete = task => {
        if (!task.text) {  //if the task is coming only then it's added
            return
        }
        const addtask = [task, ...Tasklist]; //push all the task to the end of a TaskList array
        setTasklist(addtask);
    }
    const removeComplete = id => { //Remove Todo from Tasklist
        let updatetasklist = [...Tasklist].filter(task => task.id != id)
        setTasklist(updatetasklist)
    }

    const checkComplete = id => {
        let updatetasklist = Tasklist.map(todotask => {
            if (todotask.id == id) {
                todotask.isDone = true;
            }
            return todotask;
        })
        setTasklist(updatetasklist)
    }
    return (
        <div>
            <Taskform addComplete={addComplete} />
            <Main Tasklist={Tasklist} checkComplete={checkComplete} removeComplete={removeComplete} setEditing={setEditing} />
        </div>

    )
}
