import styled from 'styled-components';
// import MuiGrid from '@material-ui/core/Grid';
// import MuiBox from '@material-ui/core/Box';
import Button from '../../components/Button';
import background from '../../assets/background.png';

export const Background = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${background}) no-repeat fixed center;
  background-size: cover;
`;

export const Header = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 48px 96px;
  }
  @media (max-width: 1023px) {
    padding: 24px 48px;
  }
  @media (max-width: 480px) {
    padding: 8px 8px;
  }
`;

export const MButton = styled(Button)`
  color: #757b81;
`;

export const Root = styled.div`
  height: 100vh;
  background: linear-gradient(
    to top,
    rgb(50, 51, 55) 40%,
    rgba(50, 51, 55, 0.3) 90%
  );
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
`;
