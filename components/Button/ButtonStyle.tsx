import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #000000;
    border-width: 1px;
    border-color: white;
    border-style: solid;
    padding: none;
    width: 10em;
    height: 3.3em;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        transition: 0.1s ease-in-out;
        transform: translateY(-2.5px);
    }
`;

export default StyledButton;
