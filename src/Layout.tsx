import React, { Fragment } from 'react';
import { Footer, NavBar, BackToTop, SideBar } from './components';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => (
  <Fragment>
    <NavBar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;
