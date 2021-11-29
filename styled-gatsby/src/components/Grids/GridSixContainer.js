import styled from "styled-components";

const GridSixContainer = styled.div`
    width: 100%;
    border-top: 4px ${({theme}) => theme.colors.brightblue} solid;
    border-bottom: 4px ${({theme}) => theme.colors.brightblue} solid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    /* position: fixed;
    top: 300px; */
    padding: 40px 60px;
`

export default GridSixContainer;
