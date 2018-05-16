# CSMA-CD-Simulation
## 技术栈
Nodejs Express+Socket.io+Boostarp+Jquery
## CSMA/CD 介绍
> 载波侦听多路访问／碰撞检测（英语：Carrier Sense Multiple Access with Collision Detection，CSMA/CD）

> 此方案要求设备在发送帧的同时要对信道进行侦听，以确定是否发生碰撞，若在发送数据过程中检测到碰撞，则进行如下碰撞处理操作：

> 发送特殊阻塞信息并立即停止发送数据：特殊阻塞信息是连续几个字节的全1信号，此举意在强化碰撞，以使得其它设备能尽快检测到碰撞发生。
> 在固定时间（一开始是1 contention period times）内等待随机的时间，再次发送。
> 若依旧碰撞，则采用截断二进制指数避退算法进行发送。即十次之内停止前一次“固定时间”的两倍时间内随机再发送，十次后则停止前一次“固定时间”内随机再发送。尝试16次之后仍然失败则放弃传送。

## 如何运行

```
git clone git@github.com:arcosx/CSMA-CD-Simulation.git
cd CSMA-CD-Simulation
npm instll
node index.js
浏览器打开 一个至多个窗口（地址：http://localhost:3000/）
```

## 演示效果
![Kapture 2018-05-16 at 21.32.00](http://p0xjmrizh.bkt.clouddn.com/Kapture 2018-05-16 at 21.32.00.gif)




