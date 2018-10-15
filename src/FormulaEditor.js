import React from "react";

import { TextArea, Dropdown, Segment, Form, Button } from "semantic-ui-react";
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

const operators = [
  {
    text: "+",
    value: "+"
  },
  {
    text: "-",
    value: "-"
  },
  {
    text: "*",
    value: "*"
  }
];
let buildFormula = "";
class FormulaEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMetrics: "",
      selectedOperators: "",
      formula: ""
    };
    this.handleMetricsDropdownClick = this.handleMetricsDropdownClick.bind(
      this
    );
    this.handleOperatorsDropdownClick = this.handleOperatorsDropdownClick.bind(
      this
    );
    this.handleClearOnClick = this.handleClearOnClick.bind(this);
  }
  handleClearOnClick = () => {
    buildFormula = "";
    this.setState(ps => {
      return {
        ...ps,
        selectedMetrics: "",
        selectedOperators: "",
        formula: ""
      };
    });
  };
  handleMetricsDropdownClick = (e, { value }) => {
    buildFormula = buildFormula.concat(value);
    console.log("Formula :" + buildFormula);
    this.setState(ps => {
      return {
        ...ps,
        selectedMetrics: value,
        formula: buildFormula
      };
    });

    console.log(this.state.selectedMetrics);
  };

  handleOperatorsDropdownClick = (e, { value }) => {
    buildFormula = buildFormula.concat(value);
    console.log("Formula :" + buildFormula);
    this.setState(ps => {
      return {
        ...ps,
        selectedOperators: value,
        formula: buildFormula
      };
    });
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
          <Dropdown
            selection
            options={operators}
            onChange={this.handleOperatorsDropdownClick}
          />
          <Form>
            <TextArea
              placeholder="Formula"
              style={{ minHeight: 100 }}
              value={this.state.formula}
              onChange={this.handleFormulaDropdownClick}
            />
            <Button onClick={this.handleClearOnClick}>Clear</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default FormulaEditor;
