import React from 'react'
import { Container, Divider, Footer, FlexboxGrid } from 'rsuite';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
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