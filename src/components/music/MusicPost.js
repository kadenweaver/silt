import { Flex, VStack, Text, Heading } from "@chakra-ui/react";
import "../../App.css";

const MusicPost = props => {
  const { postTitle, postDate, playerLink, postText, postBonusVideo } = props;

  return (
    <Flex mt="5%" flexDir="column">
      <Flex flexDir="column" mb="9%">
        <Heading fontSize="40">{postTitle}</Heading>
        <Text fontSize="25px">{postDate}</Text>
      </Flex>
      <Flex w="100%" mt="2%" justifyContent="center" mb="11%" display="flex">
        <iframe
          src={playerLink}
          title={postTitle}
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Flex>
      <VStack
        spacing="3%"
        alignItems="flex-start"
        mb={postBonusVideo ? "11%" : undefined}
      >
        {postText && postText.map(x => <p className="post-text">{x}</p>)}
      </VStack>
      {postBonusVideo && (
        <Flex w="100%" justifyContent="center">
          <iframe
            width="800"
            height="450"
            src={postBonusVideo}
            title={"YouTube"}
            frameborder="0"
            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture"
            allowfullscreen={true}
          ></iframe>
        </Flex>
      )}
    </Flex>
  );
};

export default MusicPost;
