import { NavLink, Outlet } from "react-router-dom";
import usePreferences from "../hooks/usePreferences";

function Layout() {
  const preferenceState = usePreferences();

  return (
    <div className={`app ${preferenceState.preferences.theme}`}>
      <header>
        <h1>Personal Preference Dashboard</h1>

        <nav>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/preview">Preview</NavLink>
        </nav>
      </header>

      <main>
        <Outlet context={preferenceState} />
      </main>
    </div>
  );
}

export default Layout;