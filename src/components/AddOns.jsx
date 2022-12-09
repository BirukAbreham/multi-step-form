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

export function AddOns({ formData, addOnOptions, onChangeAddOns }) {
    const checkboxLabels = addOnOptions.map((option, idx) => {
        return (
            <CheckboxLabel key={idx}>
                <Checkbox
                    type="checkbox"
                    value={option.title}
                    checked={option.selected}
                    onChange={onChangeAddOns}
                />
                <CheckboxCustom>
                    <CheckboxIcon selected={option.selected}/>
                    <CheckboxHead>
                        <div>
                            <LabelTitle focus>{option.title}</LabelTitle>
                            <LabelTitle size="1rem">{option.sub}</LabelTitle>
                        </div>
                        {formData.isYearlyPlan ? (
                            <CheckboxInline>
                                {option.yearly.price}
                            </CheckboxInline>
                        ) : (
                            <CheckboxInline>
                                {option.monthly.price}
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
