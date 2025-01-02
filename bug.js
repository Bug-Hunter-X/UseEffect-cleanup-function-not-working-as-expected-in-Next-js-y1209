```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>This is a sample Next.js app.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```