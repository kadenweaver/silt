import { Flex, VStack, Text, Heading, chakra, useColorModeValue } from "@chakra-ui/react";
import "../../App.css";
import { PostText } from "../PostText";

const MusicPost = props => {
  const { postTitle, postDate, postText, postImage } = props;
  const headerColor = useColorModeValue('black', 'orange');

  return (
    <Flex mt={['25%', '5%']}flexDir="column">
      <Flex flexDir="column" mb="9%">
        <Heading color={headerColor}>{postTitle}</Heading>
        <Text fontSize="90%" color={headerColor}>{postDate}</Text>
      </Flex>
      <chakra.div w="80%" h="21%" mb="7%" mr="auto" ml="auto">
        <img className="post-image" src={postImage} alt=""></img>
      </chakra.div>

      <VStack spacing={['5%', '3%']} alignItems="flex-start">
        {postText && postText.map((x,index) => <PostText key={`text-${index}`} content={x} />
)}
      </VStack>
    </Flex>
  );
};

export default MusicPost;
