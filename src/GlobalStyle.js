import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #00BFFF;
    --pale-blue: #EDF5F9;
    --light-blue: #D7E4F4;
    --dark-gray: #696969;
    --gray: #A9A9A9;
    --light-gray: #D3D3D3;
    --green: #28BFBF;
    --white: #FFF;
    --smooth-white: #FFFAFA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--dark-gray);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    min-width: 350px;
  }
`;

export default GlobalStyle;
