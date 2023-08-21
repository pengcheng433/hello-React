import { connect } from "react-redux";
import countUi from "../components/count";
import { createAsyncAddplus } from "../redux/action";
//默认接手state
function mapStateToProps(state) {
  return {
    count: state,
  };
}
//默认接收dispatch
function mapDispatchToProps(dispatch) {
  return {
    jia: (value) => {
      console.log(value);
      dispatch({ type: "ADDPLUS", data: value });
    },
    jian: (value) => {
      console.log(value);
      dispatch({ type: "SUBTRACT", data: value });
    },
    AsycJia: (value,time) => {
      dispatch(createAsyncAddplus(value, time));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(countUi);
