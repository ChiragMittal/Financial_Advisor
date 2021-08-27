import React from "react";
import { connect } from "react-redux";
import { addPro } from "./actions/SimpleActions";
import data from "./ApiData";
import SingleButton from "./Component/SingleButton";
import Table from './Component/Table';
import Chartt from './Component/Chart';
import { Link } from "react-router-dom";
class NewComponent extends React.Component {
  constructor(props){
	
    super(props);
     
    this.state = {
      getButton:0,
      setComponent:'Table',
    }
      
  }

  componentDidMount(){
    if(this.props.button){
      this.setState({getButton:this.props.button.risk})
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
        <h1 className="heading">Financial Advisor</h1>
        <div class="risk-selector-header-labels"><div class="risk-label-select">Please Select A Risk Level For Your Investment Portfolio</div><div class="risk-label-levels"><div class="risk-label">Low</div><div class="risk-label">High</div></div></div>
        <div className="button_set">
        {data.data.map((item) => (
					// <button key={item.risk} onClick={() => this.getData(item.risk)}>{item.risk}</button>
          <SingleButton item={item} button = {this.state.getButton} getData = {this.getData.bind(this)}/>
				) )}
        {this.props.button?<Link to="/button"><button className="continue">Continue</button></Link>:null}
        </div>
				
			
      
			{this.state.setComponent === 'Table' && <Table className="table" data={data.data} button={this.state.getButton} getComponent={this.getComponent.bind(this)}/> }

      {this.state.getButton ? 
      <div>
      {this.state.setComponent === 'Chart' && <Chartt className="chartt" data={data.data.filter(item=> item.risk == this.props.button.risk)} getComponent={this.getComponent.bind(this)} />}
      </div>
      :null}
		
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
