import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/Page.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import Block from "./Block";
import Chartblock from "./Chartblock";
import MyDataPicker from "./DatePicker";
import Buttonrandom from "./Buttonrandom";
import Preloader from "./Preloader";



class Page extends React.Component {
    constructor(props) {
        super(props);
       this.state = { num1:188,  num2:234,  num3:324, preloader:false };
    }

    updateData = () => {
        this.setState({
            num1: Math.floor(Math.random()*1000),
            num2: Math.floor(Math.random()*1000),
            num3: Math.floor(Math.random()*1000),
        })
    }

    goModal= () => {
       
        this.setState({
            preloader:true
        })
        console.log('preloader '+ this.state.preloader);

        this.timeout = setTimeout(() => this.setState({ preloader:false }), 5000);

    }

    render() {
        return (
        <div className="Page">
            <Row>
                <Col sm={3}>
                    <h1>Общая аналитика</h1>
                </Col>
                < Col sm={3}>
                    <MyDataPicker/>
                </Col>
                < Col sm={2}>
                    <Button className="blue-button" variant="primary"  onClick={this.goModal} >Применить</Button>
                </Col>
                <Col sm={3}>
                    <Buttonrandom updateData={this.updateData} />

                </Col>
            </Row>

            <Row>
                <Col sm={6}>

                    <div className="blocks">
                        <Block name={'Заказы'} num={this.state.num1} />
                        <Block name={'Выручка'} num={this.state.num2} spantext={'руб.'} />
                        <Block name={'Выработка'} num={this.state.num3} spantext={'чел./час'} />
                    </div>

                    <Row>
                        <Col sm={6}>
                            <div className="white-block"></div>
                        </Col>
                        <Col sm={6}>
                            <div className="white-block"></div>
                        </Col>
                    </Row>

                </Col>

                <Col sm={6}>
                    <div className="Mychart">
                        <p className="chart-title">Эффективность сотрудников</p>
                        <p className="chart-text">Прогресс по выработкам с общими показателями</p>

                        <Chartblock/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={8}>
                    <div className="white-block white-block-1"></div>
                    <div className="white-block white-block-1"></div>
                </Col>
                <Col sm={4}>
                    <div className="white-block white-block-2"></div>
                </Col>
            </Row>

    
    
     <Preloader viewpreloader = {this.state.preloader} /> :''
        </div>


        );
        
    }
}

export default Page;
