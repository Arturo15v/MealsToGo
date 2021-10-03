import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size) => `${positions[position]}:${sizes[size]}`;

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
