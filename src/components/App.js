import React from "react";
import Header from './Header.js';
import Inventory from './Inventory.js'
import Order  from './Order.js'

class App extends React.Component {

    state = {
        fishes: {},
        order: {}

    }
    addFish = fish => {
        console.log(fish)
    };
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
                
            </div>
        )
    }

}
export default App;