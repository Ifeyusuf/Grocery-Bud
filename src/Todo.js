import React, {useState, useReducer} from 'react'
import Modal from './Modal';
import reducer from './reducer';
import {BsTrash} from "react-icons/bs"


const defaultstate= {
  people:[],
  modalContent:"",
  modalContents:"",
  modal: false
}

const Todo = () => {
  
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultstate);

  const handlerSubmit= (e) =>{
    e.preventDefault();
    if(name){
      const newItem= {...state, id: new Date().getTime().toString(), name}
      dispatch ( {type: "Add_Item", payload:newItem})
    }
    else{
      dispatch({type: "NO_VALUE"});
    }
  };

  const clealAll= ()=> {
    dispatch({type: "CLEAR__ALL"})
  };

  const closeModal= () =>{
    dispatch ( { type: "CLOSE"})
  }


  return (
    <>
    <section>
      <div className='input__container'>
          <div className='px__px py__2'>
          <p>{state.modal && <Modal modalContent={state.modalContent} modalContents={state.modalContents} closeModal={closeModal}/>}</p>
      <form action="" onSubmit={handlerSubmit} className="text__center">

        <input type="text" 
       value={name} placeholder=""
       onChange={(e)=> setName(e.target.value)} className="targetholder" />
       
        <button className='btn'>Add</button>
      </form>
      <div>
        <ul className='mx__auto'>
          {state.people.map( (person)=>{
            const {id, name} = person;
            return(
              <li key={id} className="d__flex justify__between my__px">
                {name}
               <button className='btn-r' onClick={
                ()=>{dispatch({type: "REMOVE", payload:person.id})}
               }>{<BsTrash/>}</button>
              </li>
            )
          })}
          <div className=" text__center">
        <button onClick={clealAll} className="clear">Clear all</button>
        </div>
        </ul>
        
      </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Todo
