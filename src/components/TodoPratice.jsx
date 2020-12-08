import React from "react";

class TodoPratice extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: [],
            value:""
        }
    }
    
    onHandleChange = (event)=>{
        this.setState({
            value: event.target.value
        })
    }

    onHandleClick = ()=>{
        this.state.todos.push(this.state.value)
        this.setState({
            todos:this.state.todos
        })
    }

    onDelete = (index)=>{
        this.state.todos.splice(index,1)
        this.setState({
            todos:this.state.todos
        })
    }

    onEdit = (key) => {
        var updatedValue = prompt("Enter Updated Value: ")
        this.state.todos[key] = updatedValue;
        this.setState({
            todos:this.state.todos
        })
    }

    render(){
        return(
            <div>
        
                <input type="text" onChange={this.onHandleChange} value={this.state.value}/>
                <button onClick={this.onHandleClick}>Add Items</button>
            
                <ul>
                    {this.state.todos.map((value,key)=>{
                        return <li key={key}>{value}
                        <button onClick={()=>this.onEdit(key)}>Edit</button>
                        <button onClick={()=> this.onDelete(key)}>Delete</button>
                        </li>
                    })}
                </ul>
            
            </div>
        )
    }
}

export default TodoPratice;