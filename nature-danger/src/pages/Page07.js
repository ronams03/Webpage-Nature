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
    background: linear-gradient(90deg, #b2ff59 0%, #388e3c 100%);
    color: #fff;
    font-weight: bold;
    margin-top: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(34,139,34,0.15);
    &:hover {
      background: linear-gradient(90deg, #388e3c 0%, #b2ff59 100%);
    }
  }
`;

function Page07() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h3" style={{ color: '#388e3c', fontWeight: 700, marginBottom: 16 }}>
        Soil Erosion
      </Typography>
      <Typography variant="body1" style={{ color: '#226622', fontSize: 18, marginBottom: 16 }}>
        Soil erosion reduces agricultural productivity and leads to desertification. It is accelerated by deforestation and poor land management.
      </Typography>
      <NatureButton onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </NatureButton>
      <Collapse in={showDetails}>
        <Card style={{ marginTop: 24, background: 'rgba(255,255,255,0.95)' }}>
          <CardContent>
            <Typography variant="body2" style={{ color: '#388e3c', fontSize: 16 }}>
              Soil erosion leads to loss of fertile land, increased pollution, and sedimentation in rivers, affecting water quality and biodiversity.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      <NatureButton href="/page8" style={{ marginTop: 32 }}>
        Next: Desertification
      </NatureButton>
    </Section>
  );
}

export default Page07;