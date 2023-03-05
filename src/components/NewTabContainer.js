import PostPreview from "./PostPreview";
import { chakra, Heading} from "@chakra-ui/react";

const NewTabContainer = props => {
  const { tabTitle, postTabPreviewsList } = props;
  return (
    <chakra.div mt="2%" width="100%" mr="auto" ml="auto">
      <chakra.div
        className="post-table-header"
        backgroundColor="#3c4759"
        border="1px solid #3c4754"
        textAlign="center"
        mb="2.5%"
        borderRadius="3px"
        color="white"
        h="100px"
        fontSize="50px"
      >
        <Heading mt="3.5" fontSize="50px" fontWeight="light">
          {tabTitle}
        </Heading>
      </chakra.div>

      {postTabPreviewsList &&
        postTabPreviewsList.map(previewContent => (
            <PostPreview
              postType={previewContent.postType}
              previewKey={previewContent.previewKey}
              previewTitle={previewContent.previewTitle}
              previewImage={previewContent.previewImage}
              previewImageOffset={previewContent.previewImageOffset}
            />
        ))}
    </chakra.div>
  );
};

export default NewTabContainer;
