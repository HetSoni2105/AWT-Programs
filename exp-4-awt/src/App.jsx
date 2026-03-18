import React from "react";
import useWidth from "./useWidth";
function App() {
    const width = useWidth();
    return <h1>Window Width: {width}px</h1>;
}
export default App;