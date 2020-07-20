import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/Block.css';

import green from './img/green-arrow.svg';
import red from './img/red-arrow.svg';

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:props.name, spantext:props.spantext, num:props.num, oldnum:876};
    }


    componentDidMount() {
        this.setState(state => ({
            percent:Math.floor(((state.oldnum- this.props.num)*100)/state.oldnum) ,
            num:this.props.num
        }));
    }


    componentWillUpdate(nextProps, nextState) {

      var newpercent = Math.floor(((this.state.num- nextProps.num)*100)/this.state.num);
        console.log('newpercent '+newpercent);
        console.log('newpercent '+newpercent);
        console.log('this.state.num '+this.state.num);
        console.log('nextProps.num '+nextProps.num);
        console.log('====================');
        console.log();
            if (this.state.percent != newpercent) {
                this.setState(state => ({
                    percent: Math.floor(((this.state.num - nextProps.num) * 100) / this.state.num),
                  //  num: nextProps.num
                }));
            }
    }

    componentDidUpdate(prevProps, prevState) {
       console.log('prevProps.num ' + prevProps.num)


    }

    render() {

        return (
            <div className="oneblock">
                <p className="name">{this.state.name} </p>
            <p className="num"> {this.props.num}<span className="grey-text"> {this.state.spantext}</span></p>

                    { this.state.percent >0 ? <p className="percent"><img src={green} alt="green"/>
                        <span className="green-text"> {this.state.percent} % </span>
                        </p> : <p className="percent">
                        <img src={red} alt="red"/>
                        <span className="red-text"> {this.state.percent} % </span>
                        </p>
                    }

            </div>
        );
    }
}
export default Block;
