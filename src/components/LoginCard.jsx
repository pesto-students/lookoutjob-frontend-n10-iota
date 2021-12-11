import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Collapse } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:'20px',
  },
  media: {
    height: 240,
  },
  
});

export default function LoginCard(place) {
  const classes = useStyles();
  return (
    <Collapse in={place.checked} {...(place.checked ? {timeout:1000}:{})}  >
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          height="140"
          image={place.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {place.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {place.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Collapse>
  );
}
