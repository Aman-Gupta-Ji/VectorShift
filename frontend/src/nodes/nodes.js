// nodes.js
import { BaseNode } from './baseNode';

// Input Node
export const InputNode = ({ id, data }) => {
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
              value={state.name} 
              onChange={handleChange('name')} 
            />
          </label>
          <label>
            Type:
            <select 
              value={state.type} 
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

// LLM Node
export const LLMNode = ({ id, data }) => {
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

// Output Node
export const OutputNode = ({ id, data }) => {
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
              value={state.name} 
              onChange={handleChange('name')} 
            />
          </label>
          <label>
            Type:
            <select 
              value={state.type} 
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

// Text Node
export const TextNode = ({ id, data }) => {
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
            value={state.text} 
            onChange={handleChange('text')} 
          />
        </label>
      )}
    </BaseNode>
  );
};

// Update the nodeTypes object in ui.js:
export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};