import React, { useState } from 'react';
import { Typography, Button, Collapse, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.div)`
  background: rgba(255,255,255,0.8);
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 700px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(34,139,34,0.13);
`;

const NatureButton = styled(Button)`
  && {
    background: linear-gradient(90deg, #f7971e 0%, #ffd200 100%);
    color: #fff;
    font-weight: bold;
    margin-top: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(34,139,34,0.15);
    &:hover {
      background: linear-gradient(90deg, #ffd200 0%, #f7971e 100%);
    }
  }
`;

function Page04() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h3" style={{ color: '#f7971e', fontWeight: 700, marginBottom: 16 }}>
        Climate Change
      </Typography>
      <Typography variant="body1" style={{ color: '#226622', fontSize: 18, marginBottom: 16 }}>
        Global temperatures are rising, causing extreme weather, melting ice, and rising sea levels. Climate change threatens all life on Earth.
      </Typography>
      <NatureButton onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </NatureButton>
      <Collapse in={showDetails}>
        <Card style={{ marginTop: 24, background: 'rgba(255,255,255,0.95)' }}>
          <CardContent>
            <Typography variant="body2" style={{ color: '#f7971e', fontSize: 16 }}>
              Climate change leads to more frequent natural disasters, food shortages, and loss of biodiversity. Immediate action is needed to reduce emissions and protect our future.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      <NatureButton href="/page5" style={{ marginTop: 32 }}>
        Next: Wildlife Extinction
      </NatureButton>
    </Section>
  );
}

export default Page04;