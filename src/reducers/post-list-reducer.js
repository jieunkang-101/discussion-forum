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
  


  default:
    return state;
  }
};