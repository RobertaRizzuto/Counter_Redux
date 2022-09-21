import styles from "./App.module.scss";
import CounterUseReducer from "./Components/CounterUseReducer";

function App() {
  return (
    <div className={styles.App}>
      <CounterUseReducer />
    </div>
  );
}

export default App;
