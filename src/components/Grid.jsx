import React from 'react';
import Square from './Square';
import 'materialize-css/dist/css/materialize.min.css';

function Grid () {
    const rowCSS = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div className="">
            <div style={rowCSS} className="row">
            <div className=""><Square id='1'/></div>
            <div className=""><Square id='2'/></div>
            <div className=""><Square id='3'/></div>
            </div>
            <div style={rowCSS} className="row">
            <div className=""><Square id='4'/></div>
            <div className=""><Square id='5'/></div>
            <div className=""><Square id='6'/></div>
            </div>
            <div style={rowCSS} className="row">
            <div className=""><Square id='7'/></div>
            <div className=""><Square id='8'/></div>
            <div className=""><Square id='9'/></div>
            </div>
        </div>
    )
}

export default Grid;