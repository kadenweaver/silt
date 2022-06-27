import { Flex, VStack, Text, Heading } from '@chakra-ui/react';
import BackButton from "../BackButton"
import '../../App.css';


const MusicPost = (props) => {
    const { postTitle, postDate, playerLink, postText } = props

    return (
        <div>
            <BackButton 
                {...props}
            />
            <Flex flexDir='column' mb='9%'>
                <Heading>{postTitle}</Heading>
                <Text fontSize='25px'>{postDate}</Text>
            </Flex>
            <Flex w='100%' mt='2%' justifyContent='center' mb='11%' display='flex'>
                <iframe src={playerLink} title={postTitle} width="300" height="380"
                        frameBorder="0" allowTransparency="true" allow="encrypted-media">
                </iframe>
            </Flex>
            <VStack spacing='3%' alignItems='flex-start'>
                {postText && postText.map((x) => <p className='post-text'>{x}</p>)}
            </VStack>
        </div>
    )
}

export default MusicPost;


