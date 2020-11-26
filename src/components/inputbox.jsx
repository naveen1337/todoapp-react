import React from "react";

function Inputbox(props){
    return(
        <>
        <form onSubmit={props.submit} style={{ margin:10}}>
            <label htmlFor="todo">Add a Todo</label> <br/>  <br/>
            <input value={props.value} onChange={props.onchange} name="title" id="todo" type="text"/>
            <button>Submit</button>
        </form>
        </>
    )
}

export default Inputbox