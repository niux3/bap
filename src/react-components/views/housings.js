import React, { Component } from 'react';

export default class Building extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data,
            flow : {
                shower  : 0,
                sink    : 0,
                bath    : 0,
                jacuzzi : 0,
                total   : 0
            }
        }
    }

    componentWillMount(){
        return setInterval(()=>{
            this.setState({
                flow : {
                    shower  : this.state.flow.shower + 1,
                    sink    : this.state.flow.sink + 2,
                    bath    : this.state.flow.bath + 5,
                    jacuzzi : this.state.flow.jacuzzi + 10,
                }
            });
            this.props.getTotalFloor(this.state.flow.total);
            //this.props.getTotalBuilding(this.state.flow.total);
        }, 1000);
    }

    getHousings(){
        let total = 0;
        let sanitary = this.state.data.map((name)=>{
            let sanitary = null;
            let output = null;
            switch(name){
                case 'Shower':
                    output = this.state.flow.shower;
                    total += output;
                    return <li><span className="bold">Douche</span><span>{(output / 60).toFixed(2)} l / min.</span></li>;
                case 'Sink':
                    output = this.state.flow.sink;
                    total += output;
                    return <li><span className="bold">Évier</span><span>{(output / 60).toFixed(2)} l / min.</span></li>;
                case 'Bath':
                    output = this.state.flow.bath;
                    total += output;
                    return <li><span className="bold">Baignoire</span><span>{(output / 60).toFixed(2)} l / min.</span></li>;
                case 'Jacuzzi':
                    output = this.state.flow.jacuzzi;
                    total += output;
                    return <li><span className="bold">Jacuzzi</span><span>{(output / 60).toFixed(2)} l / min.</span></li>;
                default:
                    break;
            }
            return sanitary;
        });

        this.state.flow.total = total; // setstate method doesn't work !
        //

        return (
            <div>
                <p>consommation de l'appartement : {(this.state.flow.total / 60).toFixed(2)} l / min.</p>
                <ul className="grid-2 has-gutter">
                    {sanitary}
                </ul>
            </div>
        );
    }
    render(){
        //
        //console.log('render >>>> ', this.state.flow);
        return (
            <div>
                {this.getHousings()}
            </div>
        )
    }
}
