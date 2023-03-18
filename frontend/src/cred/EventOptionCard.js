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
  padding: 20px;
`;

const EventOptionCard = () => {
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
          <img
            src="https://www.iconbunny.com/icons/media/catalog/product/2/6/2622.13-party-decoration-icon-iconbunny.jpg"
            style={{ height: "110px", width: "130px" }}
          />
          <HorizontalSpacer n={1} />
          <div>
            <Tag
              colorConfig={{
                background: mainColors.yellow,
                color: colorPalette.popWhite[400],
              }}
            >
              Trending
            </Tag>
          </div>

          <HorizontalSpacer n={2} />
          <Button
            showArrow
            variant="primary"
            colorMode="light"
            kind="elevated"
            fullWidth={true}
          >
            Decoration
          </Button>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default EventOptionCard;
