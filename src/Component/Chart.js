import React, { Component } from 'react';
import {Doughnut } from 'react-chartjs-2'

 
class Chartt extends Component {

	
	render() {		
		return (
			
		<div className="doughnut">
			<Doughnut  width={400} height={400} data = {{labels: [
					'bonds',
					'largecap',
					'midcap',
					'foreign',
					'smallcap'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [`${this.props.data[0].bonds}`,`${this.props.data[0].largecap}`,`${this.props.data[0].midcap}`,`${this.props.data[0].foreign}`,`${this.props.data[0].smallcap}`],
					backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
					'rgba(153, 102, 255, 1)',
                	'rgba(255, 159, 64, 1)'
					],
					hoverOffset: 4
				}] 
				}}/>
			{/* <CanvasJSChart options = {options} /> */}
			{/* <Doughnut options={config} /> */}
			
			<button className="tableButton" onClick={this.props.getComponent}>Table</button>
		</div>
		);
	}
}

export default Chartt;