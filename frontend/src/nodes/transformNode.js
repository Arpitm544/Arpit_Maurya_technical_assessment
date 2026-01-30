// transformNode.js

import { BaseNode } from './baseNode';

export const TransformNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Transform"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label className="node-label">
        Transform Script:
        <textarea 
          className="node-textarea" 
          placeholder="return input..." 
          defaultValue={data?.script || ''}
        />
      </label>
    </BaseNode>
  );
};
