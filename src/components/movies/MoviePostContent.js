import ghost from "../../pictures/ghost.png";

// NB for dates: USE the format MMM dd, yyyy
// this means use one of Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
// always use two digits even if the day is a single digit. Mar 2 => Mar 02

export const moviePostPreviewList = [
  {
    postType: "movies",
    postDate: "Sep 12, 2022",
    previewKey: 0,
    previewTitle: "Ghost in the Shell",
    previewImage: ghost,
    previewImageOffset: "15",
  },
];

export const moviePostContentList = [
  {
    postType: "movies",
    postTitle: "Ghost in the Shell",
    postDate: "Sep 12, 2022",
    postText: [""],
    postImage: ghost,
  },
];
/*
{
    postType: 'movie',
    postTitle: '',
    postDate: '',
    postText: 
    [
        "",
        "",
        "",
        ""
    ],

},

*/
