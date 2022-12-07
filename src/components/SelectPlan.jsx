import {
    FormItem,
    FormTitle,
    ItemWrapper,
    Radio,
    RadioLabel,
    RadioSub,
    RadioTitle,
    SubTitle,
    Title,
} from "../style";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { useState } from "react";

export function SelectPlan({ formData }) {
    const [isMonthly, setIsMonthly] = useState(false);

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

    const radioLabels = options.map((option, idx) => {
        return (
            <RadioLabel key={idx}>
                <Radio type="radio" name={option.title} value={option.title} />
                <img
                    width="48"
                    height="48"
                    src={option.image}
                    alt="radio option icon"
                />
                <div>
                    <RadioTitle>{option.title}</RadioTitle>
                    {isMonthly ? (
                        <RadioSub>{option.month.price}</RadioSub>
                    ) : (
                        <RadioSub>{option.year.price}</RadioSub>
                    )}
                    {isMonthly ? null : (
                        <RadioTitle size="0.8rem">
                            {option.year.highlight}
                        </RadioTitle>
                    )}
                </div>
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
            </form>
        </FormItem>
    );
}
