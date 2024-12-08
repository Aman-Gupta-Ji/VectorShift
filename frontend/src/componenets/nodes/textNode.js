// textNode.js
import { useCallback, useEffect, useState } from 'react';
import { BaseNode } from './baseNode';
import { styles } from '../../styling/styles';

export const TextNode = ({ id, data = {} }) => {
    const [dynamicInputs, setDynamicInputs] = useState([]);
    const initialState = {
        text: data?.text || '{{input}}'
    };

    const extractVariables = useCallback((text) => {
        const regex = /{{([^}]+)}}/g;
        const matches = [...text.matchAll(regex)];
        return [...new Set(matches.map(match => match[1].trim()))]
            .map((variable, index) => ({
                id: variable,
                label: variable
            }));
    }, []);

    useEffect(() => {
        const variables = extractVariables(data?.text || initialState.text);
        setDynamicInputs(variables);
    }, [data?.text, initialState.text, extractVariables]);

    const calculateWidth = (text) => {
        const lines = text.split('\n');
        const maxLineLength = Math.max(...lines.map(line => line.length));
        return Math.max(300, Math.min(600, maxLineLength * 8));
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
                    <div 
                        className="relative"
                        style={{ width: `${calculateWidth(state.text || '')}px` }}
                    >
                        <textarea
                            value={state.text ?? ''}
                            onChange={(e) => {
                                handleChange('text')(e);
                                const variables = extractVariables(e.target.value);
                                setDynamicInputs(variables);
                            }}
                            className={styles.form.textarea}
                            rows={Math.min(10, Math.max(3, (state.text?.split('\n').length || 1)))}
                        />
                    </div>
                    {dynamicInputs.length > 0 && (
                        <div className="text-xs text-purple-300/60">
                            Variables: {dynamicInputs.map(input => input.label).join(', ')}
                        </div>
                    )}
                </div>
            )}
        </BaseNode>
    );
};