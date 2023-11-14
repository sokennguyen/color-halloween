import {Typography, Box, List, ListItem, createTheme, ThemeProvider, ListItemButton, ListItemText} from '@mui/material'
import {yellow,red,blue,green,orange} from '@mui/material/colors'
import {COLORS, FIELDS_VALUE} from '../assets/constants'
interface NavigationProps {
    setSelectedField:any,
    selectedField:string[],
    selectedColor:string,
    setSelectedColor:any,
}
const Navigation = (props:NavigationProps) => {
    const colors = COLORS   
    const HandleButtonClick = (chosenColor:number) => {
        props.setSelectedColor(chosenColor)
        if (props.selectedField.length!=0){
            //validate then
            if (props.selectedField.length === 1 &&
                FIELDS_VALUE[props.selectedField[0]] === chosenColor) 
            {
                const equation = document.
                    querySelector(`#num${props.selectedField}`)!
                equation.style.fill='none';
                const bg = document.querySelector(`#bg${props.selectedField}`)!
                bg.style.fill=COLORS.find(color => color.value === chosenColor)
                                .text
                bg.removeEventListener;
                props.setSelectedField([])
                props.setSelectedColor(null)
            }
        }
        else {
        }

    }
    return <Box sx={{display:"flex", 
                    flexDirection:'column',
                    alignItems:"center", 
                    justifyContent:'center',
                    }} 
                width='40vw'>
        <Typography sx={{ fontSize:'4rem', fontFamily:'Monospace' }} 
                    variant='h1'>
                        Color Halloween
        </Typography>
        <List>
            {colors.map((color,index:any) => {
                return <ListItem key={'color'+index}>
                    <ListItemButton
                    selected={color.value===props.selectedColor}
                    onClick={()=>HandleButtonClick(color.value)}
                    >
                        <ListItemText 
                            primaryTypographyProps={{style: {color:color.value}}}
                            primary={color.value+' = '+color.text}/> 
                    </ListItemButton>
                </ListItem> 
            })}
        </List>

    </Box>
}

export default Navigation
