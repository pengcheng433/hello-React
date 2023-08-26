import React, { Component, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Button, Input } from "antd";
// 类式组件
// export default class index extends Component {
//   state = {
//     count: 0,
//   };

//   addCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   };
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({
//         count: state.count + 1,
//       }));
//     }, 1000);
//   }
//   shown = () => {
//     console.log(this.InputRef.input.value);
//   };
//   render() {
//     return (
//       <div>
//         <h2>使用HOOK页面</h2>
//         <div>当前求和{this.state.count}</div>
//         <Input ref={(e) => (this.InputRef = e)} />
//         <Button onClick={this.addCount}>加1</Button>
//         <Button onClick={this.unmount}>卸载组件</Button>
//         <Button onClick={this.shown}>点击按钮提示数据</Button>
//       </div>
//     );
//   }
// }

// 函数式组件
export default function Index() {
  // useState传入的为默认值  count为取值,setCount更新你给我的值
  const [count, setCount] = React.useState(0);

  const add = () => {
    // setCount(count + 1); //第一种写法
    setCount((count) => {
      //第二种写法
      return ++count;
    });
  };
  const [str, setStr] = React.useState("LPC");
  const changeName = () => {
    setStr("二蛋"); //第一种写法
  };

  useEffect(() => {
    const timer = setInterval(() => {
      //监听操作
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
    return () => {
      //组件卸载前操作
      //销毁
      clearInterval(timer);
    };
  }, []);

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  const inputEl = useRef(null);
  const shown = () => {
    console.log(inputEl.current.input.value);
  };
  return (
    <div>
      <h2>使用HOOK页面</h2>
      <div>当前求和{count}</div>
      <div>我的名字{str}</div>
      <Input ref={inputEl} />
      <Button onClick={add}>加1</Button>
      <Button onClick={changeName}>改名</Button>
      <Button onClick={unmount}>卸载</Button>
      <Button onClick={shown}>点击按钮提示数据</Button>
    </div>
  );
}
