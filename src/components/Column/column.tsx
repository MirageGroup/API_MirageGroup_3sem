import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Item from '../Card/card'

// https://codesandbox.io/s/reverent-antonelli-6296o?file=/src/components/Item.tsx:74-116
// https://dev.to/imjoshellis/codealong-multi-column-drag-and-drop-in-react-3781

interface ColumnProps {
  col: {
    id: string;
    list: string[];
  };
}

const StyledColumn = styled("div", {
  padding: "24px 0",
  display: "flex",
  flexDirection: "column",
  marginTop: 8,

  h2: {
    margin: 0,
    padding: "0 16px"
  }
});

const StyledList = styled("div", {
  backgroundColor: "#ddd",
  borderRadius: 8,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  marginTop: 8
});

const Column: React.FC<ColumnProps> = (col: { list: any, id: any } ) => {
  return (
    <Droppable droppableId={col.id}>
      {(provided: { droppableProps: any; innerRef: any; placeholder: any; }) => (
        <StyledColumn>
          <h2>{id}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {col.list.map((text: any, index: any) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  );
};

export default Column;
