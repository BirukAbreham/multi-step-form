import styled from "styled-components";

export const StepItem = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    font-family: "Ubuntu", sans-serif;
`;

export const StepCircle = styled("div")`
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid hsl(0, 0%, 100%);
    color: ${(props) =>
        props.isActive ? "hsl(213, 96%, 18%)" : "hsl(0, 0%, 100%)"};
    background-color: ${(props) =>
        props.isActive ? "hsl(206, 94%, 87%)" : "transparent"};
`;

export const StepVerbose = styled("div")`
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;

    @media screen and (max-width: 625px) {
        display: none;
    }
`;

export const StepNum = styled("div")`
    font-weight: 100;
    font-size: 1rem;
`;

export const StepTitle = styled("div")`
    margin-top: 3px;
    font-size: 1.2rem;
    font-weight: 600;
`;
