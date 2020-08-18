import React, {Component} from "react";
import '../App.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles} from "@material-ui/core/styles";


class NavDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setVisible: true,
            visible: true,
        }


    }

    returnColor() {
        if (this.props.scheme === 3) {
            return ['#DBBEA1','#DB7F67','#A37B73','#DB7F67', 'black']
        } else if (this.props.scheme === 2) {
            return ['#E7ECEF','#274C77','#6096BA','#274C77','#E7ECEF']
        } else {
            return  (['#FFAA00','#FF5400','#FF7900','#FF4800', 'black'] )
        }
    }

    makeStyles() {
        makeStyles({
            root: {
                fontSize: '1px',
            }
        })
    }

    render() {
        let classes = this.makeStyles()
        return(<div style={{background:this.returnColor()[1], maxWidth:'200px'}} className='h-full border textFont'>
                <List disablePadding dense >
                    <ListItem button>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Billing</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Settings</ListItemText>
                    </ListItem>
                </List>

            </div>
            )
            }
}

export default NavDrawer