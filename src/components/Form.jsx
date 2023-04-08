import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';

const Form = (props) => {

    const [note, setNote] = useState({title:"",content:""})


    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setNote({...note, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onCreate(note)
        setNote({title: "", content: ""}) // to clear note after submission
    }
  return (
    <form method='post' onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder='Enter Title...' onChange={handleChange} value={note.title} />
        <textarea name='content' placeholder='description'  rows="4" onChange={handleChange} value={note.content} />
        <button type='submit' ><AddIcon/></button>
    </form>
  )
}

export default Form