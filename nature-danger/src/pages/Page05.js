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
    background: linear-gradient(90deg, #e53935 0%, #e35d5b 100%);
    color: #fff;
    font-weight: bold;
    margin-top: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(34,139,34,0.15);
    &:hover {
      background: linear-gradient(90deg, #e35d5b 0%, #e53935 100%);
    }
  }
`;

function Page05() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h3" style={{ color: '#e53935', fontWeight: 700, marginBottom: 16 }}>
        Wildlife Extinction
      </Typography>
      <Typography variant="body1" style={{ color: '#226622', fontSize: 18, marginBottom: 16 }}>
        One million species are at risk of extinction due to human activity. Extinction disrupts ecosystems and endangers our own survival.
      </Typography>
      <NatureButton onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </NatureButton>
      <Collapse in={showDetails}>
        <Card style={{ marginTop: 24, background: 'rgba(255,255,255,0.95)' }}>
          <CardContent>
            <Typography variant="body2" style={{ color: '#e53935', fontSize: 16 }}>
              Wildlife extinction leads to the collapse of food chains and loss of natural resources. Protecting wildlife is essential for a balanced planet.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      <NatureButton href="/page6" style={{ marginTop: 32 }}>
        Next: Ocean Acidification
      </NatureButton>
    </Section>
  );
}

export default Page05;