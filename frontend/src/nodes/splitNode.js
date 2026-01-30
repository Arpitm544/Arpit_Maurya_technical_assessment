// splitNode.js

import { BaseNode } from './baseNode';

export const SplitNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Split"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={[
        { id: `${id}-output1`, top: '33%' },
        { id: `${id}-output2`, top: '67%' }
      ]}
    >
      <label className="node-label">
        Split Character:
        <input 
          type="text" 
          className="node-input" 
          placeholder="e.g. ," 
          defaultValue={data?.delimiter || ','}
        />
      </label>
    </BaseNode>
  );
};
