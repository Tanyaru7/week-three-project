import { Component } from "react";

export class List extends Component {
    state = {
        userInput: ' ',
        groceryList: [ ]
    }

    onChangeEvent(e){
        this.setState({userInput:e})
    }
    
    addItem(event){
        if(event === ' '){
            alert('Please enter an item')
        }
        else{
            let listArray = this.state.groceryList;
            listArray.push(event);
            this.setState({groceryList:listArray, userInput:' '})
        }
    }

    crossWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }

    deleteWord(){
        let listArray = this.state.groceryList;
        listArray = [ ];
        this.setState({groceryList:listArray})
    }

    onFormSumbit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSumbit}>
                <div className="container">
                    <input type="text"
                    onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                    value = {this.state.userInput}/>
                    <button className="btn" onClick={()=> this.addItem(this.state.userInput)}>+</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index)=>(
                        <li onClick={this.crossWord}
                        key={index}>{item}</li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick={() =>this.deleteWord()} className="btnTwo">Delete</button>
                </div>
                </form>
            </div>
        )
    }
}