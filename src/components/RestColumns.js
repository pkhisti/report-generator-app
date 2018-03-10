import React, { Component } from 'react';


class RestColumns extends Component {
  constructor(props){
        super(props);
    }

    render() {
        let values;
        let list = this.props.data === undefined? []:this.props.data;
        let all = list.map((single,key)=>{
            if (Object.keys(single).length === 0) {
                values = [];
            } else {
                values = single.values;
            }
                const rows =  values.map((value)=>{
                return  (<div >{value}</div>);
            });
               return (
                <div className="table-col">
                    <div>{single.key}</div>
                    {rows}
                </div>

        );
        });
       return (
                <div >
                    {all}
                </div>

        );

    }
}

export default RestColumns;
