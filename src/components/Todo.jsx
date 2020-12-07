import React from "react";

class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            todos:[],
            value:""
        }
    }

    add_todos = ()=>{
        // this.state.todos.push(this.state.value)
        this.setState({
            // todos: this.state.todos
            todos: [...this.state.todos,this.state.value],
            value: ""
        })
    }
    
    render(){
        return(
            <div>
                <input type="text" onChange={(e)=> this.setState({value:e.target.value})} value={this.state.value}/>
                <button onClick={this.add_todos}>Add Item</button>
                
                
                
                <ul>
                    {this.state.todos.map( (value,index)=>{
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo;