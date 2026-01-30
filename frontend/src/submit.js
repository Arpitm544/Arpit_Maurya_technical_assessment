// submit.js

import { useStore } from './store';
import { useShallow } from 'zustand/react/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(
        useShallow((state) => ({
            nodes: state.nodes,
            edges: state.edges
        }))
    );

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('nodes', JSON.stringify(nodes));
        formData.append('edges', JSON.stringify(edges));

        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to parse pipeline');
            }

            const data = await response.json();
            

            alert(
                `Submission Successful!\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is Graph Acyclic (DAG)?: ${data.is_dag}`
            );
        } catch (error) {
            console.error('Error parsing pipeline:', error);
            alert('Error parsing pipeline. Check console for details.');
        }
    }

    return (
        <div className="submit-container">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Pipeline</button>
        </div>
    );
}
