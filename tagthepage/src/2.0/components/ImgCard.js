import {Card,
        CardMedia,
        CardActionArea,
        CardActions,
        Button,
        CardContent,
        Typography,
} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import monstera from '../../images/monstera.png';
import calathea from '../../images/calathea.png'




const returnImage = (num) => {
    if (num === 1 ) return monstera
    else if (num === 2 ) return calathea
}

const returntext = (num) => {
    if (num === 1 ) return 'Monstera'
    else if (num === 2 ) return 'Calathea'
}


export default function ImgCard(props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: '345',
            background: props.bgColor
        },
        media: {
            height: '140',
        }
    })

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={returnImage(props.num)}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {returntext(props.num)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Schoene Pflanze
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Buy
                </Button>
            </CardActions>

        </Card>
    )

}