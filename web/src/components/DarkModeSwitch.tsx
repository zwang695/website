import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Switch,
  useColorMode,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Tooltip label={`Switch to ${text} mode`}>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
      />
    </Tooltip>
  );
};
