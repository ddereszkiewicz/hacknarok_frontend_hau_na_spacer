import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PostDialog from "./PostDialog";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function Post({ post, photo }) {
  const classes = useStyles();
  const [openPost, setOpenPost] = React.useState(false);

  return (
    <>
      <Card className={classes.root} onClick={() => setOpenPost(true)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={photo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.dogId.dogName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.describePost}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {openPost ? (
        <PostDialog post={post} photo={photo} handleClose={() => setOpenPost(false)} />
      ) : null}
    </>
  );
}
