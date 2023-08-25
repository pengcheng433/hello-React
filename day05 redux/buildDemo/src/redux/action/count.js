
export const createAddplus = (data) => ({ type: "ADDPLUS", data });

export const createSubtract = (data) => ({ type: "SUBTRACT", data });
// 异步asction 引入dispatch 提交中间件有安装import thunk from "redux-thunk"; 配合applyMiddleware

export const createAsyncAddplus = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
     return dispatch(createAddplus(data));
    }, time);
  };
};
