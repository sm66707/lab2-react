import { Component } from "react";

// let Search=()=>{
//     return(
//         <div>
//             Serach
//         </div>
//     )
// }


class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
        }
    }
    changeText=(e)=>{
       this.setState({text:e.target.value})
       this.props.onKeyChange(e.target.value);

    }
    render(){
        return(
            <div className="search-comp">
                <h3 className="header">Search Component</h3>
            <input 
            type="text"
            value={this.state.text}
            onChange={this.changeText}
            />
            <h3>Keyword:{this.state.text}</h3>
        </div>
        )
    }
}
export default Search;