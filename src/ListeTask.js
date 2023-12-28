import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Done, chekdone, remove } from './Slices/TodoSlice'
import { update } from './Slices/TodoSlice'
import './App.css';

const ListeTask = () => {
    const sta = useSelector(state => state.TodoSlice)
    const dispatch = useDispatch()
    const [up, setUp] = useState("")
    const [Done, setDone] = useState('true')
    return (
        <div className='tout'>
            <div className='Button'>
                
                <button onClick={() => setDone("all")}>all</button>
                <button onClick={() => setDone("true")}>Is Done</button>
                <button onClick={() => setDone("false")}>Not Done</button>
            </div>
            {/* // affichage task a  isDone : true */}
            {Done == "true" ? sta.filter((el) => el.isDone == true).map((el) => (
                <div>
                    {el.isDone ? (
                        <div style={{color: "green" }}>
                            <h1>{el.description}</h1>
                            <h1>{el.id}</h1>
                        </div>) : (
                        <div style={{ color: "red" }} >
                            <h1>{el.description}</h1>
                            <h1>{el.id}</h1>
                        </div>)}
                    <div className='fiel'>
                        <fieldset>
                            <legend>isDone</legend>
                            <div>
                                <div>
                                    <input type="checkbox"

                                        onChange={() => (dispatch(chekdone(el.id)))}
                                    />
                                    <label >{el.isDone ? 'True' : 'False'}</label>
                                </div>
                            </div>
                        </fieldset>
                        <br></br>
                        <fieldset>
                                {/* modification de la description selon la valeur de l'input  */}
                            <legend>upDate</legend>
                            <input type='text' onChange={(e) => setUp(e.target.value)}></input>
                            <button onClick={() => dispatch(update({ id: el.id, up: up }))}>update</button>
                        </fieldset>
                    </div>

                </div>

            ))
            // affichage task a  isDone : false
                : Done == "false" ? sta.filter((el) => el.isDone == false).map((el) => (
                    <div>
                        {el.isDone ? (
                            <div style={{color: "green" }}>
                                <h1>{el.description}</h1>
                                <h1>{el.id}</h1>
                            </div>) : (
                            <div style={{color: "red" }} >
                                <h1>{el.description}</h1>
                                <h1>{el.id}</h1>
                            </div>)}
                            <div className='fiel'>
                        <fieldset>
                            <legend>isDone</legend>
                            <div>
                                <div>
                                    <input type="checkbox"

                                        onChange={() => (dispatch(chekdone(el.id)))}
                                    />
                                    <label >{el.isDone ? 'True' : 'False'}</label>
                                </div>
                            </div>
                        </fieldset>
                        <br></br>
                        <fieldset>
                            {/* modification de la description selon la valeur de l'input  */}
                            <legend>upDate</legend>
                            <input type='text' onChange={(e) => setUp(e.target.value)}></input>
                            <button onClick={() => dispatch(update({ id: el.id, up: up }))}>update</button>
                        </fieldset>
                    </div>



                    </div>
                ))
                  // affichage tout les taskes
                    : sta.map((el) => (
                        <div>
                            {el.isDone ? (
                                <div style={{ color: "green" }}>
                                    <h1>{el.description}</h1>
                                    <h1>{el.id}</h1>
                                </div>) : (
                                <div style={{ color: "red" }} >
                                    <h1>{el.description}</h1>
                                    <h1>{el.id}</h1>
                                </div>)}
                                <div className='fiel'>
                        <fieldset>
                            <legend>isDone</legend>
                            <div>
                                <div>
                                    <input type="checkbox"

                                        onChange={() => (dispatch(chekdone(el.id)))}
                                    />
                                    <label >{el.isDone ? 'True' : 'False'}</label>
                                </div>
                            </div>
                        </fieldset>
                        <br></br>
                        <fieldset>
                                {/* modification de la description selon la valeur de l'input  */}
                            <legend>upDate</legend>
                            <input type='text' onChange={(e) => setUp(e.target.value)}></input>
                            <button onClick={() => dispatch(update({ id: el.id, up: up }))}>update</button>
                        </fieldset>
                    </div>



                        </div>
                    ))}
        </div >
    )
}

export default ListeTask