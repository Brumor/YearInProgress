export const textinput = (state = 'test', action) => {
  switch (action.type) {
    case 'CHANGE':
      return state = action.text;
    default:
      return state;
  }
}
