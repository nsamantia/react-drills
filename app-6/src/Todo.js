import React, {Component} from 'react'

class Todo extends Component{

    render(){
        return(
            <div>
                <p>{this.Props.task}</p>
            </div>
        )
    }

}

export default Todo