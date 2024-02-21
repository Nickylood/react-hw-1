import { useState } from "react";
import { useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification";

const items = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getFeedBack = () => {
  const localStorage = window.localStorage.getItem("my-clicks");
  return localStorage !== null ? JSON.parse(localStorage) : items;
};

export default function App() {
  const [clicks, setClicks] = useState(getFeedBack);

  useEffect(() => {
    localStorage.setItem("my-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positeveFeetBack = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        PropUpdateFeedback={updateFeedback}
        propResetFeedback={resetFeedback}
        propTotalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          propClick={clicks}
          total={totalFeedback}
          positive={positeveFeetBack}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
