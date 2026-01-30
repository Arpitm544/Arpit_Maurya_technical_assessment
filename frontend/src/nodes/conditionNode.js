// conditionNode.js

import { BaseNode } from './baseNode';

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={[
        { id: `${id}-true`, top: '33%' },
        { id: `${id}-false`, top: '67%' }
      ]}
    >
      <label className="node-label">
        Expression:
        <input 
          type="text" 
          className="node-input" 
          placeholder="e.g. x > 5" 
          defaultValue={data?.expression || ''}
        />
      </label>
    </BaseNode>
  );
};
