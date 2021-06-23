import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const ToDolist = (props) => {
    const [line ,setline]=useState(false)
    const under=()=>{
        setline(true)
    }
    return(
        <>
        <div className='todo_style' >
            <span onClick= {under} > 
                <DeleteIcon className="fa-times"  />
            </span>
            <li style={{textDecoration : line ? 'line-through' : 'none'}}  >{props.text}</li>) 
        </div>
        </>   
    )   

}

export default ToDolist
