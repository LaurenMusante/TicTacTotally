import React from 'react';
import Square from './Square';
import 'materialize-css/dist/css/materialize.min.css';

function Grid () {
    return (
        <div>
            <div className="row">
            <div className="col s1"><Square /></div>
            <div className="col s1"><Square /></div>
            <div className="col s1"><Square /></div>
            </div>
            <div className="row">
            <div className="col s1"><Square /></div>
            <div className="col s1"><Square /></div>
            <div className="col s1"><Square /></div>
            </div>
            <div className="row">
            <div className="col s1"><Square /></div>
            <div className="col s1"><Square /></div>
            <div className="col s1"><Square /></div>
            </div>
        </div>
    )
}

export default Grid;