const initvalue = 0;
const reducer = (preState = initvalue, action) => {
  const { type, data } = action;
  switch (type) {
    case "ADDPLUS":
      return preState + data;
    case "SUBTRACT":
      return preState - data;
    default:
      return preState;
  }
};
export default reducer;
