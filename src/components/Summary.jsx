import { FormItem, FormTitle, Input, InputWrapper, Label, SubTitle, Title } from "../style";

export function Summary({ formData }) {
    return (
        <FormItem>
            <FormTitle>
                <Title>Finishing up</Title>

                <SubTitle>
                    Double-check everything looks OK before confirming.
                </SubTitle>
            </FormTitle>

            <form>
                <InputWrapper>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Stephen King"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </InputWrapper>
            </form>
        </FormItem>
    );
}
