import React from 'react';
import './App.css' ;
import Add from "./component/Add";
import DisplayTodos from "./component/DisplayTodos";

class App extends React.Component{
    state={
        todos:[
            {text:"go to work",id:"1",isCompleted:false},
            {text:"have a lunch",id:"2",isCompleted:false},
            {text:"meeting with manager",id:"3",isCompleted:true}
        ]
    };
     deleteHandle=(id)=>{
         this.setState({
             todos:this.state.todos.filter(
                 (todo)=>{return todo.id !== id}
             )
             }
         )
     };

    handleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) =>
                {return   todo.id === id ? {...todo, isCompleted: !todo.isCompleted }: todo}
            ),
        });
        console.log(this.state)
    }

    addHandle=(newText)=>{
        console.log(this.state)
        const newTodo = { text: newText, isCompleted: false, id: this.state.todos.length+1 };
        console.log(newTodo)
        this.setState({
            todos:[...this.state.todos,newTodo]
        });
        console.log(this.state)
    }
render() {

    return(
        <div className="App">
            <h1>TodoApp</h1>
            <Add  addHandle={this.addHandle}/>
            <div className="display-container">
            <DisplayTodos
            todos={this.state.todos} deleteHandle={this.deleteHandle}
            handleComplete={this.handleComplete}
            completedHandle={this.completedHandle}/>
            </div>
        </div>
    )
}
}
export default App;
