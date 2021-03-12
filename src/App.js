import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import Register from './components/Register';
import Tour from 'reactour';
import { Button } from '@material-ui/core';

const steps = [
  {
    selector: '#name_form',
    content: 'Provide your First Name',
  },
  {
    selector: '#lastname_form',
    content: 'Provide your Last Name',
  },
  {
    selector: '#email_form',
    content: 'Provide your Email',
  },
  {
    selector: '#phone_form',
    content: 'Provide your Phone',
  },
  {
    selector: '.MuiFormControl-marginNormal',
    content: 'Provide your Date of Birth',
  },
  {
    selector: '#buttom_form',
    content: 'Finally, Register!',
  },
  {
    selector: '#first-p',
    content: 'Attention here!',
  },
  {
    selector: '#second-p',
    content: 'Attention here!',
  },
  {
    selector: '#dinosaur',
    content: 'A cute Dino',
  },
  {
    selector: '#dinosaur2',
    content: 'Another cute Dino',
  },
];


function App() {
  const [isTourOpen, setIsTourOpen] = useState(null);
  useEffect(() => {
    const visited = localStorage.getItem('first-time');
    console.log(visited);
    if (!visited) {
      setIsTourOpen(true);
      localStorage.setItem('first-time', true);
    } else {
      setIsTourOpen(false);
    }
  }, []);
  return (
    <Container style={{ marginTop: '3.5rem' }}>
      <Register />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        id="open_tour"
        onClick={() => setIsTourOpen(true)}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        Show me the Tour!
      </Button>
      {isTourOpen && (
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
        //lastStepNextButton={<Button variant="contained" color="primary">Done!</Button>}
        />
      )}
    </Container>
  );
}

export default App;
