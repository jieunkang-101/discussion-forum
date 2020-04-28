import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    author: 'Claire',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: 'magic',
    likes: 0,
    timeStamp: 'Tue Apr 28 2020 11:30:26 GMT-0700 (Pacific Daylight Time)',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { author, content, tags, likes, timeStamp, id } = postData;
    action = {
      type: 'ADD_POST',
      author: author,
      content: content,
      tags: tags,
      likes: likes,
      timeStamp: timeStamp,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        author: author,
        content: content,
        tags: tags,
        likes: likes,
        timeStamp: timeStamp,
        id: id
      }
    });
  });  

});