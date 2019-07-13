import React from "react";
import { Card, Grid, Button, Icon, Header } from "semantic-ui-react";
import styled from "styled-components";

const ServicesContainer = (props) => {
  return (
    <Container>
      <OurServices as="h2">Our Services</OurServices>
      <Card.Group>
        <Grid columns="equal" style={{ width: "100%" }}>
          <Grid.Column>
            <StyledCard centered>
              <Card.Content>
                <Card.Header>Release of information</Card.Header>
                <Card.Meta />
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed adipiscing diam donec adipiscing tristique risus nec
                  feugiat in.
                </Card.Description>
              </Card.Content>
              <Button as={AnchorTag} href="#form" onClick={props.showForm} animated="fade">
                <Button.Content visible> Get a free quote </Button.Content>
                <Button.Content hidden>
                  <Icon name="mail" />
                </Button.Content>
              </Button>
            </StyledCard>
          </Grid.Column>
          <Grid.Column>
            <StyledCard centered>
              <Card.Content>
                <Card.Header>Matthew Harris</Card.Header>
                <Card.Meta />
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed adipiscing diam donec adipiscing tristique risus nec
                  feugiat in.
                </Card.Description>
              </Card.Content>
              <Button as={AnchorTag} href="#form" onClick={props.showForm} animated="fade">
                <Button.Content visible> Get a free quote </Button.Content>
                <Button.Content hidden>
                  <Icon name="mail" />
                </Button.Content>
              </Button>
            </StyledCard>
          </Grid.Column>
        </Grid>
      </Card.Group>
    </Container>
  );
};

const AnchorTag = styled.a``;

const StyledCard = styled(Card)`
  &&& {
    width: 500px;
    padding: 5%;
  }
`;

const Container = styled.div`
  margin-top: 3%;
  margin-bottom: 5%;
`;

const OurServices = styled(Header)`
  margin-bottom: 4%;
`;

export default ServicesContainer;
