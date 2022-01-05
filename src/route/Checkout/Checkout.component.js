import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import StepNavigation from "./StepNavigation";
import "./StepStyle.css";

class Checkout extends SourceCheckout {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      labelArray: [
        { index: 1, label: "shipping" },
        { index: 2, label: "billing" },
        { index: 2, label: "success" },
      ],
    };
  }

  updateStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  };

  renderProgress = () => {
    return (
      <StepNavigation
        labelArray={this.state.labelArray}
        currentStep={this.state.currentStep}
        stepLength={this.state.labelArray.length}
      ></StepNavigation>
    );
  };

  render() {
    return (
      <main block="Checkout">
        {this.renderProgress()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
