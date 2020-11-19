import React from 'react'
class Add extends React.Component{
    state={
        text:""
    };
    addTodo(e){
        e.preventDefault();
        this.props.addHandle(this.state.text);
        this.setState({text:""})
    }

    render() {

        return(
            <div className="add-section">
                <form onSubmit={(e)=>{this.addTodo(e)}}>
                    <input type="text" value={this.state.text} placeholder="new Todo " onChange={(e)=>{this.setState({
                        text:e.target.value})}
                    }/>
                    <button >Add Todo </button>
                </form>
            </div>
        )
    }
}
 export default Add;
