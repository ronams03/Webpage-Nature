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
    background: linear-gradient(90deg, #8dc26f 0%, #76b852 100%);
    color: #fff;
    font-weight: bold;
    margin-top: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(34,139,34,0.15);
    &:hover {
      background: linear-gradient(90deg, #76b852 0%, #8dc26f 100%);
    }
  }
`;

function Page02() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h3" style={{ color: '#388e3c', fontWeight: 700, marginBottom: 16 }}>
        Deforestation
      </Typography>
      <Typography variant="body1" style={{ color: '#226622', fontSize: 18, marginBottom: 16 }}>
        Every year, 18 million acres of forest are lost. Deforestation leads to habitat loss, climate change, and soil erosion.
      </Typography>
      <NatureButton onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide Impact' : 'Show Impact'}
      </NatureButton>
      <Collapse in={showDetails}>
        <Card style={{ marginTop: 24, background: 'rgba(255,255,255,0.95)' }}>
          <CardContent>
            <Typography variant="body2" style={{ color: '#388e3c', fontSize: 16 }}>
              Deforestation disrupts the water cycle, increases greenhouse gases, and threatens countless species. Forests are vital for our planet's health.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      <NatureButton href="/page3" style={{ marginTop: 32 }}>
        Next: Pollution
      </NatureButton>
    </Section>
  );
}

export default Page02;