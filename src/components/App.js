import React from "react";
import Header from './Header.js';
import Inventory from './Inventory.js'
import Order from './Order.js';
import sampleFishes from "../sample-fishes.js";
import FishItem from "./FishItem";
import base from "../base"

class App extends React.Component {

    state = {
        fishes: {},
        order: {}

    }

    componentDidMount() {

        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) }
            )
            this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
                context: this,
                state: "fishes"
            })
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }


    addFish = fish => {
        //take a copy of exitsing state. Do not modify object directly (mutation)
        const fishes = { ...this.state.fishes };
        //deep clones not needed
        //add new fishes to fishes var
        fishes[`fish${Date.now()}`] = fish;

        // set the new fishes object ro state
        this.setState({
            fishes: fishes
        })
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
        console.log(this.state);
    };

    addToOrder = (key) => {
        //copy state
        const orderNum = { ...this.state.order }
        //update number in order
        orderNum[key] = orderNum[key] + 1 || 1;

        this.setState({order: orderNum})

    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <FishItem key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder} />)}
                    </ul>
                   
                </div>
                <Order  {...this.state}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
                
            </div>
        )
    }

}
export default App;