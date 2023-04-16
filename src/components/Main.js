import React from 'react'; //todotask has to be change //samjho for video
import { FaCheck } from 'react-icons/fa' //change
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { useState } from 'react';
import Taskform from './Taskform';
import Date from "./Date";
export default function todotask({ props, Tasklist, checkComplete, removeComplete, Editing, setEditing }) {
  const ToggleEditing = () => {
    setEditing(true)
    if (Editing) {
      return (<li>
        <form>
          <input type="text"></input>
        </form>
      </li>)
    }

  }
  return Tasklist.map((todotask, index) => (
    <div className={todotask.isDone ? 'checkComplete todo-div' : 'todo-div'} key={index}>
      <div className='text'>{todotask.text}</div>
      <div className='icons' key={todotask.id}>
        <FaCheck id="unique" className={todotask.isDone ? 'hide' : 'ticktask'} onClick={() => { checkComplete(todotask.id) }}></FaCheck>
        <RiDeleteBin6Line className='deletetask' onClick={() => { removeComplete(todotask.id) }}></RiDeleteBin6Line>
        <AiFillEdit className={todotask.isDone ? 'hide' : 'edit'} onClick={ToggleEditing}>Edit</AiFillEdit>
      </div>
    </div>
  ));


}
