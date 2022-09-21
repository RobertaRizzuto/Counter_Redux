import styles from "./App.module.scss";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className={styles.App}>
      <Counter />
    </div>
  );
}

export default App;
