## 实战：用node写一个基于控制台的todo工具

[Github仓库链接](https://github.com/wusili/node-todo-2)

[Gitee仓库链接](https://gitee.com/wu-sili/node-todo-2)

### 需求

#### 功能

1. 可以列出所有的todo
2. 可以新增todo
3. 可以编辑todo
4. 可以删除todo
5. 可以标记todo为已完成、未完成

#### 命令

t add 任务名

t clear

#### 效果

```sh
$ node cli
? 请选择你想操作的任务? 
  退出
> 创建任务

$ node cli
? 请选择你想操作的任务? 创建任务
? 输入任务标题 买可乐
创建成功

$ node cli
? 请选择你想操作的任务? 
  退出
> [_] 1 买可乐
  创建任务
  
$ node cli
? 请选择你想操作的任务? [_] 1 买可乐
? 请选择操作 
  退出       
> 已完成     
  未完成     
  改标题     
  删除 
  
$ node cli 
? 请选择你想操作的任务? (Use arrow keys)
> 退出
  [√] 1 买可乐
  创建任务
```

**安装依赖**

```sh
$ yarn add commander@3.0.2
$ yarn add inquirer@8.0.0
```

