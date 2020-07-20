import React from "react";
import Block from "./Block";

class Buttonrandom extends React.Component {
    state = {
        goRender: false
    }


    render() {
        return (
            <div>
                <button
                    className="random-button"
                    onClick={Block.updateData}>
                    Изменить данные
                </button>
            </div>
        )
    }
}

export default Buttonrandom;