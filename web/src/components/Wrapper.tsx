import { Box, Container } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Container
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "80rem" : "60rem"}
      w="100%"
    >
      {children}
    </Container>
  );
};
