import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AppLogo from '../assets/app-logo.png';
import Footer from '../components/layout/Footer';
import { serviceAuthManager } from '../utils/helper';

const TermsCondition = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    serviceAuthManager('/terms-condition').then((res) => {
      if (res.data?.data) {
        setContent(res.data?.data?.content ?? '');
      }
    });
  }, []);

  return (
    <React.Fragment>
      <PolicyStyledWrapper className="max-w-4xl mx-auto text-center mt-10 px-5">
        <div>
          <img src={AppLogo} className="inline-block w-6/12 h-6/12 mb-10" />
        </div>
        <hr className="mb-10" />
        <h1 className="text-green-400 font-bold text-2xl">Terms and Condition</h1>
        <div className="mt-10 text-left text-base" dangerouslySetInnerHTML={{ __html: content }}></div>
      </PolicyStyledWrapper>
      <Footer />
    </React.Fragment>
  );
};

const PolicyStyledWrapper = styled.div`
  p {
    margin-top: 0.75rem;
  }

  h1,
  h2,
  h3 {
    margin-top: 1.25rem;
    font-size: 1.125rem;
    font-weight: 700;
  }

  ul {
    margin-left: 1.5rem;
    list-style-type: disc;
  }
`;

export default TermsCondition;
