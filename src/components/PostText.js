import { Text, useColorModeValue } from "@chakra-ui/react";

// light mode background of app '#fffef5'
// light mode light color  '#a3b9cc'
// light mode button border color '#abbbcc'

export const PostText = props => {
  const textColor = useColorModeValue("black", '#abbbcc');
  const {content} = props
  return (
    <Text fontFamily="Cormorant Garamond" fontSize={["96%", "86%"]} color={textColor}>{content}</Text>
  );
};
