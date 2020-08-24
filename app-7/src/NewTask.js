import React, {Component} from 'React'

class NewTask extends Component{
    constructor() {
        super()
        this.state = {
            input: ''
        }

        this.handleAdd = this.handleAdd.bind(this)
    }
        handleInputChange(value) {
            this.setState({ input: value })
        }

        handleAdd() {
            this.props.add(this.state.input)
            this.setState({ input: '' })
        }

        render() {
            return (
                <div>
                    <input 
                    value={this.state.input}
                    placeholder="Enter new task"
                    onChange={e => this.handleInputChange(e.targer.value)}
                    />
                    
                    <button onClick={this.handleAdd}>Add</button>
                </div>
            )
        }


    }

    export default NewTask







