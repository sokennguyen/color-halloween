import {Typography, Box, List, ListItem, createTheme, ThemeProvider, ListItemButton, ListItemText, Button} from '@mui/material'
import {yellow,red,blue,grey,orange} from '@mui/material/colors'
import {COLORS, FIELDS_VALUE} from '../assets/constants.js'

declare module '@mui/material/styles' {
    interface Palette {
        yellow: Palette['primary'];
        red: Palette['primary'];
        blue: Palette['primary'];
        grey: Palette['primary'];
        orange: Palette['primary'];
    }
  
    interface PaletteOptions {
        yellow?: PaletteOptions['primary'];
        red?: PaletteOptions['primary'];
        blue?: PaletteOptions['primary'];
        grey?: PaletteOptions['primary'];
        orange?: PaletteOptions['primary'];
    }
}
  
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        yellow: true;
        red: true;
        blue: true;
        grey: true;
        orange: true;
    }
}
  
const theme = createTheme({
    palette: {
        yellow: {main: yellow[500]}, 
        red: {main: red[500]}, 
        blue: {main: blue[500]}, 
        grey: {main: grey[500]}, 
        orange: {main: orange[500]}, 
    },
});
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
                const equation = document.querySelector(`#num${props.selectedField}`)!
                equation.style.fill='none';
                const bg = document.querySelector(`#bg${props.selectedField}`)!
                bg.style.fill=COLORS.find((color:any) => color.value === chosenColor).text
                bg.removeEventListener;
                props.setSelectedField([])
                props.setSelectedColor(null)
            }
        }
        else {
        }

    }
    
    
    return ( 
    <ThemeProvider theme={theme}>
    <Box sx={{display:"flex", 
                    flexDirection:'column',
                    alignItems:"center", 
                    justifyContent:'center',
                    }} 
                width='40vw'>
        <Typography sx={{ color:'#42021c', fontSize:'7vw', textAlign:'center', opacity:1, fontFamily:'Monospace', fontWeight:'700', marginBottom:'50px'}} > 
                        Color Halloween
        </Typography>
        <List>
                <ListItem key={'button yellow'}>
                    <Button variant='contained' color='yellow' sx={{fontSize:'9vw', width:'10vw', height:'6vw', margin:'15px'}} onClick={()=>HandleButtonClick(1)}>
                        <ListItemText 
                            primaryTypographyProps={{style: {color:'black'}}}
                            primary='1 = Yellow'/> 
                    </Button>
                </ListItem> 
                <ListItem key={'button red'}>
                    <Button variant='contained' color='red' sx={{fontSize:'9vw', width:'10vw', height:'6vw', margin:'15px'}} onClick={()=>HandleButtonClick(2)}>
                        <ListItemText 
                            primaryTypographyProps={{style: {color:'white'}}}
                            primary='2 = Red'/> 
                    </Button>
                </ListItem> 
                <ListItem key={'button blue'}>
                    <Button variant='contained' color='blue' sx={{fontSize:'9vw', width:'10vw', height:'6vw', margin:'15px'}} onClick={()=>HandleButtonClick(3)}>
                        <ListItemText 
                            primaryTypographyProps={{style: {color:'white'}}}
                            primary='3 = Blue'/> 
                    </Button>
                </ListItem> 
                <ListItem key={'button grey'}>
                    <Button variant='contained' color='grey' sx={{fontSize:'9vw', width:'10vw', height:'6vw', margin:'15px'}} onClick={()=>HandleButtonClick(4)}>
                        <ListItemText 
                            primaryTypographyProps={{style: {color:'black'}}}
                            primary='4 = Grey'/> 
                    </Button>
                </ListItem> 
                <ListItem key={'button orange'}>
                    <Button variant='contained' color='orange' sx={{fontSize:'9vw', width:'10vw', height:'6vw', margin:'15px'}} onClick={()=>HandleButtonClick(5)}>
                        <ListItemText 
                            primaryTypographyProps={{style: {color:'white'}}}
                            primary='5 = Orange'/> 
                    </Button>
                </ListItem> 
        </List>

    </Box>
    </ThemeProvider>
    )
}

export default Navigation
