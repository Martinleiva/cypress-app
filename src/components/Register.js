import RegisterForm from './RegisterForm';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Login = () => {

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" style={{ marginBottom: '1.2rem' }}>Register</Typography>
        <RegisterForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" style={{ marginBottom: '1.2rem' }}>Disclaimer</Typography>
        <Typography component="p" id='first-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nibh at aliquam sodales, tortor erat ornare felis, vitae bibendum orci ante et tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </Typography>
        <br />
        <Typography component="p" id='second-p'>
          Curabitur at interdum libero.
          Aenean porttitor congue nisl. Fusce pretium est nibh, ut ornare mi bibendum a. Vestibulum pulvinar, sem sed posuere auctor, metus urna sagittis metus, a egestas neque tortor sit amet sem.
          </Typography>
        <img
          src='https://i.imgur.com/CievcE1.png'
          alt='dinosaur'
          style={{ width: '45%', margin: '0 2rem' }}
          id="dinosaur"
        />
        <img
          src='https://www.pikpng.com/pngl/b/35-353742_kawaii-cute-tumblr-rawr-dinosaur-art-png-kawaii.png'
          alt='dinosaur2'
          style={{ width: '25%', margin: '0 2rem' }}
          id="dinosaur2"
        />
      </Grid>
    </Grid>
  );
}

export default Login;