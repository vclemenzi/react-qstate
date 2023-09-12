# Query State
Query State is a simple library that allows states to be saved in url parameters. The benefits can be various:

- Have the exactly same UI
  - A user can share the link on social and whoever clicks on it will have the same ui
  - Can be saved as a bookmark and will bring back to the same UI
- You can use the "back" button to go back through the states
- It can help search engine optimization
- and more...

## Installation
You can install it with your favorite package manger

```bash
npm install qstate
```

```bash
pnpm add qstate
```

```bash
yarn add qstate
```

```bash
bun add qstate
```

## Usage
Its use is very simple and familiar with the existing `useState` hook

```js
import { useQueryState } from "qstate";

function App() {
  const [count, setCount] = useQueryState("counter", 0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
