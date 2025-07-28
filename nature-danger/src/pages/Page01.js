import React, { useState } from 'react';
import { Button, Typography, Collapse, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Hero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background: rgba(255,255,255,0.7);
  border-radius: 24px;
  margin: 2rem auto;
  max-width: 700px;
  box-shadow: 0 8px 32px rgba(34,139,34,0.2);
`;

const NatureButton = styled(Button)`
  && {
    background: linear-gradient(90deg, #56ab2f 0%, #a8e063 100%);
    color: #fff;
    font-weight: bold;
    margin-top: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(34,139,34,0.15);
    &:hover {
      background: linear-gradient(90deg, #a8e063 0%, #56ab2f 100%);
    }
  }
`;

function Page01() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Hero
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h2" style={{ color: '#226622', fontWeight: 700, marginBottom: 16, textShadow: '0 2px 8px #a8e06355' }}>
        Nature's Warning
      </Typography>
      <Typography variant="h5" style={{ color: '#388e3c', marginBottom: 24 }}>
        Discover how dangerous nature can become if not treated well.
      </Typography>
      <NatureButton onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide Details' : 'Why Care?'}
      </NatureButton>
      <Collapse in={showDetails}>
        <Card style={{ marginTop: 24, background: 'rgba(255,255,255,0.95)' }}>
          <CardContent>
            <Typography variant="body1" style={{ color: '#226622', fontSize: 18 }}>
              When we neglect nature, we invite disasters: floods, wildfires, droughts, and the loss of precious wildlife. Our actions today shape the world of tomorrow. Explore the dangers and learn how we can protect our planet together.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      <NatureButton href="/page2" style={{ marginTop: 32 }}>
        Start Exploring
      </NatureButton>
    </Hero>
  );
}

export default Page01;