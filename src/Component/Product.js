import React from "react";
import { connect } from "react-redux";
import RiskCalculator from "./RiskCalculator";
import { Link } from "react-router-dom";
class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newAmount:{},
      difference:{},
      transfers:[]
    };
  }

   roundOff = (num, places) => {
    const x = Math.pow(10,places);
    return Math.round(num * x) / x;
  }

  getValue(sum,all_value){
    
    let obj = {
      'bonds': this.roundOff(((sum*this.props.button.bonds)/100),2),
      'large':this.roundOff(((sum*this.props.button.largecap)/100),2),
      'mid':this.roundOff(((sum*this.props.button.midcap)/100),2),
      'foreign':this.roundOff(((sum*this.props.button.foreign)/100),2),
      'small': this.roundOff(((sum*this.props.button.smallcap)/100),2),
    }

    console.log(obj)

    let obj2 = {
      'bonds': {
        'val':this.roundOff(obj['bonds']-all_value['bonds'],2),
        'color': obj['bonds']-all_value['bonds'] > 0 ? 'green':'red'
      },   
      'large': {
        'val':this.roundOff(obj['large']-all_value['large'],2),
        'color': obj['large']-all_value['large'] > 0 ? 'green':'red'
      },
      'mid': {
        'val':this.roundOff(obj['mid']-all_value['mid'],2),
        'color':obj['mid']-all_value['mid'] > 0 ? 'green':'red'
      },
      'foreign': {
        'val':this.roundOff(obj['foreign']-all_value['foreign'],2),
        'color':obj['foreign']-all_value['foreign'] > 0 ? 'green':'red'
      },
      'small': {
        'val':this.roundOff(obj['small']-all_value['small'],2),
        'color':obj['small']-all_value['small'] > 0 ? 'green':'red'
      }
    }

    let array = [
      {
        "name":"bonds",
        "money":obj2.bonds.val
      },
      {
        "name":"large",
        "money":obj2.large.val
      },
      {
        "name":"mid",
        "money":obj2.mid.val
      },
      {
        "name":"foreign",
        "money":obj2.foreign.val
      },
      {
        "name":"small",
        "money":obj2.small.val
      }
    ]

    var hello = array.sort((a, b) => a.money > b.money ? 1 : -1)
    console.log(hello)
    var arr = []
    var low = 0
    var high = 4
    var cal = 0

    while (low < high) {
      if (Math.abs(hello[high].money) > Math.abs(hello[low].money)) {
        cal = this.roundOff(hello[high].money + hello[low].money,2)
        hello[high].money = cal
    
        arr.push(`tranfer ${Math.abs(hello[low].money)} from ${hello[low].name} to ${hello[high].name}`)
        hello[low].money = 0
        low++
      }
      else if (Math.abs(hello[high].money) < Math.abs(hello[low].money)) {
        cal = this.roundOff(hello[high].money + hello[low].money,2)
        hello[low].money = cal
    
        arr.push(`tranfer ${hello[high].money} from ${hello[low].name} to ${hello[high].name}`)
        hello[high].money = 0
        high--
    
      }
    
      else if (Math.abs(hello[high].money) == Math.abs(hello[low].money)) {
        cal = this.roundOff(hello[high].money + hello[low].money,2)
        arr.push(`tranfer ${Math.abs(hello[high].money)} from ${hello[low].name} to ${hello[high].name}`)
        hello[low].money = cal
        hello[high].money = cal
        low++
        high--
      }
    
    }

    this.setState({transfers:arr})
    this.setState({newAmount:obj})
    this.setState({difference:obj2})

  }

  render() {
    return (
      
      <div>
        <Link to="/"><button>Home</button></Link>
        { this.props.button ?

        <div>
        <h1>Personalized Portfolio</h1>
        <h3> Risk Level {this.props.button.risk} </h3>
        <table>
          <tr>
          <th>Bonds </th>
          <th>Large Cap </th>
          <th>Mid Cap </th>
          <th>Foreign </th>
          <th>Small Cap </th>
          </tr>
          <tr>
          <td>{this.props.button.bonds}</td>
          <td>{this.props.button.largecap}</td>
          <td>{this.props.button.midcap}</td>
          <td>{this.props.button.foreign}</td>
          <td>{this.props.button.smallcap}</td>
          </tr>
        </table>
        
        <RiskCalculator getValue={this.getValue.bind(this)} newAmount={this.state.newAmount} difference={this.state.difference} transfers={this.state.transfers}/>
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

export default connect(mapStatetoProps, undefined)(app);
