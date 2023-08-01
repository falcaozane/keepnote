import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const DisplayNote = (props) => {

  const date = new Date();
  const showDate = date.toLocaleDateString();
  const showTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const handleClick = (id)=>{
        props.getId(id)
    }

    const handleUpdate = (note) =>{
      props.getUpdateNoteId(note)
    }

  return (
    <div className="note" key={props.id}>
        {/*<p style={{"marginLeft":"50px"}}>{showDate} {showTime}</p>*/}
        <p className="title">{props.title}</p>
        <p className="content">{props.content}</p>
        <button onClick={()=>handleClick(props.id)}><DeleteIcon /></button>
        <button style={{"marginLeft": "10px"}} onClick={()=>handleUpdate({content: props.content, title: props.title, id: props.id})}><EditIcon/></button> 
    </div>
  )
}

export default DisplayNote

// to detect which note it is props.id is used 