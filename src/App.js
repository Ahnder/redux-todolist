import React from 'react';
import { createGlobalStyle } from 'styled-components';

// import TodoTemplate from './components/TodoTemplate';
// import TodoHead from './components/TodoHead';
// import TodoList from './components/TodoList';
// import TodoCreate from './components/TodoCreate';
import TodoContainer from './containers/TodoContainer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoContainer />
    </>
  );
}

export default App;
