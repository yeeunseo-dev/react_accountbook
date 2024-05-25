import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 추가적인 전역 스타일을 여기에 작성할 수 있습니다 */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
