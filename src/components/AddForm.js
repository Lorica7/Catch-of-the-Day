import React from "react";

class FishForm extends React.Component {
   
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) => {
        e.preventDefault();
        console.log(this.nameRef.current.value)
        const fish = {
        name: this.nameRef.current.value,
        price: parseFloat(this.priceRef.current.value),
        status: this.statusRef.current.value,
        desc: this.descRef.current.value,
        image: this.imageRef.current.value
        }
        
        this.props.addFish(fish);
        console.log(fish)
    }
   
    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name"/>
                <input name="price" ref={this.priceRef}type="text" placeholder="price" />
                <select name="status" ref={this.statusRef} type="text"  >
                    <option value="available">Fresh!</option> 
                    <option value="unavailalbe">Sold Out!</option> 
                </select>
                <textarea name="desc" type="text" ref={this.descRef}placeholder="Desc" />
                <input name="image" type="text" ref={this.imageRef}placeholder="Image" />
                <button type="submit"> + Add Fish</button>
           </form>
        ) 
    }
      
}


export default FishForm;