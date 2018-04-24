import React, { Component } from 'react';
import Building from './building.js';

export default class Buildings extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : null
        }
    }

    componentWillMount(){
        fetch('./mock.json').then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({
                data : data
            });
        });
    }

    getComponents(url){
        let components = [];
        for(let key in this.state.data){
            components.push(
                <Building id={key} url={url} data={this.state.data[key]} />
            )
        }
        return components;
    }

    render(){
        let components = this.getComponents(this.props.match.params.id);
        return (
            <div className="buildingFlow">
                {components}
            </div>
        )
    }
}
