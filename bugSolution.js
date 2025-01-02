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

import React, {useEffect, useState} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component mounted');
    const cleanup = () => {
      console.log('Component unmounted');
    };
    return cleanup;
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```