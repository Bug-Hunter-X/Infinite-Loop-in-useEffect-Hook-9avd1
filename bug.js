```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting count directly leads to an infinite loop
    setCount(count + 1); 
  }, [count]); // Dependency on count creates the infinite loop

  return <div>Count: {count}</div>;
}
```