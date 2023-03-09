import React from "react";
import { Button, Icon, useColorModeValue } from "@chakra-ui/react";

export const DrawerButton = props => {
  const { buttonTitle, active, icon } = props;

  const buttonInactiveBG = useColorModeValue('#a3b9cc','#1f2428')
  const buttonInactiveTextColor = useColorModeValue('#3c4759', 'orange')
  const buttonActiveBG = useColorModeValue('#2f3847','#a3b9cc')
  const buttonActiveTextColor = useColorModeValue('white','#1f2428')
  const buttonHoverBG = useColorModeValue('#3c4759','#2f3847' )
  const buttonHoverTextColor = useColorModeValue('white','white' )
  
  const buttonBorderColor = useColorModeValue('#abbbcc','#21272b')
  const borderDef = `2px solid ${buttonBorderColor}`

  return (
    <Button
      w="100%"
      backgroundColor={active ? buttonActiveBG : buttonInactiveBG}
      color={active ? buttonActiveTextColor : buttonInactiveTextColor}
      _hover={
        active
          ? {
              // stops hover effect on active button
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
      borderY={borderDef}
      leftIcon={<Icon as={icon} fontSize="20px" />}
    >
      {buttonTitle}
    </Button>
  );
};
