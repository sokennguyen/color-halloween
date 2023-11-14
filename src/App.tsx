import React, { useEffect, useState } from 'react';
import MainEditor from './components/MainEditor';
import Navigation from './components/Navigation';
import { initSquares } from "./logic";
import './App.css'

function App() {
    const [selectedField,setSelectedField] = useState([])
    const [selectedColor,setSelectedColor] = useState()
    useEffect(() => {
        initSquares();
    }, []);

    return (
        <div className='main-container'>
            <Navigation setSelectedField = {setSelectedField}
                        selectedField = {selectedField}
                        selectedColor = {selectedColor}
                        setSelectedColor = {setSelectedColor}/>
            <MainEditor setSelectedField = {setSelectedField}
                        selectedField = {selectedField}/>
        </div>
    );
}

export default App;
