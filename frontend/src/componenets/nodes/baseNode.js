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
        if (total === 1) return 50;
        if (total === 2) return index === 0 ? 33 : 66;
        const spacing = 100 / (total + 1);
        return (index + 1) * spacing;
    };

    return (
        <div className={getVariantStyles(styles.baseNode, 'container', type)}>
            <div className={getVariantStyles(styles.baseNode, 'header', type)}>
                <span className={getVariantStyles(styles.baseNode, 'label', type)}>
                    {label}
                </span>
            </div>

            {/* Input Handles */}
            {inputs.map((input, index) => (
                <Handle
                    key={`input-${input.id}`}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${input.id}`}
                    className={getVariantStyles(styles.baseNode, 'handle', type)}
                    style={{
                        top: input.style?.top || `${getHandlePosition(index, inputs.length)}%`,
                        left: '-4px',
                        transform: 'translateX(-50%)',
                        cursor: 'pointer'
                    }}
                />
            ))}

            <div className={styles.baseNode.content}>
                {children && children({ state, handleChange })}
            </div>

            {/* Output Handles */}
            {outputs.map((output, index) => (
                <Handle
                    key={`output-${output.id}`}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${output.id}`}
                    className={getVariantStyles(styles.baseNode, 'handle', type)}
                    style={{
                        top: output.style?.top || `${getHandlePosition(index, outputs.length)}%`,
                        right: '-4px',
                        transform: 'translateX(50%)',
                        cursor: 'pointer'
                    }}
                />
            ))}
        </div>
    );
};