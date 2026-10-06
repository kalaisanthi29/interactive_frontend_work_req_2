# Personal Preference Dashboard

Work Requirement 2 for Interactive Frontend.

This is a React app where the user can choose a theme and mood on the Settings page and see the selected preferences on the Preview page.

## Features

- Light and dark theme
- Three mood options: happy, calm and focused
- Settings and Preview pages
- Preferences are shared between the pages

## How to run the app

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Install the dependencies:

```bash
npm install
```

4. Start the app:

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

## Shared state and custom hook

The preferences are stored in a custom hook called `usePreferences`.

The hook uses one state object to store the selected theme and mood:

```js
{
  theme: "light",
  mood: "calm"
}
```

The `Layout` component uses the custom hook and shares the preferences with the other pages through React Router's Outlet context:

```jsx
<Outlet context={preferenceState} />
```

The Settings and Preview pages use `useOutletContext()` to access the shared preferences. This means that when a preference is changed on the Settings page, the Preview page can use the updated value.

## Technologies

- React
- React Router
- Vite
- CSS