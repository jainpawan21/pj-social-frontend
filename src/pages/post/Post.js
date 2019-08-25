import React, {useState} from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody,
  CardImg, InputGroup, Input } from 'reactstrap';

import HeartSolid from '../../components/HeartSolid';
import HeartRegular from '../../components/HeartRegular';
import CommentRegular from '../../components/CommentRegular'
export default function Post() {

  const [like, setLike] = useState(false)
  
  const handleLike = () => {
    setLike(!like)
  }
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <CardHeader className="bg-white p-2">
              <Row className="ml-1">
                <Col className="align-self-center">
                <img src={require('../../resources/signup-background.jpeg')} width="40" height="40" alt="..." className="rounded-circle mr-3" />
                <span>Pawan Jain</span>
                </Col>
              </Row>
            </CardHeader>
            <CardImg top src={require('../../resources/signup-background.jpeg')}></CardImg>
            <CardBody>
            <h6>With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            </h6>
              <span style={{width: 90, height: 25, display: 'flex', justifyContent: 'space-evenly'}} className="mt-4" >
                {like ? <HeartSolid onClick={handleLike} /> : <HeartRegular onClick={handleLike}/>}
                <CommentRegular />
              </span>
            </CardBody>
            <InputGroup >
              <Input placeholder="Add Comment" className="p-4"/>
              <div class="input-group-append">
              <button type="button" class="btn btn-primary">Post</button>
              </div>
            </InputGroup>
          </Card>
        </Col>
     </Row>
    </Container>
  )
}
