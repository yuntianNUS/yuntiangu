import React, { Component } from 'react'
import { Container, Sidebar, Sidenav, Content, Navbar, Nav, Divider, Placeholder, Footer, FlexboxGrid } from 'rsuite';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import NavToggle from './navbar';
import YunTianContent from './Aboutme';

function App() {
  // const [expand, setExpand] = React.useState(true);

  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={18}><Container>
            <YunTianContent></YunTianContent>
          </Container></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
        </FlexboxGrid>

      </Container>
      <Footer><Divider></Divider></Footer>
    </div>
  );
}

export default App;
/*{/* <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar> */
