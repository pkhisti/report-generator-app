import React, { Component } from 'react';

class Checkbox extends Component {
  toggleCheckboxChange = () => {
      this.props.handleCheckboxChange(this.props.label, !this.props.isChecked);
  }
  render() {
    return (
      <div className="form-horizontal">
      <div className="checkbox">
        <label className="pull-left">
          <input
            type="checkbox"
            value={this.props.label}
            checked={this.props.isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {this.props.label}
        </label>
      </div>
      </div>
    );
  }
}

export default Checkbox;
