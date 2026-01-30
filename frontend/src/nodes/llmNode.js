// llmNode.js

import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputHandles={[
        { id: `${id}-system`, top: '33%' },
        { id: `${id}-prompt`, top: '67%' }
      ]}
      outputHandles={[{ id: `${id}-response` }]}
    >
      <div style={{ fontSize: '12px', color: '#666' }}>
        This is a LLM.
      </div>
    </BaseNode>
  );
}
