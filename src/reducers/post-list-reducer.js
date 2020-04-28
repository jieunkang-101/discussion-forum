export default (state = {}, action) => {
  const { id, author, content, tags, likes, timeStamp } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        id: id,
        author: author,
        content: content,
        tags: tags,
        likes: likes,
        timeStamp: timeStamp
      }
    });  
  
  case 'UPVOTE_POST':
    let likeUp = likes;
    likeUp ++;
    // const upvoteState = { ...state, [id]: { ...state[id], likes: likeUp } };
    const upvoteState = Object.assign({}, state, {
      [id]: Object.assign({}, state[id], {
        likes: likeUp
      }),
    });
    return upvoteState;

  case 'DOWNVOTE_POST':
    let likeDown = likes;
    likeDown --;
    const downvoteState = { ...state, [id]: { ...state[id], likes: likeDown } };  
    return downvoteState;

  default:
    return state;
  }
};