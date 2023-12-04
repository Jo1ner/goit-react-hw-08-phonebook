import styled from 'styled-components';

export const HomePageStyle = styled.div`
  section {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 250px;
    padding-bottom: 250px;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.5),
        rgba(46, 47, 66, 0.5)
      ),
      url(../../images/wallpaper.jpg);
  }

  h1 {
    font-size: 50px;
    font-weight: 600;
    text-align: center;
  }
`;
