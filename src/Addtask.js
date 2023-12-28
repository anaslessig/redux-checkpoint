import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { add } from './Slices/TodoSlice'

const Addtask = () => {
    const [description, setdes] = useState()
    const dispatch = useDispatch()
    return (
        <div>
            <div className='ADD'>
                {/* Add a task  */}
                <input type='text' onChange={(e) => setdes(e.target.value)}></input>
                <button onClick={() => dispatch(add(description))}>add new</button>
            </div>
        </div>
    )
}

export default Addtask