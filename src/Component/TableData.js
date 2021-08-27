import React, { useState, useEffect } from "react";

export default function TableData({ item ,button}) {
    return (
        <>
        {item.risk == button? <tr key={item.risk} style={{'backgroundColor': 'yellow'}}>
          <td>{item.risk}</td>
          <td>{item.bonds}</td>
          <td>{item.largecap}</td>
          <td>{item.midcap}</td>
          <td>{item.foreign}</td>
          <td>{item.smallcap}</td>
        </tr>:<tr key={item.risk}>
          <td>{item.risk}</td>
          <td>{item.bonds}</td>
          <td>{item.largecap}</td>
          <td>{item.midcap}</td>
          <td>{item.foreign}</td>
          <td>{item.smallcap}</td>
        </tr>}
        </>
        
    )
}