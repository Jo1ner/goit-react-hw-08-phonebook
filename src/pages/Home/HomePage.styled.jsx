import styled from 'styled-components';
import img from '../../images/wallpaper-home.jpg';

export const HomePageStyle = styled.div`
  section {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 250px;
    padding-bottom: 250px;
    background-color: rgba(46, 47, 66, 0.5);
    background-image: url(${img});
  }

  h1 {
    color: #f1eaea;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
  }
`;
