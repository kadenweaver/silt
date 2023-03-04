import { DateTime } from 'luxon'
import { gamesPostPreviewList, gamesPostContentList } from '../games/GamesPostContent'
import { moviePostPreviewList, moviePostContentList } from '../movies/MoviePostContent'
import { musicPostPreviewList, musicPostContentList } from '../music/MusicPostContent'
import {soccerPreviewContentList, soccerPostContentList } from '../soccer/SoccerPostContent'



export const homePostPreviewList =  gamesPostPreviewList.concat(moviePostPreviewList).concat(musicPostPreviewList).concat(soccerPreviewContentList).sort((a,b) =>  DateTime.fromFormat(b.postDate, 'MMM dd, yyyy').toMillis() - DateTime.fromFormat(a.postDate, 'MMM dd, yyyy').toMillis())

export const homePostContentList =  gamesPostContentList.concat(moviePostContentList).concat(musicPostContentList).concat(soccerPostContentList).sort((a,b) => DateTime.fromFormat(b.postDate, 'MMM dd, yyyy').toMillis() - DateTime.fromFormat(a.postDate, 'MMM dd, yyyy').toMillis())
