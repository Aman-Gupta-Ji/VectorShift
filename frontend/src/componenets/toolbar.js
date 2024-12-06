// toolbar.js
import { DraggableNode } from './draggableNode';
import { NODE_TYPES } from './nodes';
import { styles } from './../styling/styles';

export const PipelineToolbar = () => {
  return (
    <div className={styles.toolbar.container}>
      <div className={styles.toolbar.wrapper}>
        <h2 className={styles.toolbar.title}>Nodes</h2>
        <div className={styles.toolbar.nodesContainer}>
          {Object.values(NODE_TYPES).map(({ type, label }) => (
            <DraggableNode 
              key={type}
              type={type}
              label={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};