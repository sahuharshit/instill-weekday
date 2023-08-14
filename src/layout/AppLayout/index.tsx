import { useState } from 'react';
import Sidebar from '@instill/components/Sidebar';
import Header from '@instill/components/Header';

import { Main, PageView, Wrapper } from './style';

const AppLayout = (props: { children?: JSX.Element }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Wrapper>
      <Sidebar open={openDrawer} toggle={setOpenDrawer} />
      <Main>
        <Header toggle={setOpenDrawer} />

        <PageView>{props.children}</PageView>
      </Main>
    </Wrapper>
  );
};

export default AppLayout;
