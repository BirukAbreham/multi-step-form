import { useState } from "react";
import {
    Button,
    FormContainer,
    StepActions,
    StepCircle,
    StepContainer,
    StepForm,
    StepItem,
    StepNum,
    StepNumbers,
    StepTitle,
    StepVerbose,
    Wrapper,
} from "./style";
import {
    AddOns,
    PersonalInfo,
    SelectPlan,
    Summary,
    ThankYou,
} from "./components";

function App() {
    const [formStep, setFormStep] = useState(1);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        plan: {
            value: 0,
            type: "mo",
        },
        addOns: [],
    });

    const steps = ["your info", "select plan", "adds-ons", "summary"].map(
        (val, idx) => ({
            step: idx + 1,
            stepNum: `step ${idx + 1}`,
            title: val,
        })
    );

    function previousStep(event) {
        setFormStep((prevState) => prevState - 1);
        
    }

    function nextStep() {
        setFormStep((prevState) => prevState + 1);
    }

    function confirm() {
        setFormStep(5);
    }

    let step = null;
    switch (formStep) {
        case 1:
            step = <PersonalInfo formData={formData} />;
            break;
        case 2:
            step = <SelectPlan formData={formData} />;
            break;
        case 3:
            step = <AddOns formData={formData} />;
            break;
        case 4:
            step = <Summary formData={formData} />;
            break;
        case 5:
            step = <ThankYou />;
            break;
        default:
            break;
    }

    return (
        <Wrapper>
            <FormContainer>
                <StepNumbers>
                    {steps.map((item) => (
                        <StepItem key={item.step}>
                            <StepCircle
                                isActive={
                                    item.step === 5 || item.step === formStep
                                }
                            >
                                {item.step}
                            </StepCircle>
                            <StepVerbose>
                                <StepNum>{item.stepNum}</StepNum>
                                <StepTitle>{item.title}</StepTitle>
                            </StepVerbose>
                        </StepItem>
                    ))}
                </StepNumbers>
                <StepContainer>
                    <StepForm>{step}</StepForm>
                    {formStep < 5 ? (
                        <StepActions>
                            {formStep > 1 && formStep <= 4 ? (
                                <Button type="neutral" onClick={previousStep}>
                                    Go Back
                                </Button>
                            ) : null}
                            {formStep < 4 ? (
                                <Button 
                                    type="primary" 
                                    toRight={formStep === 1}
                                    onClick={nextStep}
                                >
                                    Next Step
                                </Button>
                            ) : null}
                            {formStep === 4 ? (
                                <Button type="secondary" onClick={confirm}>
                                    Confirm
                                </Button>
                            ) : null}
                        </StepActions>
                    ) : null}
                </StepContainer>
            </FormContainer>
        </Wrapper>
    );
}

export default App;
