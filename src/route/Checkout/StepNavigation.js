import { PureComponent } from "react";
import Step from "./Step";

export default class StepNavigation extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleStepStatus = (index) => {
    const { currentStep, stepLength } = this.props;
    if (currentStep > index + 1 || currentStep === stepLength) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="StepWrapper">
        {this.props.labelArray.map((item, index) => (
          <Step
            label={item.label}
            index={index}
            active={this.handleStepStatus(index)}
            selected={this.props.currentStep >= index + 1}
            key={index}
          ></Step>
        ))}
      </div>
    );
  }
}
