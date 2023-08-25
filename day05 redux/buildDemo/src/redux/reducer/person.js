const initvalue = [];
const reducer = (preState = initvalue, action) => {
  const { type, data } = action;
  switch (type) {
    case "ADD_PERSON":
      //   return preState.push(data);
      return [...preState, data];
    case "POP_PERSON":
      const newarr = preState.slice(0, preState.length - 1);
      return [...newarr];
    default:
      return preState;
  }
};
export default reducer;
