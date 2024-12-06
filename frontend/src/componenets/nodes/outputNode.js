// outputNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const OutputNode = ({ id, data = {} }) => {
    const initialState = {
        name: data?.outputName || id.replace('customOutput-', 'output_'),
        type: data?.outputType || 'Text'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Output"
            initialState={initialState}
            inputs={[{ id: 'value' }]}
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
                            <option value="File">Image</option>
                        </select>
                    </label>
                </>
            )}
        </BaseNode>
    );
};

OutputNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        outputName: PropTypes.string,
        outputType: PropTypes.string,
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};