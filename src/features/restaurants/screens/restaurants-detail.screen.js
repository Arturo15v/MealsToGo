import React, { useState } from "react";
import { RestaurantInfo } from "../components/restaurant-info.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Huevos Rancheros" />
          <List.Item title="Molletes" />
          <List.Item title="Sincronizadas" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Huevos Rancheros" />
          <List.Item title="Molletes" />
          <List.Item title="Sincronizadas" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Huevos Rancheros" />
          <List.Item title="Molletes" />
          <List.Item title="Sincronizadas" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Huevos Rancheros" />
          <List.Item title="Molletes" />
          <List.Item title="Sincronizadas" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
