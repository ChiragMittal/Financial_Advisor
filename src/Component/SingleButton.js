import React, { useState, useEffect } from "react";

export default function SingleButton({ item ,button,getData}) {
    return (
        <div className="buttonss">
        {item.risk == button? 
        <button className="single_button" key={item.risk} style={{'backgroundColor': 'yellow'}} onClick={() => getData(item.risk)}>
         {item.risk}
        </button>:
        <button className="single_button" key={item.risk} onClick={() => getData(item.risk)}>{item.risk}</button>
        }
        </div>
        
    )
}