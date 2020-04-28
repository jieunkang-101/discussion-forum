export default (state = {}, action) => {
  const { author, content, tags, likes, timeStamp, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        author: author,
        content: content,
        tags: tags,
        likes: likes,
        timeStamp: timeStamp,
        id: id
      }
    });  
  
  case 'UPVOTE_POST':
    let likeUp = likes;
    likeUp ++;
    const upvoteState = { ...state, [id]: { ...state[id], likes: likeUp } };
  // const newStateUpdate = Object.assign({}, state, {
  //   [id]: Object.assign({}, state[id], {
  //     likes: likes
  //   }),
  // });
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