import styled from "styled-components";
import mbImgSidebar from "../assets/images/bg-sidebar-mobile.svg";
import dkImgSidebar from "../assets/images/bg-sidebar-desktop.svg";

export const Wrapper = styled("div")`
    padding: 5% 10%;
    min-height: 100vh;
    background: hsl(217, 100%, 97%);

    @media screen and (max-width: 625px) {
        padding: unset;
    }
`;

export const FormContainer = styled("section")`
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 0.5rem;
    border-radius: 12px;
    background-color: hsl(0, 0%, 100%);

    @media screen and (max-width: 625px) {
        padding: unset;
        border-radius: 0;
        grid-template-columns: auto;
        grid-template-rows: 30% 70%;
        background-color: transparent;
    }
`;

export const StepNumbers = styled("aside")`
    padding: 4rem 2.5rem;
    border-radius: 12px;
    color: hsl(0, 0%, 100%);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${dkImgSidebar});

    display: flex;
    gap: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width: 625px) {
        gap: 5px;
        padding: 2.5rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border-radius: 0;
        background-image: url(${mbImgSidebar});
    }
`;

export const StepContainer = styled("article")``;

export const StepForm = styled("div")`
    z-index: 2;
    padding: 3.5rem;
    background-color: hsl(0, 0%, 100%);

    @media screen and (max-width: 625px) {
        padding: unset;
        margin-left: 3%;
        margin-right: 3%;
        background-color: transparent;
    }
`;

export const StepActions = styled("div")`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding-left: 12%;
    padding-right: 12%;
    padding-block: 2rem;
    background-color: hsl(0, 0%, 100%);
`;
