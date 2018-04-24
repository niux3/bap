import React, { Component } from 'react';
import Floors from './floors.js';

export default class Building extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data,
            len : this.props.data.length,
            totalBuilding : 0
        }

        this.listTotal = [];
        this.getTotalBuilding = this.getTotalBuilding.bind(this);
    }

    getTotalBuilding(val){
        this.listTotal.push(val);

        this.setState({
            totalBuilding : this.listTotal.slice(-this.state.len).reduce((a,b)=>a + b, 0)
        })
    }

    getFloors(){
        return this.state.data.map((row) =>{
            //
            return (
                <div>
                    <Floors getTotalBuilding={this.getTotalBuilding} data={row} />
                </div>
            )
        });
    }

    render(){
        return (
            <article className={this.props.url !== this.props.id? " hidden" : ""}>
                <p className="mt50">Consommation du building { this.props.id } : {(this.state.totalBuilding / 60).toFixed(2)} l / min.</p>
                {this.getFloors()}
            </article>
        )
    }
}
