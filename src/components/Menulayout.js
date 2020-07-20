import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu from './Menu.js';
import logo from './img/logo.png';
import  './css/Menulayout.css';
import arrow from './img/arrow.svg';


class Menulayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openMenu: true };
    }

    closeMenu = () => {
        this.setState({
            openMenu: false
        })
    }

    handleClick() {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('is-nav-close');
        const togglemenu = document.getElementById('togglemenu');
        togglemenu.classList.toggle('is-menu-close');

                this.setState({
                    openMenu: !this.state.openMenu
                })

    }


    render() {
        return (
            <div id="togglemenu" className="mymenulayout">
                <Tab.Container id="left-tabs-example" defaultActiveKey="logo">
                    <Row>
                        <Col sm={3}>

                            <Nav variant="pills" className="flex-column left-menu">
                                <Nav.Item>
                                    <Nav.Link eventKey="logo">
                                        <img src={logo} className="menu-layout-logo" alt="logo"/>

                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="menu-layout-item"> 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="menu-layout-item"> 2</Nav.Link>
                                </Nav.Item>
                            </Nav>


                        </Col>
                        <Col sm={9}>

                            <div id="wrapper"  className="wrapper">
                            {this.state.openMenu ? <Tab.Content>
                                <Tab.Pane eventKey="logo">
                                    <Menu openMenu={this.state.openMenu}/>

                                </Tab.Pane>
                                <Tab.Pane eventKey="first">
                                    <h2 className="white-text">Вкладка 1</h2>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">

                                    <h2 className="white-text">Вкладка 2</h2>
                                </Tab.Pane>
                            </Tab.Content> : <Tab.Content className="close">
                                <Tab.Pane eventKey="logo">
                                    <Menu openMenu={this.state.openMenu}/>

                                </Tab.Pane>
                                <Tab.Pane eventKey="first">
                                    <p className="white-text">1</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p className="white-text">2</p>
                                </Tab.Pane>
                            </Tab.Content>
                            }


                            {this.state.openMenu ? <div className="menu-collaps-button" type="menu-fold"
                                                        onClick={() => this.handleClick()}   >
                                <img src={arrow} className="menu-layout-arrow" alt="back"/>
                                Свернуть
                            </div> : <div className="menu-collaps-button"  onClick={() => this.handleClick()} >
                                <img src={arrow} className="menu-layout-arrow-open" alt="back"/>

                            </div> }

                            </div>

                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Menulayout;

