import { PipelineToolbar } from './componenets/toolbar';
import { PipelineUI } from './componenets/ui';
import { SubmitButton } from './componenets/submit';
import { styles } from './styling/styles';

function App() {
  return (
    <div className={styles.app.container}>
      <div className={styles.app.wrapper}>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
