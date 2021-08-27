import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {
	
	render() {
		console.log(this.props.data[0])
		const options = {
			animationEnabled: true,
			title: {
				text: "Investment Portfolio"
			},
			
			data: [{
				type: "doughnut",
				showInLegend: true,
				yValueFormatString: "##,###'%'",
				dataPoints: [
					{ name: "bonds", y: `${this.props.data[0].bonds}` },
					{ name: "largecap", y: `${this.props.data[0].largecap}` },
					{ name: "midcap", y: `${this.props.data[0].midcap}` },
					{ name: "foreign", y: `${this.props.data[0].foreign}` },
					{ name: "smallcap", y: `${this.props.data[0].smallcap}` }
				]
			}]
		}
		
		return (
			
		<div>

			<CanvasJSChart options = {options} />
			<button onClick={this.props.getComponent}>Table</button>
		</div>
		);
	}
}

export default Chart;