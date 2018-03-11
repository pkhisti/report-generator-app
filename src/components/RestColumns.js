import React, { Component } from 'react';
import * as Util from "../util/util";
class RestColumns extends Component {
    render() {
        let values;
        let list = this.props.data === undefined? []:this.props.data;
        let all = list.map((single,key)=>{
            values = (Object.keys(single).length === 0)?[]:single.values;
            const rows =  values.map((value)=>{
                return  (<div className="col-data" >{Util.displayDate(value)}</div>);
            });
            return (
                <div className="table-col">
                    <div className="col-header">{single.key}</div>
                    {rows}
                </div>);
            });
       return (<div>{all}</div>);
    }
}
export default RestColumns;
