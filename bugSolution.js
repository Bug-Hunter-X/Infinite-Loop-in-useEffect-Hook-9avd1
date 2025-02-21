```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: use a callback for updating the state within useEffect
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect only runs once

  return <div>Count: {count}</div>;
}
```