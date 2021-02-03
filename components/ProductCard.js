
import React from 'react';
import Image from "next/image"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px',
    width: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
}));

export const ProductCard = ({product, loading}) => {
  const classes = useStyles();


  return (<>
    {loading ? <div>Loading</div> : <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Image className={classes.img} alt="complex"  layout="fill" src={product.imageURLs[0]} loading="lazy" />

            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.productName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.brandName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {product.code}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{product.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>}
    
    </>
  );
}

