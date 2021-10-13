import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { Search } from "../components/search.component";

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.terciary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -10px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 30%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  //console.log(isLoading);
  return (
    <SafeArea>
      <Search />

      <RestaurantListContainer>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingContainer>
        )}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            //console.log(item);
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
