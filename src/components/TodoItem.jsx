import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
const Remove = styled.div`
  display: flex;
  color: #dee2e6;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }

  display: none;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckCircle = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  margin-right: 1.25rem;

  border-radius: 1rem;
  border: 1px solid #ced4da;

  font-size: 1.5rem;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;

  font-size: 1.25rem;
  color: #495057;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

function TodoItem({ done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
