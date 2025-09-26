export default createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;    
  padding: 0;    
  font-family: sans-serif;    
  transition: background-color 0.5s ease, color 0.5s ease;
}
`;