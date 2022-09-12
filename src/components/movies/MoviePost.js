import { Flex, VStack, Text, Heading, chakra } from "@chakra-ui/react";
import "../../App.css";

const MusicPost = props => {
  const { postTitle, postDate, postText, postImage } = props;

  return (
    <Flex mt="5%" flexDir="column">
      <Flex flexDir="column" mb="9%">
        <Heading>{postTitle}</Heading>
        <Text fontSize="25px">{postDate}</Text>
      </Flex>
      <chakra.div w="80%" h="21%" mb="7%" mr="auto" ml="auto">
        <img className="post-image" src={postImage} alt=""></img>
      </chakra.div>

      <VStack spacing="3%" alignItems="flex-start">
        {postText && postText.map(x => <p className="post-text">{x}</p>)}
      </VStack>
    </Flex>
  );
};

export default MusicPost;
