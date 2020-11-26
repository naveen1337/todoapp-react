import React from "react"
import Todo from "./todo"

function Todolist({todos,ondelete,oncomplete}){
    return (
        <>
            <Todo  items={todos} ondelete={ondelete} oncomplete={oncomplete}></Todo>
        </>
    )
}

export default Todolist