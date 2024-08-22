import { ApolloServer, gql } from "apollo-server";

let tweets = [
    {
        id: "1",
        text: "First one.",
    },
    {
        id: "2",
        text: "second one.",
    },
];

let users = [
  {
    id: "1",
    firstName: "nico",
    lastName: "las",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

const typeDefs = gql`
  type User {
    id: ID!    
    firstName: String!
    lastName: String!
    """
    이것은 firstName과 lastName을 합쳐서 String으로 반환한다.
    """
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allMovies: [Movie]
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String!, userID: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float
    runtime: Float!
    genres: [String]
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
  }
`;

const resolver = {
    Query: {        
        allTweets(){
            return tweets;
        },
        tweet(root, {id}){            
            return tweets.find(tweet => tweet.id === id); // 나중에 이것은 데이터베이스나 프리즘에 관한 코드로 변경될 것이다.
        },
        allUsers() {
            console.log("allUsers called!");  
            return users;
        },
        allMovies() {
             return fetch("https://yts.mx/api/v2/list_movies.json").then((r) => r.json()).then((json) => json.data.movies);
        },
        movie(_, { id }) {
            return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((r) => r.json()).then((json) => json.data.movie);
    },
    },
    Mutation: {
        postTweet(_, { text, userID }){
            const newTweet = {
                id: tweets.length+1,
                text,
                userId,
            };
            tweets.push(newTweet); // 나중에 이것은 데이터베이스나 프리즘에 관한 코드로 변경될 것이다. 
            return newTweet; 
        },
        deleteTweet(_, {id}){
            const tweet = tweets.find(tweet => tweet.id===id);
            if(!tweet) return false; // find 테스트함수에 조건이 부합되지 않으면 undefined가 반환되고 이는 falsy값으로 if 조건이 true가 되어 전체 함수가 false를 반환하게 된다.
            tweets = tweets.filter((tweet)=>(tweet.id !== id));
            return true;
        },
        User: {
            fullName( {firstName, lastName} ){
                return `${firstName} ${lastName}`;
            }
        },
        Tweet: {
            author({userId}){
                return users.find((user)=>(user.id===userId));
            },
        },
    },
};

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
