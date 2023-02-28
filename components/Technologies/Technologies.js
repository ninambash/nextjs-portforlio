import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          
            JavaScript<br></br>
            React.js<br></br>
            NextJs<br></br>
            CSS

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
           
            NodeJs<br></br>
            MongoDB<br></br>
            PostgreSQL<br></br>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
       
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;