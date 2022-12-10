import {
    FormItem,
    FormTitle,
    Input,
    InputWrapper,
    Label,
    LabelWrapper,
    P,
    SubTitle,
    Title,
} from "../style";

export function PersonalInfo({
    formData,
    onChangeName,
    onChangeEmail,
    onChangePhone,
}) {
    return (
        <FormItem>
            <FormTitle>
                <Title>Personal info</Title>

                <SubTitle>
                    Please provide your name, email address, and phone number
                </SubTitle>
            </FormTitle>

            <form>
                <InputWrapper>
                    <LabelWrapper>
                        <Label htmlFor="name">Name</Label>
                        {formData.nameError ? (
                            <P
                                my="0"
                                lh="normal"
                                sm_lh="normal"
                                weight="300"
                                size="0.95rem"
                                sm_size="0.8rem"
                                color="hsl(354, 84%, 57%)"
                            >
                                {formData.nameError}
                            </P>
                        ) : null}
                    </LabelWrapper>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Stephen King"
                        value={formData.name}
                        onChange={onChangeName}
                        danger={formData.nameError !== ""}
                    />
                </InputWrapper>
                <InputWrapper>
                    <LabelWrapper>
                        <Label htmlFor="email">Email Address</Label>
                        {formData.emailError ? (
                            <P
                                my="0"
                                lh="normal"
                                sm_lh="normal"
                                weight="300"
                                size="0.95rem"
                                sm_size="0.8rem"
                                color="hsl(354, 84%, 57%)"
                            >
                                {formData.emailError}
                            </P>
                        ) : null}
                    </LabelWrapper>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={formData.email}
                        onChange={onChangeEmail}
                        danger={formData.emailError !== ""}
                    />
                </InputWrapper>
                <InputWrapper>
                    <LabelWrapper>
                        <Label htmlFor="phone">Phone Number</Label>
                        {formData.phoneError ? (
                            <P
                                my="0"
                                lh="normal"
                                sm_lh="normal"
                                weight="300"
                                size="0.95rem"
                                sm_size="0.8rem"
                                color="hsl(354, 84%, 57%)"
                            >
                                {formData.phoneError}
                            </P>
                        ) : null}
                    </LabelWrapper>
                    <Input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +1234567890 or (123) 456-7890"
                        value={formData.phone}
                        onChange={onChangePhone}
                        danger={formData.phoneError !== ""}
                    />
                </InputWrapper>
            </form>
        </FormItem>
    );
}
