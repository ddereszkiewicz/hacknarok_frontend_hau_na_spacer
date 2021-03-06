import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
import AddDogForm from "./AddDogForm/AddDogForm";
import DogDialog from "./DogDialog";

const useStyles = makeStyles({
    root: {
        minWidth: "100%",
    },
    media: {
        height: 300,
    },
});
const Dog = ({ dog, photo }) => {
    const classes = useStyles();
    const [openPost, setOpenPost] = React.useState(false);

    return (
        <Grid
            item
            xs={12}
            md={5}
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >
            <Card className={classes.root} onClick={() => setOpenPost(true)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {dog.dogName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            {openPost ? (
                <DogDialog
                    dog={dog}
                    photo={photo}
                    handleClose={() => setOpenPost(false)}
                />
            ) : null}
        </Grid>
    );
};

export default Dog;
