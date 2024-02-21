import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, setFeedback }) => {
  return (
    <ul className={css.list}>
      <li>
        <button className={css.button} onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button
          className={css.button}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {Boolean(totalFeedback) && (
        <li>
          <button
            className={css.button}
            onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
