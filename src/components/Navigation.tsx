import {Typography, Box, List, ListItem, createTheme, ThemeProvider, ListItemButton, ListItemText} from '@mui/material'
import {yellow,red,blue,green,orange} from '@mui/material/colors'
import {COLORS} from '../assets/constants'
interface NavigationProps {
    setSelectedField:any,
    selectedField:string[],
    selectedColor:string,
    setSelectedColor:any,
}
const Navigation = (props:NavigationProps) => {
    const colors = COLORS    
    const buttonTheme = createTheme({
        palette:{
            yellow:yellow,
            red:red,
            blue:blue,
            green:green,
            orange:orange,
        }
    })
    const HandleButtonClick = (chosenColor:string) => {
        props.setSelectedColor(chosenColor)
        if (props.selectedField.length!=0){
            //validate then
            const equation = document.
                                querySelector(`#num${props.selectedField}`)!
            equation.style.fill='none';
            const bg = document.querySelector(`#bg${props.selectedField}`)!
            bg.style.fill=chosenColor;
            bg.removeEventListener;
            props.setSelectedField([])
            props.setSelectedColor(null)
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
                    selected={color.text===props.selectedColor}
                    onClick={()=>HandleButtonClick(color.text)}
                    >
                        <ListItemText primary={color.value+' = '+color.text}/> 
                    </ListItemButton>
                </ListItem> 
            })}
        </List>

    </Box>
}

export default Navigation
