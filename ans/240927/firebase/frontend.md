# Nwitter frontend

## 1. vite install

- $ npm i vite@latest
- $ npm i react-router-dom styled-components styled-reset
- $ npm i @types/styled-components -D

## 2. initial setting => hello react

```html /index.html
<div id='root'></div>
<script type='module' src='./src/main.tsx'></script>
```

```typescript /src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

```typescript /src/App.tsx
export default funcion App(){
    return <div>Hello React</div>;
};
```

## 3. router

```typescript \src\App.tsx
import {createBrowserRouter, routerProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ],
    }
]);

const GlobalStyles = createGlobalStyles`
    ${reset};
    body{
        background-color : black;
        color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`;

const App = function (){
    return (
        <>
            <GlobalStyles />
        </>
    )
}

export default App;
```

```typescript \src\routes\home.tsx

```

```typescript \src\routes\login.tsx

```

```typescript \src\routes\profile.tsx

```

```typescript \src\routes\create-account.tsx

```

## 4. loading page

```typescript /App.tsx

```

```typescript /components/loading-screen.tsx

```

## 5. firebase initialize

-
-

```typescript /src/firebase.ts

```
