import React, { useState, useEffect } from "react";
import TableData from "./TableData";
export default function Table({ data,button,getComponent }) {
  return (
      
    <div className="table">
      <table>
        <tr>
          <th>Name</th>
          <th>Bonds %</th>
          <th>Large Cap %</th>
          <th>Mid Cap %</th>
          <th>Foreign %</th>
          <th>Small Cap %</th>
        </tr>
      
      {data.map((item) => (
            
          <TableData item={item} button={button}/>  
        
      ))}
      </table>

      <button className="chartButton" onClick={getComponent}>Chart</button>
    </div>
  );
}