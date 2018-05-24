## 说明
 1. 练习 react redux router
 2. [阮一峰的react-redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
 3.  [vConsole-调试工具](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)
 4.  session 保持数据格式为对象
 5.  [react-fastclick](https://github.com/JakeSidSmith/react-fastclick)
## 问题
 1. sass 保存会报错。编辑器的问题，多保存几次，或者修改空白
 2. 如果有第三方库。比如 new MAap() 这个时候会报找不到，解决 const MAap=window.MAap 
### react-redux
 1. UI组件 components
    ```
     . 只负责UI的呈现，不带有任何业务逻辑
     . 没有状态（即不使用this.state这个变量）
     . 所以数据都有参数（this.props）提供
     . 不适用任何Redux的API
    ```
 2. 容器组件 containers
    ```
     . 负责管理数据和业务逻辑，不负责UI的呈现
     . 带有内部状态
     . 使用Redux的API
     . React-Redux 提供connect方法，用于从 UI 组件生成容器组件 
     . import { connect } from 'react-redux'; const VisibleTodoList = connect()(TodoList);
    ```
## 启动
 ```
  yarn install      初始化
  yarn start        启动
  yarn run build    打包
  yarn eject        打开webpack配置文件  谨慎：不可逆
 ```

