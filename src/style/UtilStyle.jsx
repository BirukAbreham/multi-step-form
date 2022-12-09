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
        font-size: 1.6rem;
    }
`;

export const SubTitle = styled("p")`
    font-size: 1.2rem;
    margin-block: 0.8rem;
    color: hsl(231, 11%, 63%);

    @media screen and (max-width: 625px) {
        font-size: 1.1rem;
    }
`;

export const P = styled("p")`
    margin-block: 0.5rem;
    line-height: 2.2rem;
    text-align: ${(props) => (props.align ? props.align : "left")};
    font-weight: ${(props) => (props.weight ? props.weight : "700")};
    font-size: ${(props) => (props.size ? props.size : "1.3rem")};
    color: ${(props) => (props.color ? props.color : "hsl(231, 11%, 63%)")};

    @media screen and (max-width: 625px) {
        line-height: 1.4rem;
        font-size: ${(props) => (props.sm_size ? props.sm_size : "0.9rem")};
    }
`;

export const Img = styled("img")`
    width: ${(props) => (props.width ? props.width : "60px")};
    height: ${(props) => (props.height ? props.height : "60px")};

    @media screen and (max-width: 625px) {
        width: ${(props) => (props.width_sm ? props.width_sm : "60px")};
        height: ${(props) => (props.height_sm ? props.height_sm : "60px")};
    }
`;

export const Section = styled("section")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14%;

    @media screen and (max-width: 625px) {
        gap: 0.5rem;
        margin: unset;
        margin-top: -5%;
        margin-bottom: 5%;
        padding: 16% 5%;
        border-radius: 0.5rem;
        background-color: hsl(0, 0%, 100%);
    }
`;
