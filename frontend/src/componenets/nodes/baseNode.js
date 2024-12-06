// baseNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { styles, getVariantStyles } from './../../styling/styles';

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

  return (
    <div className={getVariantStyles(styles.baseNode, 'container', type)}>
      <div className={getVariantStyles(styles.baseNode, 'header', type)}>
        <span className={getVariantStyles(styles.baseNode, 'label', type)}>
          {label}
        </span>
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={`input-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          className={getVariantStyles(styles.baseNode, 'handle', type)}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            ...input.style
          }}
        />
      ))}

      <div className={styles.baseNode.content}>
        {children && children({ state, handleChange })}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={`output-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          className={getVariantStyles(styles.baseNode, 'handle', type)}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            ...output.style
          }}
        />
      ))}
    </div>
  );
};
