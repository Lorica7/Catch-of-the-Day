import React, { Fragment } from "react";



class StorePicker extends React.Component{
    render() {
        return (
            <Fragment>
{/* React.Fragment allows the reurn of sibling elements. They don't need to be wrapped in a parent div */}
            <p> Fish! </p>
            <form className="store-selector">
                    <h2>Please Enter a Store</h2>
                    <button>Visit Store ➜ </button>
                </form>
                </Fragment>
    )
}

}

export default StorePicker

{/* Need to be careful where place comments after return statement. can cause errors */ }