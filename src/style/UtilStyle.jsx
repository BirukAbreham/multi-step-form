import styled from "styled-components";

export const FormItem = styled("div")`
    padding-left: 4%;
    padding-right: 4%;

    @media screen and (max-width: 625px) {
        margin: unset;
        margin-top: -12%;
        margin-bottom: 5%;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        background-color: hsl(0, 0%, 100%);
    }
`;

export const FormTitle = styled("div")`
    margin-bottom: 2rem;
`;

export const Title = styled("h1")`
    font-size: 2.6rem;
    font-weight: 700;
    margin-block: 1rem;
    color: hsl(213, 96%, 18%);

    @media screen and (max-width: 625px) {
        font-size: 2rem;
    }
`;

export const SubTitle = styled("p")`
    font-size: 1.2rem;
    margin-block: 0.8rem;
    color: hsl(231, 11%, 63%);
`;

export const P = styled("p")`
    margin-block: 0.5rem;
    font-weight: ${(props) => (props.weight ? props.weight : "700")};
    font-size: ${(props) => (props.size ? props.size : "1.3rem")};
    color: ${(props) => (props.color ? props.color : "hsl(231, 11%, 63%)")};

    @media screen and (max-width: 625px) {
        font-size: ${(props) => (props.sm_size ? props.sm_size : "0.9rem")};
    }
`;
