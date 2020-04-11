import React from "react";
import styled from "styled-components";

import Section from "../globals/Section";
import Title from "../globals/Title";
import { PrimaryButton } from "../globals/Button";

import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setLetterSpacing,
  media,
  setColor,
} from "../../styles";

const About = () => {
  return (
    <div>
      <Section>
        <AboutCenter>
          <div className="about-img">
            <img src={aboutImg} alt="about us" />
          </div>
          <div className="about-info">
            <Title title="about us" />
            <p>
              Exercitation quis cillum est sint magna sunt incididunt
              consectetur proident ea reprehenderit. Cillum consectetur
              exercitation quis quis mollit dolore do reprehenderit proident
              sint. Sunt ad id aliquip occaecat cupidatat enim nulla
              exercitation deserunt ex labore. Ipsum labore non nulla et aute
              sit ad mollit culpa ea quis. Deserunt culpa ea laboris ut ullamco
              enim id labore sit pariatur. Enim Lorem adipisicing nostrud aliqua
              et ipsum. Eu quis ut deserunt eiusmod nisi sunt incididunt nisi in
              esse sint reprehenderit ipsum. Magna dolor officia ex adipisicing.
              Sunt laboris duis exercitation ut Lorem sit cupidatat ad.
            </p>
            <PrimaryButton>read more</PrimaryButton>
          </div>
        </AboutCenter>
      </Section>
    </div>
  );
};

const AboutCenter = styled.div`
  max-width: 90vh;
  margin: 0 auto;
  padding: 0 ${setRem(60)};

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    margin: 30px auto 0 auto;

    p {
      ${setLetterSpacing(3)};
    }
  }

  ${media.desktop`
    max-width: 100vw;
    display: grid;
    gap: ${setRem(32)};
    grid-template-columns: repeat(2, 1fr);
    
    .about-info {
      margin: 0;
      p {
        margin-top: 0;
      }
    }
  `};
`;

export default About;
