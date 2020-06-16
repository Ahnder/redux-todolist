import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 3rem 2rem 1.5rem 2rem;
  border-bottom: 1px solid #e9ecef;
`;

const TodoDate = styled.h1`
  margin: 0;
  font-size: 2.25rem;
  color: #343a40;
`;
const TodoDay = styled.div`
  margin-top: 0.25rem;
  color: #868e96;
  font-size: 1.3rem;
  font-weight: 400;
`;
const TodoTasks = styled.div`
  color: #20c997;
  font-size: 1.1rem;
  margin-top: 2rem;
  font-weight: bold;
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <TodoDate>2020년 6월 16일</TodoDate>
      <TodoDay>화요일</TodoDay>
      <TodoTasks>할 일 2개 남음</TodoTasks>
    </TodoHeadBlock>
  );
}

export default TodoHead;
