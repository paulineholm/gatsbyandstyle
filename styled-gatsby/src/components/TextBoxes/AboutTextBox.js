import styled from "styled-components";

const AboutTextBox = styled.div`
    width: 50%;
    border-top: 4px ${({theme}) => theme.colors.brightblue} solid;
    border-bottom: 4px ${({theme}) => theme.colors.brightblue} solid;
    position: fixed;
    top: 350px;
    padding: 40px 60px;
    line-height: 30px;
    font-size: 18px;
`

export default AboutTextBox;
