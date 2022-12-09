import {
    ButtonLink,
    FormItem,
    FormTitle,
    Hr,
    Li,
    ListContainer,
    ListItem,
    ListSection,
    P,
    SubTitle,
    Title,
    Ul,
} from "../style";

export function Summary({ formData, jumpTo }) {
    const { isYearlyPlan, plan, addOns } = formData;

    const addOnList = addOns.map((addOn, idx) => {
        return (
            <Li key={idx}>
                <ListItem>
                    <P weight="400">{addOn.title}</P>
                    <P color="hsl(213, 96%, 18%)" weight="400" size="1.2rem">
                        {isYearlyPlan
                            ? `$${addOn.yearly.value}/yr`
                            : `$${addOn.monthly.value}/mo`}
                    </P>
                </ListItem>
            </Li>
        );
    });

    let totalValue = isYearlyPlan ? plan.year.value : plan.month.value;

    addOns.forEach((addOn) => {
        totalValue += isYearlyPlan ? addOn.yearly.value : addOn.monthly.value;
    });

    return (
        <FormItem>
            <FormTitle>
                <Title>Finishing up</Title>

                <SubTitle>
                    Double-check everything looks OK before confirming.
                </SubTitle>
            </FormTitle>
            <ListSection>
                <ListContainer>
                    <ListItem>
                        <div>
                            <P
                                color="hsl(213, 96%, 18%)"
                                size="1.5rem"
                                sm_size="1rem"
                            >
                                {`${plan.title} (${
                                    isYearlyPlan ? "Yearly" : "Monthly"
                                })`}
                            </P>
                            <ButtonLink onClick={() => { jumpTo(1); }}>Change</ButtonLink>
                        </div>

                        <P color="hsl(213, 96%, 18%)">
                            {`$${
                                isYearlyPlan
                                    ? `${plan.year.value}/yr`
                                    : `${plan.month.value}/mo`
                            }`}
                        </P>
                    </ListItem>
                    <Hr />
                    <Ul>{addOnList}</Ul>
                </ListContainer>
                <Ul>
                    <Li p="0 1.4rem">
                        <ListItem>
                            <P weight="400">{isYearlyPlan ? `Total (per year)`: `Total (per month)`}</P>
                            <P
                                color="hsl(243, 100%, 62%)"
                                size="1.5rem"
                                sm_size="1rem"
                            >
                                {`+$${totalValue}${isYearlyPlan ? '/yr' : '/mo'}`}
                            </P>
                        </ListItem>
                    </Li>
                </Ul>
            </ListSection>
        </FormItem>
    );
}
