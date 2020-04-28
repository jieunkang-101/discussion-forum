import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    id: 1,
    author: 'Claire',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: 'magic',
    likes: 5,
    timeStamp: 'Tue Apr 28 2020 11:30:26 GMT-0700 (Pacific Daylight Time)'
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { id, author, content, tags, likes, timeStamp } = postData;
    action = {
      type: 'ADD_POST',
      id: id,
      author: author,
      content: content,
      tags: tags,
      likes: likes,
      timeStamp: timeStamp
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        id: id,
        author: author,
        content: content,
        tags: tags,
        likes: likes,
        timeStamp: timeStamp
      }
    });
  });  

  test('Should successfully increase likes property of existing post data in masterPostList', () => {
    const { id, author, content, tags, likes, timeStamp } = postData;

    action = {
      type: 'ADD_POST',
      id: id,
      author: author,
      content: content,
      tags: tags,
      likes: likes,
      timeStamp: timeStamp
    };
    
    const newState = postListReducer({}, action);
    action = {
      type: 'UPVOTE_POST',
      id: 1,
      likes: likes
    }

    const newState2 = postListReducer(newState, action);

    expect(newState2).toEqual({
      [id] : {
        id: id,
        author: author,
        content: content,
        tags: tags,
        likes: 6,
        timeStamp: timeStamp
      }
    });
  });

  test('Should successfully decrease likes property of existing post data in masterPostList', () => {
    const { id, author, content, tags, likes, timeStamp } = postData;

    action = {
      type: 'ADD_POST',
      id: id,
      author: author,
      content: content,
      tags: tags,
      likes: likes,
      timeStamp: timeStamp
    };
    
    const newState = postListReducer({}, action);
    action = {
      type: 'DOWNVOTE_POST',
      id: 1,
      likes: likes
    }

    const newState2 = postListReducer(newState, action);

    expect(newState2).toEqual({
      [id] : {
        id: id,
        author: author,
        content: content,
        tags: tags,
        likes: 4,
        timeStamp: timeStamp
      }
    });
  });
});