import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDolist from './ToDolist';
const App=()=>{
    const [inputlist,setinputlist] = useState('')
    const [items,setitems] = useState([])
    const itemevent=(event)=>{
        setinputlist(event.target.value)
    }
    const listofitems=()=>{
        setitems((oldlist)=>{
            return [...oldlist,inputlist]
        })
        setinputlist('')
    }
    return(
        <>
        <div className='main_div' >
            <div className='center_div' >
                <br />
                <h1 className >ToDo List</h1>
                <br />
                <input type="text" placeholder="Add an Items" onChange={itemevent} value={inputlist}/>
                <Button class="btn_green" onClick={listofitems} >
                    <AddIcon />
                </Button>
                <ol>
                    {items.map((prevalue,index)=>{
                        return <ToDolist text={prevalue} key={index} />
                    })}
                </ol>

            </div>

        </div>
        </>
    )
}

export default App;

