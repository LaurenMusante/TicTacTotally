import React from 'react';
import Square from './Square';
import 'materialize-css/dist/css/materialize.min.css';

function Grid () {
    return (
        <div>
            <div className="row">
            <div className="col s1"><Square id='1'/></div>
            <div className="col s1"><Square id='2'/></div>
            <div className="col s1"><Square id='3'/></div>
            </div>
            <div className="row">
            <div className="col s1"><Square id='4'/></div>
            <div className="col s1"><Square id='5'/></div>
            <div className="col s1"><Square id='6'/></div>
            </div>
            <div className="row">
            <div className="col s1"><Square id='7'/></div>
            <div className="col s1"><Square id='8'/></div>
            <div className="col s1"><Square id='9'/></div>
            </div>
        </div>
    )
}

export default Grid;