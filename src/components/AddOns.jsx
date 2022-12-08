import { useState } from "react";
import {
    Checkbox,
    CheckboxCustom,
    CheckboxHead,
    CheckboxIcon,
    CheckboxInline,
    CheckboxLabel,
    CheckboxWrapper,
    FormItem,
    FormTitle,
    LabelTitle,
    SubTitle,
    Title,
} from "../style";

export function AddOns({ formData }) {
    const options = [
        {
            title: "Online service",
            sub: "Access to multiplayer games",
            month: {
                price: "+$1/mo",
            },
            year: {
                price: "+$10/yr",
            },
            checked: false,
        },
        {
            title: "Larger storage",
            sub: "Extra 1TB of cloud save",
            month: {
                price: "+$2/mo",
            },
            year: {
                price: "+$20/yr",
            },
            checked: false,
        },
        {
            title: "Customizable profile",
            sub: "Custom theme on your profile",
            month: {
                price: "+$2/mo",
            },
            year: {
                price: "+$20/yr",
            },
            checked: false,
        },
    ];

    const [isYearly, setIsYearly] = useState(true);

    const [selectedAddOns, setSelectedAddOns] = useState([]);

    function handleSelectedOptions(event) {
        options.forEach((option) => {
            if (event.target.value === option.title) {
                option.checked = true;
            }
        });

        setSelectedAddOns((prevState) => ([...prevState, event.target.value]));

        console.log("selected options: ", selectedAddOns);

        console.log("options: ", options);
    }

    const checkboxLabels = options.map((option, idx) => {
        return (
            <CheckboxLabel key={idx}>
                <Checkbox
                    type="checkbox"
                    value={option.title}
                    checked={option.checked}
                    onChange={handleSelectedOptions}
                />
                <CheckboxCustom>
                    <CheckboxIcon />
                    <CheckboxHead>
                        <div>
                            <LabelTitle focus>{option.title}</LabelTitle>
                            <LabelTitle size="1rem">{option.sub}</LabelTitle>
                        </div>
                        {isYearly ? (
                            <CheckboxInline>{option.year.price}</CheckboxInline>
                        ) : (
                            <CheckboxInline>
                                {option.month.price}
                            </CheckboxInline>
                        )}
                    </CheckboxHead>
                </CheckboxCustom>
            </CheckboxLabel>
        );
    });

    return (
        <FormItem>
            <FormTitle>
                <Title>Pick add-ons</Title>
                <SubTitle>Add-ons enhance your gaming experience.</SubTitle>
            </FormTitle>

            <form>
                <CheckboxWrapper>{checkboxLabels}</CheckboxWrapper>
            </form>
        </FormItem>
    );
}
