// baseNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

const DefaultNodeContent = ({ label, children }) => (
  <div>
    <span>{label}</span>
    {children}
  </div>
);

export const BaseNode = ({ 
  id,
  data,
  label,
  initialState = {},
  inputs = [],
  outputs = [],
  children,
  className = '',
  width = 200,
  height = 80
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
    <div 
      style={{
        width,
        height,
        border: '1px solid black',
        padding: '10px',
        borderRadius: '4px'
      }}
      className={className}
    >
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            ...input.style
          }}
        />
      ))}

      {/* Content */}
      <DefaultNodeContent label={label}>
        {children && children({ state, handleChange })}
      </DefaultNodeContent>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            ...output.style
          }}
        />
      ))}
    </div>
  );
};