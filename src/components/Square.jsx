import React from 'react';
import { connect } from 'react-redux'

class Square extends React.Component {
    constructor(props){
        super(props)
        this.handleClickingEmptySquare= this.handleClickingEmptySquare.bind(this);
    }
    
    handleClickingEmptySquare(){
        const { dispatch } = this.props;
        if(this.props.activePlayer=='1'){
            const action = { type: 'VAL_O', id: this.props.id }
            dispatch(action);
            const action2 = { type:'END_TURN_PLAYER_ONE'}
            dispatch(action2);
        }
        else{
            const action = { type: 'VAL_X', id: this.props.id }
            dispatch(action);
            const action2 = { type:'END_TURN_PLAYER_TWO'}
            dispatch(action2);
            
        }
    }
    
        
    
    render() {

        var conditionalRender;
        if(0==1){
           conditionalRender=  'X';
        }
        else if(0==2){
            
             conditionalRender= 'O'            }
        else{     
                conditionalRender =<button onClick={this.handleClickingEmptySquare} className="">HI</button>;
        }
        
        return (
            <div className="btn">
            {conditionalRender}
            </div>
    );
    }
};

export default connect()(Square);