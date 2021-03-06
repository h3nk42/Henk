import React from 'react';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    Hidden,
    IconButton, Toolbar,

} from '@material-ui/core'
import { ChevronRight, ChevronLeft } from '@material-ui/icons/';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'
import { useState } from 'react'




export default function Drawer(props) {
    const history  = useHistory()
    const [ open, changeStatus ] = useState(false)


    const handleClick = (num) => {
        window.scrollTo(0, 0)
        if (num === 0 ) {
            history.push('/')
        } else if (num === 1) {
            history.push('/Contact')
        }
        else if (num === 2 ) {
            history.push('/Projects')
        }
    }

    const useStyles =  makeStyles({
        drawer: {
            width: '140px',

        },
        paper: {
            width: '140px',
            background: props.color,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        buttonBackground: {
            background: props.color
        }
    })

    const classes = useStyles();


    return(
        <div>
        <Hidden smDown>
        <MUIDrawer variant='permanent' classes={{paper:classes.paper, root: classes.drawer}}>
            <List>
                {['Home', 'Contact', 'Projects'].map((text, index) => (
                    <ListItem button onClick={() => handleClick(index)} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </MUIDrawer>
        </Hidden>
            <div >
                <MUIDrawer variant='temporary' open={open} classes={{paper:classes.paper, root: classes.drawer}}>
                    <List>
                        {['Home', 'Contact', 'Projects'].map((text, index) => (
                            <ListItem button onClick={() =>  {handleClick(index)
                                changeStatus(!open) }} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        <ListItem>
                            <IconButton
                                onClick={() => changeStatus(!open)}
                            >
                                <ChevronLeft />
                            </IconButton>
                        </ListItem>
                    </List>
                </MUIDrawer>

            </div>


            <Hidden mdUp>
                <div style={{position:"fixed", top: '50%', }}>
                <IconButton
                    onClick={() => changeStatus(!open)}
                >
                    <ChevronRight />
                </IconButton>
                </div>
            </Hidden>
        </div>
    )
}

