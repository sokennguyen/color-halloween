import {useEffect, createElement} from'react'
import svg from '../assets/test-svg.svg'
import Svg from '../assets/test-svg.svg?react'
const MainEditor = () => {
    let mainDiv:any
    useEffect (()=>{
        const createMainEditor = async () => {
            const holder = createElement('div')
            const result = await fetch(svg)
            const svgText = await result.text() 
            const parser = new DOMParser()
            const svgDoc = parser.parseFromString(svgText ,'image/svg+xml')
            const svgObject = svgDoc.querySelector('svg')!;
            const svgFields = svgObject.querySelector('g#Color')!.children

            Array.from(svgFields).forEach((field:any)=>{
                    field.onClick=()=>null
            })
            return holder
         }
         mainDiv = createMainEditor() 
    },[])
    const HandleFieldClick = () => {
    }
    return <>
        <Svg />
    </>
    
}
export default MainEditor
