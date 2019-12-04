import React from 'react';

class Square extends React.Component {
    constructor(props){
        super(props)
        this.handleClickingEmptySquare= this.handleClickingEmptySquare.bind(this);
    }
    
    handleClickingEmptySquare(){
        console.log(this.props.id);
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

export default Square;