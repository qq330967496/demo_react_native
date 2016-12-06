# 安卓 react native版本
### 使用
> 初始化

```
react-native init XXX（项目名称）
```
    
> 启动（安卓）
```
$ android avd（打开安卓吗模拟器）
$ react-native run-android（运行安卓）
```

> 启动（IOS）

```
在Xcode打开 D:\data\myProject\demo\HelloWorld\ios\HelloWorld.xcodeproj
```


>安卓部分

```
$ adb devices（查看安卓设备）
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias
-keyalg RSA -keysize 2048 -validity 10000（签名）
```

## Android真机调试
> 在 Android 设备上打开 USB debugging 并连接上电脑启动调试。

> 在真机上运行的方法与在模拟器上运行一致，都是通过 react-native run-android 来安装并且运行你的 React Native 应用。
如果不是 Android 5.0+ (API 21) ，那么就没办法通过 adb reverse 进行调试，需要通过 WiFi 来连接上你的开发者服务器
让调试用电脑和你的手机必须处于相同的 WiFi 网络中下

> 打开震动菜单 (摇动设备)

> 前往 Dev Settings

> 选择 Debug server host for device

> 输入调试用电脑的局域网IP

> 点击 Reload JS


## 连接海马玩模拟器
```
adb connect 127.0.0.1:26944
```