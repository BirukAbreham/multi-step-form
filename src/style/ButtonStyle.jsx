import styled from "styled-components";

export const Button = styled("button")`
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2rem;
    border-radius: 0.6rem;
    padding: 0.8rem 1.4rem;

    margin-left: ${(props) => (props.toRight ? "83.2%" : 0)};

    color: ${(props) => {
        if (props.type === "primary") {
            return "hsl(0, 0%, 100%)";
        } else if (props.type === "secondary") {
            return "hsl(0, 0%, 100%)";
        }
        return "hsl(231, 11%, 63%)";
    }};

    background-color: ${(props) => {
        if (props.type === "primary") {
            return "hsl(213, 96%, 18%)";
        } else if (props.type === "secondary") {
            return "hsl(243, 100%, 62%)";
        }
        return "hsl(0, 0%, 100%)";
    }};

    &:hover,
    &:focus {
        color: ${(props) =>
            props.type === "neutral"
                ? "hsl(213, 96%, 18%)"
                : "hsl(0, 0%, 100%)"};

        background-color: ${(props) => {
            if (props.type === "primary") {
                return "hsla(213, 96%, 18%, 0.7)";
            } else if (props.type === "secondary") {
                return "hsla(243, 100%, 62%, 0.7)";
            }
            return "hsl(0, 0%, 100%)";
        }};
    }

    @media screen and (max-width: 625px) {
        font-size: 1rem;
        padding: 0.6rem 1rem;
        margin-left: ${(props) => (props.toRight ? "65%" : 0)};
    }
`;
