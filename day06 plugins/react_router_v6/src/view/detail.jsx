import React from "react";
import {
  // useParams,
  // useMatch,
  // useSearchParams,
  useLocation,
} from "react-router-dom";
export default function Detail(props) {
  // params
  // const params = useParams();
  // const { id, title, content } = params;
  // const x =useMatch("/home/message/detail/:id/:title/:content")

  // Search
  // const [searchState, setSearch] = useSearchParams();
  // const { id, title, content } = searchState;
  // console.log(searchState.get("id"));

  //state
  const { state } = useLocation();
  console.log(state);
  const { id, title, content } = state;

  return (
    <div>
      1
      <h3>id: {id}</h3>
      <h3>title:{title}</h3>
      <h3>content:{content}</h3>
    </div>
  );
}
