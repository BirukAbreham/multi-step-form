import styled from "styled-components";

export const InputWrapper = styled("div")`
    gap: 0.5rem;
    display: flex;
    margin-block: 1.6rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Label = styled("label")`
    font-size: 1.2rem;
    color: hsl(213, 96%, 18%);
`;

export const Input = styled("input")`
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.8rem 1.3rem;
    border: 2px solid hsl(229, 24%, 87%);
`;

export const ItemWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 625px) {
        gap: 1.2rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

export const RadioLabel = styled("label")`
    display: flex;
    gap: 1rem;
    width: 220px;
    cursor: pointer;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    outline: 1px solid hsl(229, 24%, 87%);

    @media screen and (max-width: 625px) {
        width: 100%;
        padding: 1rem 2rem;
        gap: 1rem;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const Radio = styled("input").attrs((props) => ({ type: "radio" }))`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:hover + ${RadioLabel} {
        outline: 2px solid hsl(243, 100%, 62%);
    }

    &:checked + ${RadioLabel} {
        outline: 2px solid hsl(243, 100%, 62%);
    }
`;

export const RadioTitle = styled("h4")`
    font-size: ${(props) => (props.size ? props.size : "1.3rem")};
    font-weight: 700;
    margin-block: 0.5rem;
    color: hsl(213, 96%, 18%);
`;

export const RadioSub = styled("p")`
    font-size: 1rem;
    margin-block: 0.5rem;
    color: hsl(231, 11%, 63%);
`;
