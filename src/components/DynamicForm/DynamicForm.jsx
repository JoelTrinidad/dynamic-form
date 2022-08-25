import { useState } from "react";
import { Container } from "react-bootstrap";
import "./DynamicForm.css";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export default function DynamicForm() {
  const [step, setStep] = useState(1);

  const showNextStep = () => {
    setStep(step + 1);
  };

  const showPreviewStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="dynamic-form mt-4 mb-5" id="dynamic-form">
      <Container className="text-center p-4">
        <div className="content-dynamic-form mt-5 p-4">
          <h1 className="title-dynamic-form">Fill the form</h1>
          <p className="steps-numbers">Steps {step} of 3</p>

          {getPageByStep(step, setStep)}

          <div className="actions">
            <div className="container-text">
              {step > 1 && step < 4 && (
                <p className="before" onClick={showPreviewStep}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                  Before Step
                </p>
              )}
            </div>
            <div className="container-text">
              {step > 0 && step < 3 && (
                <p className="next" onClick={showNextStep}>
                  Next Step
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function getPageByStep(step, setStep) {
  if (step == 1) {
    return <FirstStep />;
  }
  if (step == 2) {
    return <SecondStep />;
  }
  if (step == 3) {
    return <ThirdStep />;
  }
}
