import {
    FormItem,
    FormTitle,
    ItemWrapper,
    LabelTitle,
    SubTitle,
    Title,
    SwitchWrapper,
    SwitchLabel,
    Switch,
    SwitchToggle,
    RadioLabel,
    RadioCustom,
    RadioImg,
    Radio,
} from "../style";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { useState } from "react";

export function SelectPlan({ formData }) {
    const options = [
        {
            title: "Arcade",
            image: arcadeImg,
            month: {
                price: "$9/mo",
            },
            year: {
                price: "$90/yr",
                highlight: "2 months free",
            },
        },
        {
            title: "Advanced",
            image: advancedImg,
            month: {
                price: "$12/mo",
            },
            year: {
                price: "$120/yr",
                highlight: "2 months free",
            },
        },
        {
            title: "Pro",
            image: proImg,
            month: {
                price: "$15/mo",
            },
            year: {
                price: "$150/yr",
                highlight: "2 months free",
            },
        },
    ];

    const [isYearly, setIsYearly] = useState(false);

    const [plan, setPlan] = useState("Arcade");

    function handlePlanSwitch(event) {
        setIsYearly(event.target.checked);
    }

    function handlePlanChange(event) {
        setPlan(event.target.value);
    }

    const radioLabels = options.map((option, idx) => {
        return (
            <RadioLabel key={idx}>
                <Radio
                    type="radio"
                    value={option.title}
                    checked={option.title === plan}
                    onChange={handlePlanChange}
                />
                <RadioCustom>
                    <RadioImg src={option.image} alt={option.title} />
                    <div>
                        <LabelTitle focus>{option.title}</LabelTitle>
                        {isYearly ? (
                            <LabelTitle size="1rem">
                                {option.year.price}
                            </LabelTitle>
                        ) : (
                            <LabelTitle size="1rem">
                                {option.month.price}
                            </LabelTitle>
                        )}
                        {isYearly ? (
                            <LabelTitle size="1rem" focus>
                                {option.year.highlight}
                            </LabelTitle>
                        ) : null}
                    </div>
                </RadioCustom>
            </RadioLabel>
        );
    });

    return (
        <FormItem>
            <FormTitle>
                <Title>Select your plan</Title>
                <SubTitle>
                    You have the option to monthly or yearly billing.
                </SubTitle>
            </FormTitle>
            <form>
                <ItemWrapper>{radioLabels}</ItemWrapper>
                <SwitchWrapper>
                    <LabelTitle size="1.2rem" focus={!isYearly}>
                        Monthly
                    </LabelTitle>
                    <SwitchLabel>
                        <Switch
                            type="checkbox"
                            checked={isYearly}
                            onChange={handlePlanSwitch}
                        />
                        <SwitchToggle />
                    </SwitchLabel>
                    <LabelTitle size="1.2rem" focus={isYearly}>
                        Yearly
                    </LabelTitle>
                </SwitchWrapper>
            </form>
        </FormItem>
    );
}
