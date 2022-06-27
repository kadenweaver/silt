import React from 'react'
import { soccerPreviewContentList } from './SoccerPostContent'
import TabContainer from '../TabContainer'

const SoccerPostTable = (props) => {
    const {onClickSoccerPost} = props;

    return (
        <TabContainer 
            tabTitle='Soccer'
            postTabPreviewsList={soccerPreviewContentList}
            onPreviewClick={onClickSoccerPost}
        />
    )
}


export default SoccerPostTable;
