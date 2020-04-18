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
                <Card.Header>Release of Information</Card.Header>
                <Card.Meta />
                <Card.Description>
                  Not only will we keep your facility fully HIPAA compliant, but we will also streamline the entire ROI process to better serve both your patients and requestors.
                  As well as offering totally free of charge onsite, full services ROI – we also offer remote and revenue share plans.  Ask us how we can save your facility labor and expenses by handling your medical records requests remotely.
                </Card.Description>
              </Card.Content>
              <Button as={AnchorTag} href="/#form" onClick={props.showForm} animated="fade">
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
                <Card.Header>Storage Services</Card.Header>
                <Card.Meta />
                <Card.Description>
                  In addition to our release of information services, we also offer paper chart storage services to hospitals and clinics.  Is your hospital or clinic closing?  We can store your paper charts and handle your medical records requests after your facility closes.
                  We have several storage warehouse locations across the United States, and will keep your facility compliant according to your states records retention policies.
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
