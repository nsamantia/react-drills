import React, {Component} from 'react'

class TextInput extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
        

        
    }

    handleChange(value){
        this.setState({text: value});

    }

    render(){
        return (
            <div className='input-text'>
                <input type="text"
                 value={this.state.value} 
                 onChange={e => this.handleChange(e.target.value)}
                 />
                 <p>{this.state.text}</p>
            </div>


        )
    }
}

export default TextInput