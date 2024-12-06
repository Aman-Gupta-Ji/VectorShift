// inputNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const InputNode = ({ id, data = {} }) => {
    const initialState = {
        name: data?.inputName || id.replace('customInput-', 'input_'),
        type: data?.inputType || 'Text'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Input"
            initialState={initialState}
            outputs={[{ id: 'value' }]}
        >
            {({ state, handleChange }) => (
                <>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={state.name ?? ''} 
                            onChange={handleChange('name')} 
                        />
                    </label>
                    <label>
                        Type:
                        <select 
                            value={state.type ?? 'Text'} 
                            onChange={handleChange('type')}
                        >
                            <option value="Text">Text</option>
                            <option value="File">File</option>
                        </select>
                    </label>
                </>
            )}
        </BaseNode>
    );
};

InputNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        inputName: PropTypes.string,
        inputType: PropTypes.string,
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};
