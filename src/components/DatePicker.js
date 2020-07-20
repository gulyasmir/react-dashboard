import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import  "./css/MyDataPicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class MyDataPicker extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <DatePicker
                className="MyDataPicker"
                placeholder="Выберите дату"
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}

export default MyDataPicker;