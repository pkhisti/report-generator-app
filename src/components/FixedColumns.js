import React, { Component } from 'react';
import * as Util from "../util/util";
class FixedColumns extends Component {
    constructor(props) {
        super(props);
        this.copyContent = this.copyContent.bind(this);
        this.copyClipboard = this.copyClipboard.bind(this);
    }
    copyContent() {
         document.execCommand("copy");
    }
    copyClipboard(event,data) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", data);
            console.log(event.clipboardData.getData("text"))
        }
    }
    render() {
        let values;
        values = Object.keys(this.props.data).length === 0?[]:this.props.data.values;
        const rows =  values.map((value,i)=>{
            let displayValue = Util.displayDate(value);
            return (<div className="col-data-link" key={i}>
                 <a rel="noopener noreferrer" href="https://www.threatmetrix.com/" target="_blank">{displayValue}</a>
                 <span onClick={this.copyContent} onCopy={(e) => this.copyClipboard(e, displayValue)} className="glyphicon glyphicon-copy" aria-hidden="true"></span>
                </div>);
        });
        if(this.props.data.length===0) {
            return (<div></div>);
        } else {
            return (
                    <div className="table-col">
                        <div className="col-header">
                            {this.props.data.key}
                         <span className="glyphicon glyphicon-pushpin pull-right" aria-hidden="true"></span>
                        </div>
                        {rows}
                    </div>
            );
        }
    }
}
export default FixedColumns;
