# VectorShift Pipeline Editor

A visual node-based pipeline editor built with React and FastAPI, featuring drag-and-drop nodes, dynamic connections, and real-time pipeline validation.

## Setup

### Backend (FastAPI)

1. **Install Python Dependencies**
```bash
cd backend
pip install fastapi uvicorn python-multipart
```

2. **Run Backend Server**
```bash
python main.py
```
Server will run at `http://localhost:8000`

### Frontend (React)

1. **Install Dependencies**
```bash
cd frontend
npm install
```

2. **Start Development Server**
```bash
npm start
```
Application will run at `http://localhost:3000`

## Features

- **Drag & Drop Nodes**: Create pipelines by dragging nodes from the toolbar
- **Dynamic Connections**: Connect nodes with animated edges
- **Text Node Variables**: Create dynamic inputs using {{variable}} syntax
- **Real-time Validation**: Automatic validation of connections and DAG structure
- **Modern UI**: Clean interface with Tailwind CSS styling

## Node Types

- **Input Node**: Starting point for data entry
- **LLM Node**: Language model processing node
- **Text Node**: Text manipulation with variable support
- **Message Node**: Message handling and formatting
- **Web Scraper**: Web content extraction
- **Image Processing**: Basic image operations
- **Notification**: System notifications
- **Data Transform**: Format conversion (JSON/XML/CSV)
- **Output Node**: Pipeline output endpoint

## Connection Rules

- Each input handle can receive only one connection
- Connections must go from output to input
- No self-connections allowed
- DAG structure must be maintained

## Usage

1. **Create Nodes**
   - Drag desired nodes from toolbar
   - Position them on the canvas

2. **Make Connections**
   - Click and drag from output handle to input handle
   - Valid connections will be created automatically

3. **Configure Nodes**
   - Set node-specific parameters
   - For Text nodes, use {{variable}} syntax for dynamic inputs

4. **Submit Pipeline**
   - Click Submit to analyze pipeline structure
   - View results in the popup modal

## Development Notes

- React 18+
- ReactFlow for node editor
- Zustand for state management
- Tailwind CSS for styling
- FastAPI backend with Python 3.8+