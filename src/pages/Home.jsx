import React, { Component } from 'react';
import WebFont from 'webfontloader';
import styled from 'styled-components';

import { Button } from '../components/button';

import check from '../assets/images/check.svg';
import bless from '../assets/images/icon--bless.png';

WebFont.load({
  google: {
    families: ['Montserrat:300,500,600,800', 'sans-serif'],
  },
});

const LandingPage = styled('div')`
  max-width: 100vw;
  overflow: hidden;

  .section-title {
    display: block;
    font-size: 2rem;
    line-height: 2.3rem;
    margin: 0;
    margin-bottom: 10px;

    @media (min-width: 375px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    @media (min-width: 768px) {
      margin: 0 auto 16px;
      line-height: 3.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
      line-height: 4rem;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  .description {
    position: relative;
    display: block;
    color: #666;
    font-size: 0.875rem;
    line-height: 1.5rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 1.5rem;
      max-width: 340px;
      margin: 0 auto;
    }

    @media (min-width: 1024px) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  .section-subtitle {
    font-size: 1.125rem;
    font-weight: normal;
    line-height: 2rem;
    color: #666;
  }

  .section-description {
    font-size: 0.875rem;
    color: #666;
    font-weight: normal;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 2rem;
    }
  }

  .checked-list {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 22spx;
      line-height: 2rem;
    }

    @media (min-width: 1200px) {
      font-size: 22spx;
      line-height: 2rem;
    }

    li {
      padding-left: 24px;
      background: url(${check}) no-repeat left top 6px;
      margin-bottom: 16px;

      @media (min-width: 768px) {
        background-position: left top 9px;
      }
    }
  }

  button {
    border-radius: 4px;

    @media (min-width: 768px) {
      max-width: 312px;
    }
  }

  section {
    position: relative;
    padding: 40px 24px;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 33px;
    }

    @media (min-width: 1024px) {
      padding: 50px 8%;
    }
  }

  .icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    margin-right: 16px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    &-bless {
      background-image: url(${bless});
    }
  }
`;

class Landing extends Component {
  componentDidMount() {
    // Initializing appInsights Sequence number
    sessionStorage.Seq = 0;
  }

  render() {
    return (
      <LandingPage className="main-container fixed-button">
        <div className="teste">teste</div>
        <Button>teste</Button>
      </LandingPage>
    );
  }
}

export default Landing;
