import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Aspiring FullStack Engineer. Passionate to build things from scratch.
      </SectionText>
      <Button onClick={()=> window.location="https://abc.xyz/"}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;