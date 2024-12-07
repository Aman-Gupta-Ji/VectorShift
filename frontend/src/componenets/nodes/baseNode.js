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
    // Distribute handles evenly in the content area
    const baseOffset = 65;
    const spacing = 25;
    return baseOffset + (index * spacing);
  };

return (
    <div className={`${getVariantStyles(styles.baseNode, 'container', type)} transition-all duration-200`}>
        <div className={getVariantStyles(styles.baseNode, 'header', type)}>
            <span className={getVariantStyles(styles.baseNode, 'label', type)}>
                {label}
            </span>
        </div>

        {inputs.map((input, index) => (
            <div key={`input-container-${input.id}`} className="absolute left-0">
                <Handle
                    type="target"
                    position={Position.Left}
                    id={`${id}-${input.id}`}
                    className={getVariantStyles(styles.baseNode, 'handle', type)}
                    style={{
                        top: `${getHandlePosition(index, inputs.length)}px`,
                        left: '-7px'
                    }}
                />
            </div>
        ))}

        <div className={styles.baseNode.content}>
            {children && children({ state, handleChange })}
        </div>

        <div className="absolute right-0">
            {outputs.map((output, index) => (
                <Handle
                    key={`output-${output.id}`}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${output.id}`}
                    className={getVariantStyles(styles.baseNode, 'handle', type)}
                    style={{
                        top: '50%',
                        right: '-7px'
                    }}
                />
            ))}
        </div>
    </div>
);
};