var index = 0
export const goals = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat({ key : index++, text : action.text});
    case 'DELETE':

      return state = state.filter( el => el.key !== action.key );
    default:
      return state;
  }
}
