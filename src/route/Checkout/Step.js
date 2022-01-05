import { PureComponent } from "react";

export default class Step extends PureComponent {
  render() {
    return (
      <div className={`StepBlock ${this.props.selected ? "SelectedStep" : ""}`}>
        <div className="StepCircleWrapper">
          <div className="StepCircle">{this.props.index + 1}</div>
        </div>
        <span className="StepLabel">{this.props.label}</span>
      </div>
    );
  }
}
