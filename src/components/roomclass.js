import React, {Component} from 'react'

const RoomContext = React.createContext();

class RoomClass extends Component{
    state ={
        Rooms:[],
        loading: true
    };
    // fetch api function may go here
    render(){
        return(
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const Roomconsumer = RoomContext.Consumer;

export {RoomClass, Roomconsumer, RoomContext};