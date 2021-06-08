import React from "react";
import {getFunName} from "../helpers"


class StorePicker extends React.Component{
    
    myInput = React.createRef();
   
    goToStore = (e) => {
        e.preventDefault();
        const storeN = (this.myInput.current.value);
        console.log(storeN)
        this.props.history.push(`/store/${storeN}`)
    }
    render() {
        return (
       
           
            <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter a Store</h2>
                    <input
                        type="text" 
                        required placeholder="Store Name"
                        defaultValue={getFunName()}
                        ref={this.myInput}
                        />
                    <button>Visit Store ➜ </button>
                </form>
              
    )
}

}

export default StorePicker
