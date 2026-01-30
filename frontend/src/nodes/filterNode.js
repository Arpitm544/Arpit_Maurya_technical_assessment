// filterNode.js

import { BaseNode } from './baseNode';

export const FilterNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label className="node-label">
        Condition:
        <input 
          type="text" 
          className="node-input" 
          placeholder="e.g. data > 0" 
          defaultValue={data?.condition || ''}
        />
      </label>
    </BaseNode>
  );
};
