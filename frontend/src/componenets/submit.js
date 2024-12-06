// submit.js
import { styles } from './../styling/styles';

export const SubmitButton = () => {
  return (
    <div className={styles.submit.container}>
      <button type="submit" className={styles.submit.button}>
        Submit
      </button>
    </div>
  );
};