import React, { Component } from 'react';

class FixedColumns extends Component {
    constructor(props){
        super(props);

    }

    render() {
         const { items = [] } = this.props;
        let values;
        if (Object.keys(this.props.data).length === 0) {
             values = [];
        } else {

           values = this.props.data.values;
        }
        const rows =  values.map((value,i)=>{
        return  (<div key={i}>{value}</div>);
        });
        return (
                <div className="table-col">
                    <div>{this.props.data.key}</div>
                    {rows}
                </div>

        );
    }
}

export default FixedColumns;
