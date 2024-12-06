// dataTransformNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const DataTransformNode = ({ id, data = {} }) => {
    const initialState = {
        inputFormat: data?.inputFormat || 'JSON',
        outputFormat: data?.outputFormat || 'CSV',
        schema: data?.schema || ''
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Data Transform"
            initialState={initialState}
            inputs={[{ id: 'input' }]}
            outputs={[{ id: 'output' }]}
            height={180}
        >
            {({ state, handleChange }) => (
                <div className="flex flex-col gap-2">
                    <label className="flex flex-col">
                        Input Format:
                        <select 
                            value={state.inputFormat}
                            onChange={handleChange('inputFormat')}
                            className="border rounded p-1"
                        >
                            <option value="JSON">JSON</option>
                            <option value="XML">XML</option>
                            <option value="CSV">CSV</option>
                            <option value="YAML">YAML</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Output Format:
                        <select 
                            value={state.outputFormat}
                            onChange={handleChange('outputFormat')}
                            className="border rounded p-1"
                        >
                            <option value="JSON">JSON</option>
                            <option value="XML">XML</option>
                            <option value="CSV">CSV</option>
                            <option value="YAML">YAML</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Schema:
                        <textarea 
                            value={state.schema}
                            onChange={handleChange('schema')}
                            className="border rounded p-1"
                            placeholder="Transform schema (optional)"
                            rows="2"
                        />
                    </label>
                </div>
            )}
        </BaseNode>
    );
};