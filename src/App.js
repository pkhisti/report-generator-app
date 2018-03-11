import React, { Component } from 'react';
import './App.css';
import ReportFields from './components/ReportFields';
import FixedColumns from './components/FixedColumns';
import RestColumns from './components/RestColumns';
import mockjson from './services/MockData';
import Header from './components/Header';

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
      reportData:  mockjson.result,
      template: mockjson.template,
      checkAll: false,
      rowState: [],
      selectedColumns: []
    }
  }

  componentDidMount() {
    let rowState=[],
    keys = Object.keys(mockjson.template);
    //this data can come from an api here
    for(let i = 0; i < keys.length; i++) {
        rowState[i] = {
                  label: keys[i],
                  checked: false
                }
     }
     this.setState({
      rowState: rowState
     })
  }

  toggleSelectAllCheckbox = () => {
    let rowState = this.state.rowState, checkState = !this.state.checkAll;
    for(let i = 0; i < this.state.rowState.length; i++) {
      rowState[i].checked = checkState;
    }
    this.setState({
      rowState: rowState,
      checkAll: checkState
    });
    this.filterData();
  }

  filterData() {
    let selectedItems = [],
    selectedKeys = this.state.rowState.filter(item=>item.checked===true);
    selectedKeys.forEach((key,index)=>{
      let data = {key : key.label}, values = [];
      this.state.reportData.forEach(dataItem=>{
          values.push(dataItem[key.label]);
        });
      data.values = values;
      selectedItems.push(data);
   });
   this.setState({selectedColumns:selectedItems});
  }

  toggleCheckbox = (label,checked) => {
   let selectedIndex = this.state.rowState.findIndex((item )  => item.label === label), rowState = this.state.rowState;
   rowState[selectedIndex].checked = checked;
   this.setState({rowState:rowState});
   this.filterData();
  }

  renderZeroState() {
    if(this.state.selectedColumns.length===0){
      return(
        <div className="zero-state">
          <img src="zero.png" alt="zero state placeholder"/>
          <h4> Welcome to fancy report! <br/>Please select any report columns in the left to view some test data</h4>
        </div>
      );
    } else {
       return(
         <div></div>
       )
    }
  }
  renderFixed() {
    const fixedColumns = this.state.selectedColumns.length>0?this.state.selectedColumns.filter((item,index)=>index===0)[0]:[];
      if(this.state.selectedColumns.length>0) {
        return (<div className="fix-column">
            <FixedColumns data={fixedColumns}>
            </FixedColumns>
        </div>);
      } else {
        return(
          <div></div>
        );
      }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <ReportFields row={this.state.rowState}  toggleSelectAllCheckbox={this.toggleSelectAllCheckbox} toggleCheckbox={this.toggleCheckbox}></ReportFields>
        <div className="wrapper">
          {this.renderZeroState()}
          {this.renderFixed()}
          <div className="table-body">
           <div className="rest-columns">
              <RestColumns data={this.state.selectedColumns.length>1?this.state.selectedColumns.filter((item,index)=>index>0):[]}>
             </RestColumns>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;