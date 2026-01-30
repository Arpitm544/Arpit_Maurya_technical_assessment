// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const textareaRef = useRef(null);
  const [nodeHeight, setNodeHeight] = useState(80);
  const storedText = data?.text || '{{input}}';
  const [currText, setCurrText] = useState(storedText);
  const updateNodeField = useStore((state) => state.updateNodeField);
  const isInitializedRef = useRef(false);

  // Initialize from store only once on mount
  useEffect(() => {
    if (!isInitializedRef.current && data?.text !== undefined) {
      setCurrText(data.text);
      isInitializedRef.current = true;
    }
  }, []);

  // Extract variables from text in format {{ variableName }}
  // Only allows valid JavaScript identifiers
  const extractVariables = (text) => {
    const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const variables = [];
    let match;
    while ((match = variablePattern.exec(text)) !== null) {
      variables.push(match[1]);
    }
    // Remove duplicates
    return [...new Set(variables)];
  };

  const variables = extractVariables(currText);

  // Auto-resize textarea and node
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${newHeight}px`;
      // Update node height (header + padding + textarea + spacing)
      setNodeHeight(Math.max(80, 50 + newHeight + 20));
    }
  }, [currText]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    updateNodeField(id, 'text', newText);
  };

  // Create input handles for each variable
  const inputHandles = variables.map((varName, index) => ({
    id: `${id}-${varName}`,
    top: variables.length === 1 ? '50%' : `${((index + 1) * 100) / (variables.length + 1)}%`
  }));

  // Calculate width based on content (reasonable growth)
  const calculatedWidth = Math.max(200, Math.min(400, currText.length * 7 + 60));

  return (
    <BaseNode
      id={id}
      title="Text"
      inputHandles={inputHandles}
      outputHandles={[{ id: `${id}-output` }]}
      style={{ width: 'auto', minWidth: '200px' }}
    >
      <label className="node-label">
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="node-textarea"
          rows={1}
          style={{ height: 'auto', minHeight: '40px' }}
        />
      </label>
    </BaseNode>
  );
}
