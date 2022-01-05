import { PureComponent } from "react";
import Step from "./Step";

export default class StepNavigation extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="StepWrapper">
        {this.props.labelArray.map((item, index) => (
          <Step
            label={item.label}
            index={index}
            selected={this.props.currentStep >= index + 1}
            key={index}
          ></Step>
        ))}
      </div>
    );
  }
}
