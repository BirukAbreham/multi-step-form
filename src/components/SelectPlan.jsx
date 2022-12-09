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

export function SelectPlan({
    formData,
    planOptions,
    onChangePlan,
    onChangeIsYearlyPlan,
}) {
    const radioLabels = planOptions.map((option, idx) => {
        return (
            <RadioLabel key={idx}>
                <Radio
                    type="radio"
                    value={option.title}
                    checked={option.title === formData.plan.title}
                    onChange={onChangePlan}
                />
                <RadioCustom>
                    <RadioImg src={option.image} alt={option.title} />
                    <div>
                        <LabelTitle focus>{option.title}</LabelTitle>
                        {formData.isYearlyPlan ? (
                            <LabelTitle size="1rem">
                                {option.year.price}
                            </LabelTitle>
                        ) : (
                            <LabelTitle size="1rem">
                                {option.month.price}
                            </LabelTitle>
                        )}
                        {formData.isYearlyPlan ? (
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
                    <LabelTitle size="1.2rem" focus={!formData.isYearlyPlan}>
                        Monthly
                    </LabelTitle>
                    <SwitchLabel>
                        <Switch
                            type="checkbox"
                            checked={formData.isYearlyPlan}
                            onChange={onChangeIsYearlyPlan}
                        />
                        <SwitchToggle />
                    </SwitchLabel>
                    <LabelTitle size="1.2rem" focus={formData.isYearlyPlan}>
                        Yearly
                    </LabelTitle>
                </SwitchWrapper>
            </form>
        </FormItem>
    );
}
