import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
    font-size: 62.5%;   
    max-width: 100vw;
  }

body {
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  
  overflow-y: auto;
  overflow-x: auto; 

  -webkit-font-smoothing: antialiased;
}

body, textarea {
  font-family: 'Poppins', sans-serif;
  outline: none;
}

input, button {
  font-family: 'Roboto', sans-serif;
  outline: none;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9)
}

`
