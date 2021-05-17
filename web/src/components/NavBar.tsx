import {
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { GoPerson } from "react-icons/Go";
import { FaStickyNote } from "react-icons/fa";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex as="nav" zIndex={1} align="center" justify="center" p={4}>
      <HStack>
        <NextLink href="/">
          <Tooltip label="Home">
            <IconButton
              as={Link}
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              marginLeft="2"
              icon={<GoPerson />}
              aria-label="Home"
            />
          </Tooltip>
        </NextLink>
        <NextLink href="/">
          <Tooltip label="Notes">
            <IconButton
              as={Link}
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              marginLeft="2"
              icon={<FaStickyNote />}
              aria-label="Notes"
            />
          </Tooltip>
        </NextLink>
        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
};
