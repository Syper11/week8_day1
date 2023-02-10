import React, { Component} from 'react'
import CheckboxList from '../components/CheckboxList'

export default class ToDo extends Component {
    
    

    render() {
        return (
            <div>
                <h1> To Do List</h1>
                <br/>
                <form onSubmit={this.props.handleToDoSubmit}>
                    <input placeholder='Add Item' name='myText'/>
                    <button type='submit'>Add</button>
                </form>



                <CheckboxList myList = {this.props.myList} deleteToDo={this.props.deleteToDo}/>

            </div>
        )
    }
    
}