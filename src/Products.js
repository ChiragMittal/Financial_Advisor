import React from "react";
import { connect } from "react-redux";
import { addPro } from "./actions/SimpleActions";
import data from "./ApiData";

import Table from './Component/Table';
import Chart from './Component/Chart';
import { Link } from "react-router-dom";
class NewComponent extends React.Component {
  constructor(props){
	
    super(props);
     
    this.state = {
      getButton:0,
      setComponent:'Table',
    }
      
  }

  getData(val) {
    this.props.addPro(data.data.filter(item=> item.risk == val));
    this.setState({ getButton: val });
  }

  getComponent(){
    if(this.state.setComponent === 'Table'){
      this.setState({setComponent:'Chart'})
    }
    else{
      this.setState({setComponent:'Table'})
    }
    
  }

  render() {
    return (
      <div className='app'>
			
				{data.data.map((item) => (
					<button key={item.risk} onClick={() => this.getData(item.risk)}>{item.risk}</button>
				) )
			}
      {this.props.button?<Link to="/button"><button>Continue</button></Link>:null}
			{this.state.setComponent === 'Table' && <Table data={data.data} button={this.state.getButton} getComponent={this.getComponent.bind(this)}/> }
			{this.state.setComponent === 'Chart' && <Chart data={data.data.filter(item=> item.risk == this.props.button.risk)} getComponent={this.getComponent.bind(this)} />}
		</div>
    );
  }
}

const mapStatetoProps = (state) => {
  const button = state.productsReducer.button[0];
  return {
    button
  };
};

const mapDispatchToProps = {
  addPro
};

export default connect(mapStatetoProps, mapDispatchToProps)(NewComponent);
