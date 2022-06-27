import { musicPostPreviewList } from './MusicPostContent'
import TabContainer from "../TabContainer";

const MusicPostTable = (props) => {
    const { onClickMusicPost } = props

    return (
        <TabContainer 
          tabTitle='Music'
          postTabPreviewsList={musicPostPreviewList}
          onPreviewClick={onClickMusicPost}
        />
    )
}

export default MusicPostTable;
