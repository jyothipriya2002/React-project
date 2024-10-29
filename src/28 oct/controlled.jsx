import { Component } from "react";
class   Todolist extends Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }
    render(){
        return(
            <>
            <h1>Todo List</h1>
            <form action="">
                <input type="text" name="data" onChange={this.data}>
                <button type="submit">Add</button>
            </form>
            </>
        )
    }

}


