const API_KEY = "AIzaSyB4ThsxxhRq8_JuxkFgthYOVL_DDke2wvw";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const COMMENTS_OBJ = [
  {
    name: "Xavier",
    commentTxt: "This video is so good",
    replies: [
      {
        name: "Christopher",
        commentTxt: "Agree With you",
        replies: [],
      },
    ],
  },
  {
    name: "Jacob",
    commentTxt: "Great Video",
    replies: [],
  },
  {
    name: "Sarah",
    commentTxt: "I watch this everyday",
    replies: [
      {
        name: "Christopher",
        commentTxt: "Agree With you",
        replies: [
          {
            name: "Xavier",
            commentTxt: "This video is so good",
            replies: [
              {
                name: "Christopher",
                commentTxt: "Agree With you",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
    {
    name: "Xavier",
    commentTxt: "This video is so good",
    replies: [
      {
        name: "Christopher",
        commentTxt: "Agree With you",
        replies: [],
      },
    ],
  },
  {
    name: "Jacob",
    commentTxt: "Great Video",
    replies: [],
  },
  {
    name: "Sarah",
    commentTxt: "I watch this everyday",
    replies: [
      {
        name: "Christopher",
        commentTxt: "Agree With you",
        replies: [
          {
            name: "Xavier",
            commentTxt: "This video is so good",
            replies: [
              {
                name: "Christopher",
                commentTxt: "Agree With you",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  }
];

