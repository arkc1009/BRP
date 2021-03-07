import {keyframes} from "styled-components";

const FirstRender = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 100%;
    transform: translateY(0);
  }
`;

export default FirstRender;
