import { useState } from "react";

function usePreferences() {
  const [preferences, setPreferences] = useState({
    theme: "light",
    mood: "calm",
  });

  const updatePreference = (name, value) => {
    setPreferences((previousPreferences) => ({
      ...previousPreferences,
      [name]: value,
    }));
  };

  return {
    preferences,
    updatePreference,
  };
}

export default usePreferences;