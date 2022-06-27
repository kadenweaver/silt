import React from 'react'
import MusicPost from './MusicPost'
import { musicPostContentList } from './MusicPostContent'

const SoccerPostsMapped = (props) => {
    const { musicPostsOpenLegend, closeMusicPost } = props

    return (
        <>
            {musicPostContentList && musicPostContentList.map( (x, index) =>
                musicPostsOpenLegend[index] &&
                    <MusicPost 
                        onClosePost={closeMusicPost} 
                        postTitle={x.postTitle}
                        postDate={x.postDate}
                        playerLink={x.playerLink}
                        postText={x.postText}
                        backNavPage='Music'
                    />
                
              )
            }
        </>
    )
}

export default SoccerPostsMapped
