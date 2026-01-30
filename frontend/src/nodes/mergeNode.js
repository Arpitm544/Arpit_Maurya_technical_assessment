// mergeNode.js

import { BaseNode } from './baseNode';

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      inputHandles={[
        { id: `${id}-input1`, top: '33%' },
        { id: `${id}-input2`, top: '67%' }
      ]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label className="node-label">
        Type:
        <select className="node-select" defaultValue={data?.mergeType || 'concatenate'}>
           <option value="concatenate">Concatenate</option>
           <option value="union">Union</option>
           <option value="intersection">Intersection</option>
        </select>
      </label>
    </BaseNode>
  );
};
