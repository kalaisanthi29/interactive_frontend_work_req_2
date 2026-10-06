# Personal Preference Dashboard

Work Requirement 2 for Interactive Frontend.

This is a multi-page React application where users can choose personal display preferences and see the result on a separate preview page. The project uses React Router, Outlet context, and a custom hook.

## Features

- Settings page with two configurable preferences: theme and mood
- Light and dark themes
- Happy, calm, and focused moods
- Preview page that changes its message and styling based on the selected preferences
- Shared preference state across routes
- Responsive layout

## How to run the app

1. Clone or download this repository.
2. Open the project folder in a terminal.
3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown by Vite in your browser.

## Shared state and custom hook

The preference state is stored in a custom hook called `usePreferences`, located in `src/hooks/usePreferences.js`.

The hook stores the user's preferences in one structured state object:

```js
{
  theme: 'light',
  mood: 'calm'
}
```

It also provides an `updatePreference` function for changing individual values.

`Layout.jsx` calls the custom hook and passes the returned preference state to the child routes through React Router's `Outlet` context:

```jsx
<Outlet context={preferenceState} />
```

Both `Settings.jsx` and `Preview.jsx` access the shared state with `useOutletContext()`. Because the state lives in the parent layout, the selected preferences remain available when the user navigates between the two pages.

The interface updates immediately whenever a preference is changed.

## Routes

- `/settings` – choose theme and mood
- `/preview` – view the selected preferences

## Technologies

- React
- React Router
- Vite
- CSS
- Lucide React icons
