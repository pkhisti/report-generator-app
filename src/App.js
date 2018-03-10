import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReportFields from './components/ReportFields';
import FixedColumns from './components/FixedColumns';
import RestColumns from './components/RestColumns';
import * as DataApi from './services/DataApi';
import mockjson from './services/MockData';

class App extends Component {
   constructor(props){
    super(props);

    let rowState=[];
    let keys = Object.keys(mockjson.template);
    for(let i = 0; i < keys.length; i++) {
        rowState[i] = {
                  label: keys[i],
                  checked: false
                }
    }
    this.state = {
      reportData:  mockjson.result,
      template: mockjson.template,
      checkAll: false,
      rowState: rowState,
      selectedColumns: []
    }
  }

  toggleSelectAllCheckbox = () => {
    let rowState = this.state.rowState;
    let checkState = !this.state.checkAll;
    for(let i = 0; i < this.state.rowState.length; i++) {
      rowState[i].checked = checkState;
    }
    this.setState({
      rowState: rowState,
      checkAll: checkState
    });
  }

  toggleCheckbox = (label,checked) => {
   let selectedIndex = this.state.rowState.findIndex((item )  => item.label == label);
   let rowState = this.state.rowState;
   rowState[selectedIndex].checked = checked;
   this.setState({rowState:rowState});
   let selectedItems = [];
   let selectedKeys = this.state.rowState.filter(item=>item.checked===true);
   selectedKeys.forEach((key,index)=>{
     let data = {key : key.label};
     let values = [];
       this.state.reportData.forEach(dataItem=>{
         values.push(dataItem[key.label]);
       });
       data.values = values;
     selectedItems.push(data);
   });
   this.setState({selectedColumns:selectedItems});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Fancy Report Generator</h2>
        </header>
        <ReportFields row={this.state.rowState}  toggleSelectAllCheckbox={this.toggleSelectAllCheckbox} toggleCheckbox={this.toggleCheckbox}></ReportFields>
        <div className="wrapper">
          <div className="fix-column">
            <FixedColumns data={this.state.selectedColumns.length>0?this.state.selectedColumns.filter((item,index)=>index==0)[0]:[]}>
            </FixedColumns>
          </div>
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