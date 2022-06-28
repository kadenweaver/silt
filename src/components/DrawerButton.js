import React from "react";
import { Button, Icon } from "@chakra-ui/react";

export const DrawerButton = props => {
  const { buttonTitle, openTab, active, icon } = props;

  const buttonInactiveBG = "#a3b9cc";
  const buttonInactiveTextColor = "#3c4759";
  const buttonActiveBG = "#2f3847";
  const buttonActiveTextColor = "white";
  const buttonHoverBG = "#3c4759";
  const buttonHoverTextColor = "white";

  return (
    <Button
      onClick={openTab}
      w="100%"
      backgroundColor={active ? buttonActiveBG : buttonInactiveBG}
      color={active ? buttonActiveTextColor : buttonInactiveTextColor}
      _hover={
        active
          ? {
              // stops hover effect on selected button
              backgroundColor: buttonActiveBG,
              color: buttonActiveTextColor,
            }
          : {
              backgroundColor: buttonHoverBG,
              color: buttonHoverTextColor,
            }
      }
      mr="auto"
      ml="auto"
      mb="none"
      borderRadius="0"
      borderTop="2px solid #abbbcc"
      borderBottom="2px solid #abbbcc"
      leftIcon={<Icon as={icon} fontSize="20px" />}
    >
      {buttonTitle}
    </Button>
  );
};
