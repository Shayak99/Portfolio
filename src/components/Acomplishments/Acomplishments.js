import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { name: 'Data Science', text: 'Certification on Data Science from Internshala'},
  { name: 'AI', text: 'Certification on General Components of AI from University of Helsinki'},
  { name: 'Best GENC ', text: 'Best GENC Associate Award received by Home Manager while employed in Cognizant'}
 
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Person Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.name}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
