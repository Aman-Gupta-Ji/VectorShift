// baseNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { styles, getVariantStyles } from '../../styling/styles';

export const BaseNode = ({ 
  id,
  data,
  label,
  type = 'default',
  initialState = {},
  inputs = [],
  outputs = [],
  children
}) => {
  const [state, setState] = useState(initialState);

  const handleChange = (key) => (e) => {
      setState(prev => ({
          ...prev,
          [key]: e.target.value
      }));
      
      if (data.onChange) {
          data.onChange(key, e.target.value);
      }
  };

  const getHandlePosition = (index, total) => {
      // Distribute handles evenly along the left side
      const baseOffset = 70; // Start after the header
      const spacing = 25;  // Space between handles
      return baseOffset + (index * spacing);
  };

  return (
      <div className={getVariantStyles(styles.baseNode, 'container', type)}>
          <div className={getVariantStyles(styles.baseNode, 'header', type)}>
              <span className={getVariantStyles(styles.baseNode, 'label', type)}>
                  {label}
              </span>
          </div>

          {inputs.map((input, index) => (
              <div key={`input-container-${input.id}`} className="relative">
                  <Handle
                      type="target"
                      position={Position.Left}
                      id={`${id}-${input.id}`}
                      className={getVariantStyles(styles.baseNode, 'handle', type)}
                      style={{
                          top: `${getHandlePosition(index, inputs.length)}px`,
                          zIndex: 10
                      }}
                  />
              </div>
          ))}

          <div className={styles.baseNode.content}>
              {children && children({ state, handleChange })}
          </div>

          <div className="relative">
              <Handle
                  type="source"
                  position={Position.Right}
                  id={`${id}-output`}
                  className={getVariantStyles(styles.baseNode, 'handle', type)}
                  style={{
                      top: '50%',
                      zIndex: 10
                  }}
              />
          </div>
      </div>
  );
};