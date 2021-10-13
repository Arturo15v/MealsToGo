import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestauratCard,
  RestauratCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  Address,
  Icon,
} from "./restaurant-info.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Pizza Hut",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "123 calle x",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestauratCard elevation={5}>
      <RestauratCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={15} height={15} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMP.</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestauratCard>
  );
};
//expo install react-native-svg
