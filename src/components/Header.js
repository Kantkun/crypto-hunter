import { AppBar, Container, Toolbar, Typography, MenuItem, Select, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    Title: {
      flex: 1,
      color: 'gold',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  }))
  
const Header  = () => {
    const classes = useStyles()
    const history = useHistory()
    const { currency, setCurrency } = CryptoState()

    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        }
    })
    
    return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={() => history.push('/')} className={classes.Title} variant='h5'>
                        Crypto Hunter
                    </Typography>
                    <Select 
                        variant='outlined' 
                        style={{width:100,height:40,marginLeft:15,}} 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)}
                        >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'THB'}>THB</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
     </ThemeProvider>
    )
 }
 
 export default Header 