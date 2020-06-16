import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckCircle = styled.div`
  display: flex;
`;
const Text = styled.div`
  flex: 1;
`;
const Remove = styled.div`
  display: flex;
`;

function TodoItem() {
  return (
    <TodoItemBlock>
      <CheckCircle>
        <MdDone />
      </CheckCircle>
      <Text>할 일 입니다.</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
