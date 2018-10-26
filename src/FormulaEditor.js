import React from "react";
import InputTrigger from "react-input-trigger";
import { TextArea, Dropdown, Segment, Form, Button } from "semantic-ui-react";
import { MentionsInput, Mention } from "react-mentions";
import "semantic-ui-css/semantic.min.css";

const style = {
  highlighter: {
    padding: 9,
    border: "2px inset transparent"
  },

  input: {
    padding: 9,
    minHeight: 63,
    outline: 0,
    border: "1px solid silver",
    fontFamily: "monospace"
  },
  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 10
    },

    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",

      "&focused": {
        backgroundColor: "lightblue"
      }
    }
  }
};
const metrics = [
  {
    id: "Total",
    text: "Total",
    type: "Number",
    value: "Total",
    display: "Total"
  },
  {
    id: "Average",
    text: "Average",
    type: "Number",
    value: "Average",
    display: "Average"
  },
  {
    id: "Cost",
    text: "Cost",
    type: "Currency",
    value: "Cost",
    display: "Cost"
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
  handleFormulaOnInput = (e, value) => {
    buildFormula = value;
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

          <br />
          <MentionsInput
            value={this.state.formula}
            onChange={this.handleFormulaOnInput}
            style={style}
          >
            <Mention trigger="@" data={metrics} highlighted />
          </MentionsInput>
          <br />
          <Button onClick={this.handleClearOnClick}>Clear</Button>
        </Segment>
      </div>
    );
  }
}

export default FormulaEditor;
