import { PipelineToolbar } from './componenets/toolbar';
import { PipelineUI } from './componenets/ui';
import { SubmitButton } from './componenets/submit';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
