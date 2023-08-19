const initvalue = 0;
const reducer = (preState = initvalue, action) => {
  const { type, data } = action;
  switch (type) {
    case "addplus":
      return preState + data;
    case "subtract":
      return preState - data;
    default:
      return preState;
  }
};
export default reducer;
