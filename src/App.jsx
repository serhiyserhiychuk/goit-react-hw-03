import Describtion from "./components/Describtion/Describtion";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback).feedback;
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify({ feedback }));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const persentage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Describtion />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        setFeedback={setFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          persentage={persentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
