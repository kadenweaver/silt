import {
  Flex,
  VStack,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import "../../App.css";
import { PostText } from "../PostText";

const MusicPost = props => {
  const { postTitle, postDate, playerLink, postText, postBonusVideo } = props;
  const headerColor = useColorModeValue('black', 'orange');
  return (
    <Flex mt={["25%", "5%"]} flexDir="column">
      <Flex flexDir="column" mb="9%">
        <Heading color={headerColor}>{postTitle}</Heading>
        <Text fontSize="90%" color={headerColor}>{postDate}</Text>
      </Flex>
      <Flex
        w="100%"
        mt="2%"
        justifyContent="center"
        mb="11%"
        display="flex"
      >
        <iframe
          src={playerLink}
          title={postTitle}
          width="300"
          height="352"
          allow="encrypted-media"
        ></iframe>
      </Flex>
      <VStack
        spacing={["5%", "3%"]}
        alignItems="flex-start"
        mb={postBonusVideo ? "11%" : undefined}
      >
        {postText &&
          postText.map((x, index) => (
            <PostText key={`text-${index}`} content={x} />
          ))}
      </VStack>
      {postBonusVideo && (
        <Flex w="100%" justifyContent="center">
          <iframe
            width="800"
            height="450"
            src={postBonusVideo}
            title={"YouTube"}
            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture"
          ></iframe>
        </Flex>
      )}
    </Flex>
  );
};

export default MusicPost;
