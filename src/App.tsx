import React, { useEffect } from 'react';
import MainEditor from './components/MainEditor';
import { initSquares } from "./logic";

function App() {
    useEffect(() => {
        initSquares();
    }, []);

    return (
        <>
            <MainEditor />
        </>
    );
}

export default App;