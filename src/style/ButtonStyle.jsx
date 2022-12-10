import styled from "styled-components";

export const Button = styled("button")`
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    border-radius: 0.4rem;
    padding: 0.8rem 1.4rem;

    margin-left: ${(props) => (props.toRight ? "81.6%" : 0)};
    font-size: ${(props) => (props.fSize ? props.fSize : "1.2rem")};

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
                return "hsla(213, 96%, 18%, 0.8)";
            } else if (props.type === "secondary") {
                return "hsla(243, 100%, 62%, 0.8)";
            }
            return "hsl(0, 0%, 100%)";
        }};
    }

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0.6rem 1rem;
        margin-left: ${(props) => (props.toRight ? "70%" : 0)};
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

    &:hover {
        color: hsl(243, 100%, 62%);
        border-bottom: 2px solid hsl(243, 100%, 62%);
    }

    @media screen and (max-width: 768px) {
        font-size: ${(props) => (props.sm_size ? props.sm_size : "0.9rem")};
    }
`;