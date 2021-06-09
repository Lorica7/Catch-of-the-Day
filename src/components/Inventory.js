import React from "react";
import FishForm from "./AddForm";


class Inventory extends React.Component{
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <FishForm addFish={this.props.addFish}/>
       </div>
        )
    }
}

export default Inventory