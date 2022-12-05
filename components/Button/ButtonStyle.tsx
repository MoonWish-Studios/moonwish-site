import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #000000;
    border-width: 1px;
    border-color: white;
    border-style: solid;
    padding: none;
    width: 10.3em;
    height: 3.6em;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        transition: 0.1s ease-in-out;
        transform: translateY(-2.5px);
    }
`;

export default StyledButton;
