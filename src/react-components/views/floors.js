import React, { Component } from 'react';
import Housings from './housings.js';

export default class Floors extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data,
            len : this.props.data.length,
            total : 0
        }
        this.listTotal = [];
        this.getTotalFloor = this.getTotalFloor.bind(this);
    }

    getTotalFloor(val){
        this.listTotal.push(val);
        this.setState({
            total : this.listTotal.slice(-this.state.len).reduce((a,b)=>a + b, 0)
        });
        this.props.getTotalBuilding(this.state.total);
    }

    getHousings(){
        // getTotalBuilding={this.props.getTotalBuilding}
        return this.state.data.map((housing)=>{
            return (
                <Housings getTotalFloor={this.getTotalFloor} data={housing} />
            )
        })
    }

    render(){
        return (
            <div className="bdb pb25">
                <p className="mt25">consommation de l'étage : {(this.state.total / 60).toFixed(2)} l / min.</p>
                <div className="grid-2 has-gutter">{this.getHousings()}</div>
            </div>
        );
    }
}
