// llmNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const LLMNode = ({ id, data = {} }) => {
    return (
        <BaseNode
            id={id}
            data={data}
            label="LLM"
            inputs={[
                { id: 'system', style: { top: '33.33%' } },
                { id: 'prompt', style: { top: '66.66%' } }
            ]}
            outputs={[{ id: 'response' }]}
        >
            {() => (
                <span>This is a LLM.</span>
            )}
        </BaseNode>
    );
};

LLMNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};