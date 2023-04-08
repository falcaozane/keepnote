import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React,{useState,useEffect} from 'react'
import DisplayNote from './DisplayNote'

import {db} from "../firebase-config"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { async } from '@firebase/util'


const Note = () => {

    const [notes, setNotes] = useState([])
    const [addNote, setAddNote] = useState({title:"",content:""})
    const [id, setId] = useState("")

    const noteRef = collection(db, "note")

    useEffect(()=>{
        const getNotes = async()=>{
            const data = await getDocs(noteRef);
            setNotes(data.docs.map((docs)=>({...docs.data(), id: docs.id})))
        }
        getNotes()
    }, [noteRef])

    const handleChange =  (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setAddNote({...addNote, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // to clear note after submission
        await addDoc(noteRef, addNote)
    }
    /*
    const createNote = (note)=>{
        setNotes((prevNotes)=>{
            return [...prevNotes, note]
        })
    }
    */
    const deleteNote = async(id) =>{
        /*
        setNotes((prevNotes)=>{
            return prevNotes.filter((item, index)=>{
                return index !==id;
            })
        })
        */
       const deletenote = doc(noteRef, id)
       await deleteDoc(deletenote)
    }

    
    const updateNote = async (note) => {
        // console.log(note);
        setAddNote({title: note.title, content: note.content})
        setId(note.id)
      }
    
    
      const updatedNote = async (id) =>{
        //console.log(id);
        const updatenote = doc(db, "note", id)
        await updateDoc(updatenote, addNote)
      }

  return (
        <div className='container'>
            <form method='post' onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='Enter Title...' onChange={handleChange} value={addNote.title} />
                <textarea name='content' placeholder='Description' rows="4" onChange={handleChange} value={addNote.content} />
                <div style={{"display": "flex"}}>
                    <button type='submit' ><AddIcon/></button>
                    <button style={{marginLeft:"10px"}} type='button' onClick={()=>updatedNote(id)}><EditIcon/></button> 
                </div>
            </form>

            
            <div className='note-container'>
                {notes && notes.map((note) => (
                <DisplayNote title={note.title} content={note.content} id={note.id} getId={deleteNote} getUpdateNoteId={updateNote} key={note.id} />
                 ))}
            </div>
        </div>   
  )
}

export default Note