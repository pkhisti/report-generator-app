import React, { Component } from 'react';
import Checkbox from './Checkbox';

class ReportFields extends Component {
    constructor(props){
        super(props);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.createCheckboxes = this.createCheckboxes.bind(this);
  }

toggleSelectAllCheckbox = () => {
    this.props.toggleSelectAllCheckbox();
}

toggleCheckbox = (label,checked) => {
   this.props.toggleCheckbox(label,checked);
}

createCheckboxes = () => (
    this.props.row.map((item,index)=>{
        return  (<Checkbox
            label={item.label}
            handleCheckboxChange={this.toggleCheckbox}
            key={item.label}
            isChecked={this.props.row[index].checked}
        />);
    })
)

 render() {
    return (
        <div className="left-bar">
            <div className="panel panel-primary">
            <div className="panel-heading">Report Fields</div>
                 <div className="select-all">
                 <Checkbox
                    label="Select All"
                    key="selectAll"
                    handleCheckboxChange={this.toggleSelectAllCheckbox}
                 />
                 </div>
                <div className="panel-body">
                    {this.createCheckboxes()}
                </div>
            </div>
        </div>
        );
    }
}

export default ReportFields;