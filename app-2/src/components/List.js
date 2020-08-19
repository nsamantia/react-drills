import React, {Component} from 'react'

class List extends Component {
    constructor() {
        super()
        this.state ={
            list: ["Cat", "Dog", "Frog"]

        } 
    }

   


    render(){
        let items = this.state.list.map((e) => {  
            return <p> {e} </p>

        })
        return(
            <div>
                <ul>
                {items}
                </ul>
                
            </div>
        )
    }
}

export default List

