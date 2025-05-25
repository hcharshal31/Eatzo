import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1: 1,
            count2: 2,
            count3: 3,
            count4: 4,
            count5: 5,
            count6: 6,
            count7: 7,
            count8: 8,
            count8: 9,
            count8: 10,
        }
    }
    render(){
        return(
            <div className="user-card">
                <p>{this.state.count1}</p>
                <button onClick={
                    ()=>{
                        this.setState({count1: this.state.count1 + 1});
                    }
                }>+</button>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}

export default User;