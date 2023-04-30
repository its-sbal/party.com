import React from "react";
import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
  Tag,
  Button,
} from "@cred/neopop-web/lib/components";
import {
  mainColors,
  colorPalette,
  colorGuide,
  fontNameSpaces,
  getButtonConfig,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 2px;
`;

const EventOptionCard = (props) => {
  return (
    <ElevatedCard
      backgroundColor="#AE275F"
      edgeColors={{
        bottom: "#5C1532",
        right: "#851E49",
      }}
      style={{
        width: "170px",
        height: "220px",
      }}
    >
      <ContentWrapper>
        <Column>
          <img src={props.image} style={{ height: "140px", width: "168px" }} />
          <HorizontalSpacer n={1} />

          <HorizontalSpacer n={2} />
          <Button
            showArrow
            variant="primary"
            colorMode="light"
            kind="elevated"
            fullWidth={true}
          >
            {props.title}
          </Button>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default EventOptionCard;
