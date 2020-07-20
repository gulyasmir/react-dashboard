import React from "react";
import "./css/Preloader.css";
import Spinner from 'react-bootstrap/Spinner'

class Preloader extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
<div>

                  {this.props.viewpreloader ?  <div className="mypreloader" > <div className="myloader" ><Spinner   animation="border" variant="primary" /> </div> </div>:''}
</div>


  )
    }
}

export default Preloader;