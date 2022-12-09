import styled from "styled-components";

export const ListSection = styled("section")`
    padding: 0rem;
    @media screen and (max-width: 625px) {
        padding: unset;
    }
`;

export const ListContainer = styled("div")`
    width: 100%;
    padding: 1.4rem;
    border-radius: 1rem;
    background-color: hsl(231, 100%, 99%);
`;

export const Hr = styled("hr")`
    height: 0.125rem;
    margin-block: 1.6rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: hsl(231, 11%, 63%);

    @media screen and (max-width: 625px) {
        margin-block: 1rem;
    }
`;

export const Ul = styled("ul")``;

export const Li = styled("li")`
    list-style: none;
    padding: ${(props) => (props.p ? props.p : "0 0")};
`;

export const ListItem = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-block: ${(props) => (props.my ? props.my : "0.5rem 0")};
`;
