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
    background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
    color: #fff;
    font-weight: bold;
    margin-top: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(34,139,34,0.15);
    &:hover {
      background: linear-gradient(90deg, #185a9d 0%, #43cea2 100%);
    }
  }
`;

function Page09() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h3" style={{ color: '#185a9d', fontWeight: 700, marginBottom: 16 }}>
        Overfishing
      </Typography>
      <Typography variant="body1" style={{ color: '#226622', fontSize: 18, marginBottom: 16 }}>
        Over 90% of the world’s fish stocks are fully exploited or overfished. Overfishing disrupts marine ecosystems and food security.
      </Typography>
      <NatureButton onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </NatureButton>
      <Collapse in={showDetails}>
        <Card style={{ marginTop: 24, background: 'rgba(255,255,255,0.95)' }}>
          <CardContent>
            <Typography variant="body2" style={{ color: '#185a9d', fontSize: 16 }}>
              Overfishing leads to the collapse of fish populations, loss of jobs, and hunger for millions who rely on seafood.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      <NatureButton href="/page10" style={{ marginTop: 32 }}>
        Next: Plastic Waste
      </NatureButton>
    </Section>
  );
}

export default Page09;