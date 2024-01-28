// components/DraggableItem.tsx
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface DraggableItemProps {
  item: YourItemType;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id.toString(),
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transform, border: '1px solid #ddd', margin: '8px', padding: '8px' }}
    >
      {item.name}
    </div>
  );
};

export default DraggableItem;
