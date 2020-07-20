import React from "react";

import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";


class Buttonrandom extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Button variant="outline-primary" onClick={() => { this.props.updateData()}} >Изменить данные</Button>

            </div>
        )
    }
}

export default Buttonrandom;