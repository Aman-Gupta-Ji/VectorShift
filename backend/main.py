# backend/main.py
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from collections import defaultdict, deque
import uvicorn

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def check_is_dag(nodes, edges):
    """
    Check if graph is DAG using Kahn's algorithm.
    If we can perform topological sort, it's a DAG.
    If not all nodes are included in the sort, there's a cycle.
    """
    # Build adjacency list and in-degree count
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    # Initialize all nodes with 0 in-degree
    for node in nodes:
        in_degree[node['id']] = 0
    
    # Build the graph and count in-degrees
    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1
    
    # Queue nodes with 0 in-degree
    queue = deque([node_id for node_id in in_degree if in_degree[node_id] == 0])
    
    # Count nodes processed in topological sort
    nodes_processed = 0
    
    # Process the queue
    while queue:
        current = queue.popleft()
        nodes_processed += 1
        
        # Reduce in-degree of neighbors
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If we processed all nodes, it's a DAG
    return nodes_processed == len(nodes)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: str = Form(...)):
    try:
        pipeline_data = json.loads(pipeline)
        nodes = pipeline_data['nodes']
        edges = pipeline_data['edges']
        
        num_nodes = len(nodes)
        num_edges = len(edges)
        is_dag = check_is_dag(nodes, edges)
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': is_dag
        }
    except Exception as e:
        return {'error': str(e)}, 400

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)