import React from 'react'
import { Container, Row, Col, Card, Button, CardHeader, CardBody,
  CardTitle, CardText,} from 'reactstrap';
import PostCreate from './post/PostCreate';
import Post from './post/Post'


export default function Home() {

  return (
    <Container className="mt-4">
      <Row>
        
        <Col md="12" lg="7" className="ml-auto ">
          {/* <Card>
            <CardHeader className="bg-white p-2">
              <Row className="ml-1">
                <Col className="align-self-center">
                <img src={require('../resources/signup-background.jpeg')} width="40" height="40" alt="..." className="rounded-circle mr-3" />
                <span>Pawan Jain</span>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
           

              
            </CardBody>
            <div class="input-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
          </Card> */}
          <PostCreate />
          <br />
          <Post />
          
        </Col>
        
        <Col lg="3" className="mr-auto d-none d-lg-block">
          <Card>
            <CardHeader className="bg-white">
              <Row>
                <Col xs="2" md="2" lg="3">
                <img src={require('../resources/signup-background.jpeg')} width="40" height="40" alt="..." class="rounded-circle" />
                </Col>
                <Col className="align-self-center">
                <CardText>Pawan Jain</CardText>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </CardBody>
            
            
            
          </Card>
        </Col>
    
     </Row>
    </Container>
  )
}
