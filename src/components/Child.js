

import React from "react";




const Child = ({inputValue,handle}) =>{



    return(

        <div className="child">
            <h1>Child Component</h1>
            <input type="text" onChange={handle} />


        </div>
    )
}

export default Child;