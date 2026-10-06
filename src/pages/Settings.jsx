import { useOutletContext } from "react-router-dom";

function Settings() {
  const { preferences, updatePreference } = useOutletContext();

  return (
    <section className="page">
      <h2>Settings</h2>
      <p>Choose your personal preferences.</p>

      <div className="settings-card">
        <h3>Theme</h3>

        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={preferences.theme === "light"}
            onChange={(event) =>
              updatePreference("theme", event.target.value)
            }
          />
          Light
        </label>

        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={preferences.theme === "dark"}
            onChange={(event) =>
              updatePreference("theme", event.target.value)
            }
          />
          Dark
        </label>
      </div>

      <div className="settings-card">
        <h3>Mood</h3>

        <label>
          <input
            type="radio"
            name="mood"
            value="happy"
            checked={preferences.mood === "happy"}
            onChange={(event) =>
              updatePreference("mood", event.target.value)
            }
          />
          Happy 😊
        </label>

        <label>
          <input
            type="radio"
            name="mood"
            value="calm"
            checked={preferences.mood === "calm"}
            onChange={(event) =>
              updatePreference("mood", event.target.value)
            }
          />
          Calm 🌿
        </label>

        <label>
          <input
            type="radio"
            name="mood"
            value="focused"
            checked={preferences.mood === "focused"}
            onChange={(event) =>
              updatePreference("mood", event.target.value)
            }
          />
          Focused 🎯
        </label>
      </div>
    </section>
  );
}

export default Settings;