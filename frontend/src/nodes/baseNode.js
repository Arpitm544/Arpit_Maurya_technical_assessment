// baseNode.js
// Reusable base component for all node types

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  title, 
  inputHandles = [], 
  outputHandles = [], 
  children,
  style = {}
}) => {
  return (
    <div className="custom-node" style={style}>
      {/* Input handles (left side) */}
      {inputHandles.map((handle, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id || `${id}-input-${index}`}
          style={{
            top: handle.top || `${((index + 1) * 100) / (inputHandles.length + 1)}%`,
            ...handle.style
          }}
          className="custom-handle"
        />
      ))}

      {/* Header/Title */}
      {title && (
        <div className="node-header">
          {title}
        </div>
      )}

      {/* Custom content */}
      <div className="node-body">
        {children}
      </div>

      {/* Output handles (right side) */}
      {outputHandles.map((handle, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id || `${id}-output-${index}`}
          style={{
            top: handle.top || `${((index + 1) * 100) / (outputHandles.length + 1)}%`,
            ...handle.style
          }}
          className="custom-handle"
        />
      ))}
    </div>
  );
};
