import styled from "styled-components";
import checkMarkImg from "../assets/images/icon-checkmark.svg";

export const InputWrapper = styled("div")`
    gap: 0.5rem;
    display: flex;
    margin-block: 1.6rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const LabelWrapper = styled("div")`
    width: 100%;
    display: flex;
    padding: unset;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Label = styled("label")`
    font-size: 1.2rem;
    color: hsl(213, 96%, 18%);

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Input = styled("input")`
    width: 100%;
    outline: none;
    border-radius: 0.5rem;
    padding: 0.8rem 1.3rem;
    border: ${(props) =>
        props.danger
            ? "1px solid hsl(354, 84%, 57%)"
            : "1px solid hsl(229, 24%, 87%)"};

    &:focus,
    &:hover {
        border: 1px solid hsl(243, 100%, 62%);
    }
`;

export const LabelTitle = styled("h4")`
    font-size: ${(props) => (props.size ? props.size : "1.3rem")};
    font-weight: 700;
    margin-block: 0.5rem;
    color: ${(props) =>
        props.focus ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"};

    @media screen and (max-width: 768px) {
        font-size: ${(props) => (props.focus ? "1rem" : "0.8rem")};
    }
`;

export const ItemWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        gap: 1.2rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

export const Radio = styled("input")`
    width: 0;
    height: 0;
    opacity: 0;
    display: none;
`;

export const RadioCustom = styled("div")`
    padding: 2rem;
    display: flex;
    gap: 4rem;
    width: 200px;
    border-radius: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid hsl(231, 11%, 63%);

    @media screen and (max-width: 768px) {
        gap: 2rem;
        padding: 0.6rem;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const RadioImg = styled("img")`
    width: 48px;
    height: 48px;
`;

export const RadioLabel = styled("label")`
    cursor: pointer;
    position: relative;

    ${Radio}:checked + ${RadioCustom} {
        background-color: hsl(217, 100%, 97%);
        border: 1px solid hsl(243, 100%, 62%);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SwitchWrapper = styled("div")`
    width: 100%;
    padding: 0.8rem;
    margin-block: 1rem;
    display: flex;
    gap: 1.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    background-color: hsl(229, 24%, 87%);
`;

export const Switch = styled("input")`
    width: 0;
    height: 0;
    opacity: 0;
    display: none;
`;

export const SwitchToggle = styled("div")`
    width: 60px;
    height: 32px;
    padding: 0.25rem;
    position: relative;
    border-radius: 1rem;
    background-color: hsl(213, 96%, 18%);

    &:before {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 35px;
        top: 50%;
        left: 0.25rem;
        background-color: hsl(0, 0%, 100%);
        transform: translate(0, -50%);
    }
`;

export const SwitchLabel = styled("label")`
    position: relative;
    display: flex;
    gap: 0.6rem;
    cursor: pointer;
    align-items: center;

    ${Switch}:checked + ${SwitchToggle}:before {
        transform: translate(32px, -50%);
    }
`;

export const CheckboxWrapper = styled("div")`
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
`;

export const Checkbox = styled("input")`
    width: 0;
    height: 0;
    opacity: 0;
    display: none;
`;

export const CheckboxCustom = styled("div")`
    padding: 1.2rem 2rem;
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.8rem;
    border: 1px solid hsl(231, 11%, 63%);

    @media screen and (max-width: 768px) {
        gap: 1rem;
        padding: 0.6rem 1rem;
    }
`;

export const CheckboxIcon = styled("div")`
    height: 30px;
    width: 30px;
    border-radius: 0.25rem;
    border: ${(props) =>
        props.selected
            ? "1px solid hsl(243, 100%, 62%)"
            : "1px solid hsl(229, 24%, 87%)"};
    background: ${(props) =>
        props.selected
            ? `url(${checkMarkImg}) center 50% no-repeat hsl(243, 100%, 62%)`
            : "transparent"};

    @media screen and (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;

export const CheckboxHead = styled("div")`
    flex-basis: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-basis: 92%;
    }
`;

export const CheckboxInline = styled("p")`
    font-size: 1rem;
    color: hsl(243, 100%, 62%);
`;

export const CheckboxLabel = styled("label")`
    width: 100%;
    cursor: pointer;
    position: relative;

    ${Checkbox}:hover + ${CheckboxCustom} {
        background-color: hsl(217, 100%, 97%);
    }

    ${Checkbox}:checked + ${CheckboxCustom} {
        background-color: hsl(217, 100%, 97%);
        border: 1px solid hsl(243, 100%, 62%);
    }
`;
