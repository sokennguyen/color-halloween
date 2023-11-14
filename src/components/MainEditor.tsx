import {BLACK, BACKGROUNDS, NUMBERS, PICTURES} from '../assets/test/ghost-svg'
import {useState} from 'react'
const EditNum = ({numId}:{numId:string}) => {
    return <path fill="#000000"
            d={NUMBERS[numId].d}
            id={'num'+numId.toString()}
        />
}
const EditBg = ({bgId,setSelectedField,selectedField}
                :{bgId:number,setSelectedField:any,selectedField:any}) => {
    let fillColor = "#ffffff"
    if (selectedField.length > 0)
        if (selectedField[0] === bgId)
            fillColor = "#E8E8E8" 
    return <path fill={fillColor}
        d={BACKGROUNDS[bgId].d}
        id={'bg'+bgId.toString()}
        onClick={()=>{
            if (selectedField.length != 0)
                setSelectedField([bgId])
            else
                setSelectedField(selectedField.concat(bgId))
        }}
    />
}
const Picture = ({picId,isGhost}:{picId:number,isGhost:boolean}) => {
    const fillColor = isGhost ? "#000000" : "#ffffff"
    return <path fill={fillColor}
                d={PICTURES[picId]}
                id={picId.toString()}
            />
}
const MainEditor = ({selectedField,setSelectedField}:
                    {selectedField:any, setSelectedField:any}) => {
    const [finished,setFinished]=useState()
    return ( 
    <div style={{height:'100vh', width:'60vw'}}>
    <svg   id="svg1"
        style={{width:'100%', height:'100%'}}
        viewBox="0 0 648.48004 855.80261"
        xmlns="http://www.w3.org/2000/svg">
  
        <path stroke="#000000"
            d={BLACK}
            id="black"
        />
        {BACKGROUNDS.map((bg,index:number) =>
            <EditBg key={'bg'+index} bgId={index}
                    setSelectedField={setSelectedField}
                    selectedField={selectedField}
            /> 
        )}
        {selectedField.map((num,index:number) =>
            <EditNum key={'num'+num} numId={num}/> 
        )}
        {PICTURES.map((pic,index:number) => {
            if (index>1)
                return <Picture key={'pic'+index} isGhost={false} picId={index}/>
            else return <Picture key={'pic'+index} isGhost={true} picId={index}/>

        })}
        
    </svg>
 
    </div>
)}

export default MainEditor
