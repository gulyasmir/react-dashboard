import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './css/Menu.css';
import Col from "react-bootstrap/Col";



class Menu extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
           <div className="Menu">
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home"><span className="open">Общая аналитика</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1"><span className="open">Рефтинский филиал</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"><span className="open">Конаковский филиал</span></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

        );
    }
}

export default Menu;
