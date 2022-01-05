import { PureComponent } from "react";

export default class Step extends PureComponent {
  render() {
    const { selected, index, active, label } = this.props;
    return (
      <div className={`StepBlock ${selected ? "SelectedStep" : ""}`}>
        <div className="StepCircleWrapper">
          <div className="StepCircle">{active ? "✓" : index + 1}</div>
        </div>
        <span className="StepLabel">{label}</span>
      </div>
    );
  }
}
