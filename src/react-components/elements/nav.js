import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component{
    constructor(props){
        super(props);

        this.state = {
            buildingList : []
        }

    }

    componentWillMount(){
        let url = './mock.json';
        fetch(url).then(response =>{
            return response.json();
        }).then(data =>{
            let links = [];
            for(let k in data){
                let url = "/building/show/" + k;
                let item = <li><NavLink activeClassName='current' to={url} key={k}>building {k}</NavLink></li>
                links.push(item);
            }
            this.setState({
                buildingList : links
            });
        });
    }

    render(){
        return (
            <header>
                <ul className="global">
                    {this.state.buildingList}
                </ul>
            </header>
        )
    }
}
