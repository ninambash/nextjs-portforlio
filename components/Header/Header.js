import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" passHref legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about" passHref legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>        
      <li>
        <a href="/images/Resume.pdf" download>
          <NavLink>Resume</NavLink>
        </a>
      </li>          
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ninambash">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ninambarack-dev/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
