# react native框架
## 初始化（安卓、IOS通用）

```
react-native init {yourAppName}
```

## 启动

### 安卓
```
$ react-native run-android
```

### IOS

```
在Xcode打开 \{yourAppName}\ios\{yourAppName}.xcodeproj
```

## 常用命令

### 安卓

```
//打开安卓模拟器列表
$ android avd 
//查看安卓设备状态
$ adb devices 
//连接海马玩模拟器
$ adb connect 127.0.0.1:26944
//后台日志
$ react-native log-android
//签名
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias
-keyalg RSA -keysize 2048 -validity 10000


```

### IOS
```
//后台日志
$ react-native log-ios
```


## 调试

### 安卓

#### 真机调试

1. 在 Android 设备上打开 USB debugging 并连接上电脑启动调试。
2. 在真机上运行的方法与在模拟器上运行一致，都是通过 react-native run-android 来安装并且运行你的 React Native 应用。
如果不是 Android 5.0+ (API 21) ，那么就没办法通过 adb reverse 进行调试，需要通过 WiFi 来连接上你的开发者服务器
让调试用电脑和你的手机必须处于相同的 WiFi 网络中下
3. 打开震动菜单 (摇动设备)
4. 前往 Dev Settings
5. 选择 Debug server host for device
6. 输入调试用电脑的局域网IP
7. 返回，摇动设备，点击 Reload JS


#### 在Android上使用[Stetho](http://facebook.github.io/stetho/)来调试
1. 在android/app/build.gradle文件中的dependency加入：
```js
compile 'com.facebook.stetho:stetho:1.3.1'
compile 'com.facebook.stetho:stetho-okhttp3:1.3.1'
```

2. 在android/app/src/main/java/com/{yourAppName}/MainApplication.java文件中添加：
```java
//引用
import com.facebook.react.modules.network.ReactCookieJarContainer;
import com.facebook.stetho.Stetho;
import okhttp3.OkHttpClient;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.stetho.okhttp3.StethoInterceptor;
import java.util.concurrent.TimeUnit;
```
```java
//覆盖父类onCreate方法，如果已存在，则在该方法内加入
@Override
public void onCreate() {
      super.onCreate();
      Stetho.initializeWithDefaults(this);
      OkHttpClient client = new OkHttpClient.Builder()
      .connectTimeout(0, TimeUnit.MILLISECONDS)
      .readTimeout(0, TimeUnit.MILLISECONDS)
      .writeTimeout(0, TimeUnit.MILLISECONDS)
      .cookieJar(new ReactCookieJarContainer())
      .addNetworkInterceptor(new StethoInterceptor())
      .build();
      OkHttpClientProvider.replaceOkHttpClient(client);
}
```
3. 运行react-native run-android
4. 打开一个新的Chrome选项卡，在地址栏中输入[chrome://inspect](chrome://inspect)并回车。在页面中选择'Inspect device' （标有"Powered by Stetho"字样）。

#### 使用hot load实现代码同步到app上
1. 打开摇晃菜单（在app页面摇晃手机）
2. 选择Enable Hot Loading
3. 修改代码测试是否可以同步更新

### IOS
> 待补充

## 常见问题解决方案
### 安卓
> run-android的时候出现outDexFolder must be a folder

1. 关掉React Packager窗口
2. 重新执行命令 $ react-native run-android

> 国产手机真机调试出现无法安装app的的情况

1. 打开android/build.gradle文件
2. 修改gradle:1.3.1版本为gradle:1.2.3（1.3.1版本的gradle对国产安卓机兼容性不好）
3. 执行打包

### IOS
> 待补充






















