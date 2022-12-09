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
import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

function App() {
    const [formStep, setFormStep] = useState(1);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        isYearlyPlan: false,
        plan: {
            title: "Arcade",
            image: arcadeImg,
            month: {
                value: 9,
                price: "$9/mo",
            },
            year: {
                value: 90,
                price: "$90/yr",
                highlight: "2 months free",
            },
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

    const [planOptions, setPlanOptions] = useState([
        {
            title: "Arcade",
            image: arcadeImg,
            month: {
                value: 9,
                price: "$9/mo",
            },
            year: {
                value: 90,
                price: "$90/yr",
                highlight: "2 months free",
            },
        },
        {
            title: "Advanced",
            image: advancedImg,
            month: {
                value: 12,
                price: "$12/mo",
            },
            year: {
                value: 120,
                price: "$120/yr",
                highlight: "2 months free",
            },
        },
        {
            title: "Pro",
            image: proImg,
            month: {
                value: 15,
                price: "$15/mo",
            },
            year: {
                value: 150,
                price: "$150/yr",
                highlight: "2 months free",
            },
        },
    ]);

    const [addOnOptions, setAddOnOptions] = useState([
        {
            title: "Online service",
            sub: "Access to multiplayer games",
            monthly: {
                value: 1,
                price: "+$1/mo",
            },
            yearly: {
                value: 10,
                price: "+$10/yr",
            },
            selected: false,
        },
        {
            title: "Larger storage",
            sub: "Extra 1TB of cloud save",
            monthly: {
                value: 2,
                price: "+$2/mo",
            },
            yearly: {
                value: 20,
                price: "+$20/yr",
            },
            selected: false,
        },
        {
            title: "Customizable profile",
            sub: "Custom theme on your profile",
            monthly: {
                value: 2,
                price: "+$2/mo",
            },
            yearly: {
                value: 20,
                price: "+$20/yr",
            },
            selected: false,
        },
    ]);

    function previousStep(event) {
        setFormStep((prevState) => prevState - 1);
    }

    function nextStep() {
        setFormStep((prevState) => prevState + 1);
    }

    function confirm() {
        setFormStep(5);
    }

    function onChangeName(event) {
        setFormData((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    }

    function onChangeEmail(event) {
        setFormData((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    }

    function onChangePhone(event) {
        setFormData((prevState) => ({
            ...prevState,
            phone: event.target.value,
        }));
    }

    function onChangeIsYearlyPlan(event) {
        setFormData((prevState) => ({
            ...prevState,
            isYearlyPlan: event.target.checked,
        }));
    }

    function onChangePlan(event) {
        let planTitle = event.target.value;

        setFormData((prevState) => {
            let newPlan = null;
            for (const plan of planOptions) {
                if (plan.title === planTitle) {
                    newPlan = plan;
                }
            }

            return { ...prevState, plan: newPlan };
        });
    }

    function onChangeAddOns(event) {
        let optionValue = event.target.value;

        let isAlreadySelected = false;
        for (const selectedAddOn of formData.addOns) {
            if (selectedAddOn.title === optionValue) {
                isAlreadySelected = true;
            }
        }

        if (isAlreadySelected) {
            setFormData((prevState) => {
                let newAddOns = [];
                for (const addOn of prevState.addOns) {
                    if (addOn.title !== optionValue) {
                        newAddOns.push(addOn);
                    }
                }

                return { ...prevState, addOns: newAddOns };
            });

            setAddOnOptions((prevState) =>
                prevState.map((option) => {
                    if (option.title === optionValue) {
                        return { ...option, selected: false };
                    }
                    return { ...option };
                })
            );
        } else {
            let addOnValue;
            for (const option of addOnOptions) {
                if (option.title === optionValue) {
                    addOnValue = option;
                }
            }

            setFormData((prevState) => {
                return {
                    ...prevState,
                    addOns: [...prevState.addOns, addOnValue],
                };
            });

            setAddOnOptions((prevState) =>
                prevState.map((option) => {
                    if (option.title === optionValue) {
                        return { ...option, selected: true };
                    }
                    return { ...option };
                })
            );
        }
    }

    function jumpTo(value) {
        setFormStep(value);
    }

    let step = null;
    switch (formStep) {
        case 1:
            step = (
                <PersonalInfo
                    formData={formData}
                    onChangeName={onChangeName}
                    onChangeEmail={onChangeEmail}
                    onChangePhone={onChangePhone}
                />
            );
            break;
        case 2:
            step = (
                <SelectPlan
                    formData={formData}
                    planOptions={planOptions}
                    onChangePlan={onChangePlan}
                    onChangeIsYearlyPlan={onChangeIsYearlyPlan}
                />
            );
            break;
        case 3:
            step = (
                <AddOns
                    formData={formData}
                    addOnOptions={addOnOptions}
                    onChangeAddOns={onChangeAddOns}
                />
            );
            break;
        case 4:
            step = <Summary formData={formData} jumpTo={jumpTo} />;
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
                                    (formStep === 5 && item.step === 4) ||
                                    item.step === formStep
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
