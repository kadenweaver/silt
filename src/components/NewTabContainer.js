import { useEffect } from 'react'
import PostPreview from "./PostPreview";
import { Heading } from "@chakra-ui/react";

const NewTabContainer = props => {
  const { tabTitle, postTabPreviewsList } = props;
  useEffect(() => {
    window.scrollTo(0,0)
}, [])
  return (
    <>
      <Heading
        h={[20, 20, '85px', 115]}
        width="100%"
        mx="auto"
        mt="2.5%"
        mb="2%"
        bg="#3c4759"
        border="1px solid #3c4754"
        borderRadius="3px"
        color="white"
        fontSize={[45, 50]}
        fontWeight="light"
        textAlign='center'
        pt={[1, 1, 1, 6]}
      >
        {tabTitle}
      </Heading>

      {postTabPreviewsList &&
        postTabPreviewsList.map((previewContent, index )=> (
          <PostPreview
            key={`post-preview_${index}`}
            postType={previewContent.postType}
            previewKey={previewContent.previewKey}
            previewTitle={previewContent.previewTitle}
            previewImage={previewContent.previewImage}
            previewImageOffset={previewContent.previewImageOffset}
          />
        ))}
    </>
  );
};

export default NewTabContainer;
