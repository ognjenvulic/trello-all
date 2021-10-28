import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Item from "./components/Item";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import { data, statuses } from "./data";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const root = css`
  margin: 40px 0 0 16px;
  display: flex;
  overflow: auto;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
`;

const Board = ({board, theme}) => {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };
 
  return (
    <DndProvider backend={HTML5Backend}>
      <div css={root}>
      {/* {board && board.lists && board.lists.length && board.lists.map((list) => { */}
        {statuses.map((s) => {
          return (
            <div key={s.status} className={'col-wrapper'}>
              <h2 className={'col-header'}>{s.status.toUpperCase()}</h2>
              <DropWrapper onDrop={onDrop} status={s.status}>
                <Col>
                  {items
                    .filter((i) => i.status === s.status)
                    .map((i, idx) => (
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={s}
                      />
                    ))}
                </Col>
              </DropWrapper>
            </div>
          );
        })}
      </div>
    </DndProvider>
  );
};

export default Board;
