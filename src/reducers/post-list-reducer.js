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
    let newLikes = likes;
    newLikes ++;
    const newStateUpdate = { ...state, [id]: { ...state[id], likes: newLikes } };

  // const newStateUpdate = Object.assign({}, state, {
  //   [id]: Object.assign({}, state[id], {
  //     likes: likes
  //   }),
  // });
  return newStateUpdate;

  default:
    return state;
  }
};