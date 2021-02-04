import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    display: 'flex',
    justifyContent: "center",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}