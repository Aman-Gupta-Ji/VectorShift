// textNode.js
import { useCallback, useEffect, useState } from 'react';
import { BaseNode } from './baseNode';
import { styles } from '../../styling/styles';

export const TextNode = ({ id, data = {} }) => {
    const [dynamicInputs, setDynamicInputs] = useState([]);
    const initialState = {
        text: data?.text || '{{input}}'
    };

    // Modified to keep all variable instances
    const extractVariables = useCallback((text) => {
        const regex = /{{([^}]+)}}/g;
        const matches = [...text.matchAll(regex)];
        // Map each match to its own input, keeping duplicates
        return matches.map((match, index) => ({
            id: `${match[1].trim()}-${index}`, // Add index to make unique IDs
            label: match[1].trim()
        })).filter(item => item.label);
    }, []);

    // Update dynamic inputs when text changes
    useEffect(() => {
        const variables = extractVariables(data?.text || initialState.text);
        setDynamicInputs(variables);
    }, [data?.text, initialState.text, extractVariables]);

    const handleTextChange = (handleChange) => (e) => {
        handleChange('text')(e);
        const variables = extractVariables(e.target.value);
        setDynamicInputs(variables);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            type="text"
            label="Text"
            initialState={initialState}
            inputs={dynamicInputs}
            outputs={[{ id: 'output' }]}
        >
            {({ state, handleChange }) => (
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Text:</span>
                    <textarea
                        value={state.text ?? ''}
                        onChange={handleTextChange(handleChange)}
                        className={`${styles.form.textarea}`}
                        rows={Math.min(8, Math.max(3, (state.text?.split('\n').length || 1)))}
                    />
                    {dynamicInputs.length > 0 && (
                        <div className="text-xs text-purple-300/60 mt-1">
                            Variables: {[...new Set(dynamicInputs.map(input => input.label))].join(', ')}
                        </div>
                    )}
                </div>
            )}
        </BaseNode>
    );
};
