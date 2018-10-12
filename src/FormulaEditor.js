import React from "react";

import { TextArea, Dropdown, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const metrics = [
  {
    text: "Total",
    type: "Number",
    value: "Total"
  },
  {
    text: "Average",
    type: "Number",
    value: "Average"
  },
  {
    text: "Cost",
    type: "Currency",
    value: "Cost"
  }
];
let formula = "";
class FormulaEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMetrics: ""
    };
    this.handleMetricsDropdownClick = this.handleMetricsDropdownClick.bind(
      this
    );
  }
  handleMetricsDropdownClick = (e, { value }) => {
    formula = formula.concat(value);
    console.log("Formula :" + formula);
    this.setState(ps => {
      return {
        ...ps,
        selectedMetrics: value
      };
    });

    console.log(this.state.selectedMetrics);
  };

  render() {
    return (
      <div>
        <Segment>
          <Dropdown
            placeholder="Select Metrics"
            selection
            options={metrics}
            onChange={this.handleMetricsDropdownClick}
          />
          <TextArea
            placeholder="Formula"
            style={{ minHeight: 100 }}
            value={formula}
          />
        </Segment>
      </div>
    );
  }
}

export default FormulaEditor;
