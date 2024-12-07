import { PipelineToolbar } from './componenets/toolbar';
import { PipelineUI } from './componenets/ui';
import { SubmitButton } from './componenets/submit';
import { styles } from './styling/styles';

function App() {
  return (
    <div className={styles.app.container}>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
