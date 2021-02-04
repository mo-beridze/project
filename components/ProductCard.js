import Image from "next/image";
import Link from "next/link";
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
  title_link: {
    "&:hover": {
       color: "darkblue",
     }
  }
}));

export const ProductCard = ({ product }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Image
                alt="complex"
                layout="fill"
                src={product.imageURLs[0]}
                loading="lazy" 
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Link href={product.pdpURL}><a className={classes.title_link}>{product.productName}</a></Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.brandName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{product.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

