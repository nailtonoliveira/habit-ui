import { styled } from '@material-ui/core/styles';
import MuiGrid from '@material-ui/core/Grid';
import MuiBox from '@material-ui/core/Box';
import background from '../../assets/background.png';

export const Background = styled('div')({
  minWidth: '100vw',
  minHeight: '100vh',
  background: `url(${background}) no-repeat fixed center`,
  backgroundSize: 'cover',
});

export const Header = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    margin: theme.spacing(1, 2),
  },
  [theme.breakpoints.only('sm')]: {
    margin: theme.spacing(2, 4),
  },
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(6, 12),
  },
}));

export const Root = styled(MuiGrid)({
  height: '100vh',
  background:
    'linear-gradient(to top, rgb(50,51,55) 40%, rgba(50,51,55,0.3) 90%)',
});

export const Logo = styled('img')({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
});
