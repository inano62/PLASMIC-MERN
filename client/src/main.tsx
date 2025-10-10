import { createRoot } from "react-dom/client";

function App() {
    return (
        <div style={{padding: 24}}>
            <h1>MERN client ✅</h1>
            <p>これは Vite + React の最小画面です。</p>
        </div>
    );
}

createRoot(document.getElementById("root")!).render(<App />);
