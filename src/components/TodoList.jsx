import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 1.25rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
}

export default TodoList;
