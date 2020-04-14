import Link from '../components/link';
import * as React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../icons/Logo';
import Github from '../icons/Git';
import Search from '../components/search';
import { HeaderProps } from '../interfaces/Layout.interface';

type HeaderViewProps = {
  headerProps: HeaderProps;
};

const HeaderWrapper = styled.div`
  background: radial-gradient(
      37.86% 77.79% at 50% 100%,
      rgba(113, 128, 150, 0.25) 0%,
      rgba(113, 128, 150, 0) 100%
    ),
    linear-gradient(180deg, #1a202c 0%, #2d3748 100%),
    linear-gradient(180deg, #0d0f14 0%, rgba(27, 32, 43, 0) 100%), #2f3747;
  height: 150px;
  img {
    margin-bottom: 0;
  }
  padding: 30px 10px 24px;
  display: flex;
  justify-content: center;

  .container {
    width: 1110px;
  }

  .searchContainer {
    margin-top: 27px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: auto;
    padding: 24px 8px 8px;

    .container {
      width: 100%;
    }
  }
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 16px;
  }
`;

const Title = styled.span`
  font-size: 1.2rem;
  color: #f5f8fa;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  letter-spacing: -0.02em;
`;

const LogoContainer = styled.div`
  padding-right: 0.75rem;
`;

const SearchComponent = styled(Search)`
  position: absolute;
  top: 12px;
  left: 12px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  a {
    color: #cbd5e0 !important;
    font-weight: 600;
    &:hover,
    &:active,
    &:focus {
      color: #ffffff !important;
    }
  }

  margin: 0 10rem 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 3rem 0;
  }
`;

const DocsMobileButton = styled.div`
  background: #4a5568;
  box-shadow: 0px 4px 8px rgba(60, 45, 111, 0.1), 0px 1px 3px rgba(60, 45, 111, 0.15);
  border-radius: 5px;
  color: #cbd5e0;
  display: none;
  padding: 0 14px;
  height: 42px;
  margin-left: 8px;
  font-weight: 600;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const Header = ({ headerProps }: HeaderViewProps) => (
  <HeaderWrapper>
    <div className={'container'}>
      <HeaderNav>
        <div style={{ display: 'flex' }}>
          <Link
            to={headerProps.logoLink || '/'}
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <LogoContainer>
              <HeaderLogo style={{ height: '24px' }} />
            </LogoContainer>
            <Title>{headerProps.title}</Title>
          </Link>
        </div>
        <NavLinks>
          {headerProps.links.map((headerlink: any, index: number) => (
            <Link
              key={index}
              to={headerlink.link}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {headerlink.name}
            </Link>
          ))}
        </NavLinks>
        <Link
          to={'https://github.com/prisma'}
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Github style={{ height: '24px' }} />
        </Link>
      </HeaderNav>
      <div className="searchContainer">
        <SearchComponent />
        <DocsMobileButton>Docs</DocsMobileButton>
        {/* <Mobile */}
      </div>
    </div>
  </HeaderWrapper>
);

export default Header;
