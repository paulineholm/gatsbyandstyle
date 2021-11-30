import styled from "styled-components";

const AboutTextBox = styled.div`
    width: 100%;
    border-top: 4px ${({theme}) => theme.colors.brightblue} solid;
    border-bottom: 4px ${({theme}) => theme.colors.brightblue} solid;
    padding: 40px 60px;
    line-height: 30px;
    font-size: 18px;
    margin-top: 20px;
`

export default AboutTextBox;
