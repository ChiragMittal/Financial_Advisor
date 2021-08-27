import React, { useState, useEffect } from "react";
export default function RiskCalculator({ getValue,newAmount,difference,transfers}) {
    const [bonds, setBonds] = useState();
    const [large, setLarge] = useState();
    const [mid, setMid] = useState();
    const [foreign, setForeign] = useState();
    const [small, setSmall] = useState();

    const parentCallback=()=>{
        
        var sum  = parseInt(bonds)+parseInt(large)+parseInt(mid)+parseInt(foreign)+parseInt(small)
        var obj = {
            'bonds':parseInt(bonds),
            'large':parseInt(large),
            'mid':parseInt(mid),
            'foreign':parseInt(foreign),
            'small':parseInt(small)
        }
        getValue(sum,obj)
    }

  return (

    <div>
        <h3>Please Enter Your Current Portfolio</h3>
        <button onClick={parentCallback}>Evaluate</button>
    
      
    <div className="risk-calculator-input-container">
        <div className="risk-calculator-input-labels">
            <label>Current Amount</label>
            <label>Difference</label>
            <label>New Amount</label>
            <label>Recommended Transfers</label>
        </div>
        <div className="risk-calculator-main">
            <div className="risk-calculator-main-row">
            <label>Bonds $:</label>
            <div className="risk-calculator-main-row-box">
                <input type="text" name="bonds" className="risk-calculator-main-input" onChange={e => setBonds(e.target.value)}/>
                {Object.keys(difference).length ?<input type="text" value={difference.bonds.val} style={{'color':difference.bonds.color}}className="risk-calculator-main-difference" disabled />:<input type="text" className="risk-calculator-main-difference" disabled />}
                {Object.keys(newAmount).length?<input type="text" value={newAmount.bonds} className="risk-calculator-main-new" disabled />:<input type="text" className="risk-calculator-main-new" disabled />}
            </div>
            </div>
            <div className="risk-calculator-main-row">
            <label>Large Cap $:</label>
            <div className="risk-calculator-main-row-box">
                <input type="text" className="risk-calculator-main-input" onChange={e => setLarge(e.target.value)}/>
                {Object.keys(difference).length ?<input type="text" value={difference.large.val} style={{'color':difference.large.color}}className="risk-calculator-main-difference" disabled />:<input type="text" className="risk-calculator-main-difference" disabled />}
                {Object.keys(newAmount).length?<input type="text" value={newAmount.large} className="risk-calculator-main-new" disabled />:<input type="text" className="risk-calculator-main-new" disabled />}
            </div>
            </div>
        <div className="risk-calculator-main-row">
        <label>Mid Cap $:</label>
        <div className="risk-calculator-main-row-box">
            <input type="text" className="risk-calculator-main-input" onChange={e => setMid(e.target.value)}/>
            {Object.keys(difference).length ?<input type="text" value={difference.mid.val} style={{'color':difference.mid.color}}className="risk-calculator-main-difference" disabled />:<input type="text" className="risk-calculator-main-difference" disabled />}
            {Object.keys(newAmount).length?<input type="text" value={newAmount.mid} className="risk-calculator-main-new" disabled />:<input type="text" className="risk-calculator-main-new" disabled />}
            </div>
        </div>
        <div className="risk-calculator-main-row">
        <label>Foreign $:</label>
        <div className="risk-calculator-main-row-box">
            <input type="text" className="risk-calculator-main-input" onChange={e => setForeign(e.target.value)}/>
            {Object.keys(difference).length ?<input type="text" value={difference.foreign.val} style={{'color':difference.foreign.color}}className="risk-calculator-main-difference" disabled />:<input type="text" className="risk-calculator-main-difference" disabled />}
            {Object.keys(newAmount).length?<input type="text" value={newAmount.foreign} className="risk-calculator-main-new" disabled />:<input type="text" className="risk-calculator-main-new" disabled />}
            </div>
        </div>
        <div className="risk-calculator-main-row">
        <label>Small Cap $:</label>
        <div className="risk-calculator-main-row-box">
            <input type="text" className="risk-calculator-main-input" onChange={e => setSmall(e.target.value)}/>
            {Object.keys(difference).length ?<input type="text" value={difference.small.val} style={{'color':difference.small.color}}className="risk-calculator-main-difference" disabled />:<input type="text" className="risk-calculator-main-difference" disabled />}
            {Object.keys(newAmount).length?<input type="text" value={newAmount.small} className="risk-calculator-main-new" disabled />:<input type="text" className="risk-calculator-main-new" disabled />}
            </div>
        </div>
        <div className="risk-calculator-transfers">
            {
                transfers.length? <div>
                           {transfers.map(item=><p>{item}</p>) }
                    </div>
                    :null
            }
        </div>
        </div>
    </div>
    </div>
  );
}