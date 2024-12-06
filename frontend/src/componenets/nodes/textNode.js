// textNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const TextNode = ({ id, data = {} }) => {
    const initialState = {
        text: data?.text || '{{input}}'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Text"
            initialState={initialState}
            outputs={[{ id: 'output' }]}
        >
            {({ state, handleChange }) => (
                <label>
                    Text:
                    <input 
                        type="text" 
                        value={state.text ?? ''} 
                        onChange={handleChange('text')} 
                    />
                </label>
            )}
        </BaseNode>
    );
};

TextNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        text: PropTypes.string,
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};
