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

export const ButtonLink = styled("button")`
    cursor: pointer;
    border: none;
    outline: none;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    background-color: transparent;
    border-bottom: 2px solid hsl(231, 11%, 63%);
    font-weight: ${(props) => (props.weight ? props.weight : "700")};
    font-size: ${(props) => (props.size ? props.size : "1.3rem")};
    color: ${(props) => (props.color ? props.color : "hsl(231, 11%, 63%)")};

    @media screen and (max-width: 625px) {
        font-size: ${(props) => (props.sm_size ? props.sm_size : "0.9rem")};
    }
`;