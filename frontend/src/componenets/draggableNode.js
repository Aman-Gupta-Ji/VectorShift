// draggableNode.js
import { styles, getVariantStyles } from './../styling/styles';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={getVariantStyles(styles.draggableNode, 'base', type)}
      onDragStart={(e) => onDragStart(e, type)}
      draggable
    >
      <span className={getVariantStyles(styles.draggableNode, 'label', type)}>
        {label}
      </span>
    </div>
  );
};