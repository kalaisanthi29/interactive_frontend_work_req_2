import { useOutletContext } from "react-router-dom";

function Preview() {
  const { preferences } = useOutletContext();

  const moodContent = {
    happy: {
      emoji: "😊",
      title: "Feeling happy!",
      message: "Today is a good day to enjoy the little things.",
    },
    calm: {
      emoji: "🌿",
      title: "Feeling calm",
      message: "Take things one step at a time.",
    },
    focused: {
      emoji: "🎯",
      title: "Feeling focused",
      message: "Stay focused on what you want to achieve.",
    },
  };

  const currentMood = moodContent[preferences.mood];

  return (
    <section className="page">
      <h2>Preview</h2>
      <p>This preview reflects your selected preferences.</p>

      <div className="preview-card">
        <div className="mood-emoji">{currentMood.emoji}</div>

        <h3>{currentMood.title}</h3>

        <p>{currentMood.message}</p>

        <div className="preference-summary">
          <p>
            <strong>Theme:</strong> {preferences.theme}
          </p>
          <p>
            <strong>Mood:</strong> {preferences.mood}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Preview;