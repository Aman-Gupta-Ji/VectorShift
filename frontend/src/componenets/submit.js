// frontend/src/components/submit.js
import { styles } from './../styling/styles';
import { useStore } from './store';
import { useState } from 'react';

export const SubmitButton = () => {
  // Get nodes and edges from the store
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      const pipelineData = {
        nodes: nodes,
        edges: edges
      };
      
      formData.append('pipeline', JSON.stringify(pipelineData));

      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit pipeline');
      }

      const data = await response.json();
      setResult(data);
      setShowAlert(true);
      
    } catch (error) {
      setResult({ error: error.message });
      setShowAlert(true);
    }
  };

  return (
    <>
      <div className={styles.submit.container}>
        <button 
          onClick={handleSubmit} 
          className={styles.submit.button}
        >
          Submit
        </button>
      </div>

      {/* Results Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/30 shadow-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-yellow-500 mb-4">Pipeline Analysis</h2>
            
            {result.error ? (
              <div className="text-red-400 mb-4">
                Error: {result.error}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-purple-900/40 rounded border border-purple-500/30">
                  <span className="text-gray-300">Total Nodes:</span>
                  <span className="text-white font-medium">{result.num_nodes}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-900/40 rounded border border-purple-500/30">
                  <span className="text-gray-300">Total Edges:</span>
                  <span className="text-white font-medium">{result.num_edges}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-900/40 rounded border border-purple-500/30">
                  <span className="text-gray-300">Valid DAG:</span>
                  <span className={`font-medium ${result.is_dag ? 'text-green-400' : 'text-red-400'}`}>
                    {result.is_dag ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setShowAlert(false)}
              className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};