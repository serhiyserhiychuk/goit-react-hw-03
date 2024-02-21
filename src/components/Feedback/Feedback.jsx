const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
  persentage,
}) => {
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {persentage + "%"}</p>
      </li>
    </ul>
  );
};

export default Feedback;
