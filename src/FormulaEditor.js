import React from "react";
import InputTrigger from "react-input-trigger";
import { TextArea, Dropdown, Segment, Form, Button } from "semantic-ui-react";
import { MentionsInput, Mention } from "react-mentions";

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
    this.handleFormulaOnInput = this.handleFormulaOnInput.bind(this);
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
  handleFormulaOnInput = (e, { value }) => {
    this.setState(ps => {
      return {
        ...ps,
        formula: value
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
            style={{ margin: "5%" }}
          />
          <Dropdown
            selection
            placeholder="Select Operators"
            options={operators}
            onChange={this.handleOperatorsDropdownClick}
            style={{ margin: "5%" }}
          />
          <br />
          <InputTrigger
            trigger={{
              keyCode: 50,
              shiftKey: true
            }}
          >
            <TextArea
              placeholder="Formula"
              style={{ minWidth: 400, margin: "5%" }}
              value={this.state.formula}
              onInput={this.handleFormulaOnInput}
              fluid
            />
          </InputTrigger>
          <MentionsInput
            value={this.state.formula}
            onChange={this.handleFormulaOnInput}
          >
            <Mention trigger="@" data={this.state.metrics} />
            <Mention trigger="@" data={this.state.metrics} />
          </MentionsInput>
          <br />
          <TextArea
            placeholder="Formula"
            style={{ minWidth: 400, margin: "5%" }}
            value={this.state.formula}
            onInput={this.handleFormulaOnInput}
            fluid
          >
            <Mention trigger="@" data={metrics} />
          </TextArea>
          <Button onClick={this.handleClearOnClick}>Clear</Button>
        </Segment>
      </div>
    );
  }
}

export default FormulaEditor;
