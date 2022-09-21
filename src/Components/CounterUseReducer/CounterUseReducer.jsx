import styles from "./index.module.scss";
import Button from "../Button";
import dettiSiciliani from "../../Assets/detti-siciliani";

import { useDispatch, useSelector } from "react-redux";

const Counter_useReducer = () => {
  const { color, index } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.Counter}>
      <div className={styles.Text}>
        <h1 style={{ color: color.value }}>
          {dettiSiciliani[index.value]?.detto}
        </h1>
        <p>{dettiSiciliani[index.value]?.traduzione}</p>
      </div>
      <div className={styles.Buttons}>
        <Button
          onBtnClick={() => dispatch({ type: "precedente" })}
          disabled={index.value === 0 && true}
          textContent="precedente"
        />
        <Button
          onBtnClick={() => dispatch({ type: "prossimo" })}
          disabled={index.value === dettiSiciliani.length - 1 && true}
          textContent="prossimo"
        />
        <Button
          onBtnClick={() => dispatch({ type: "reset" })}
          textContent="reset"
        />
        <Button
          onBtnClick={() =>
            color.value === "green"
              ? dispatch({ type: "colorchange", payload: "red" })
              : dispatch({
                  type: "colorchange",
                  payload: "green",
                })
          }
          textContent="colorchange"
        />
      </div>
    </div>
  );
};

export default Counter_useReducer;
