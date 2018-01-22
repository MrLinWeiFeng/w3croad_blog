# 自己搭建codepush热更新服务

## 增加codepush功能

### android版本

1. 在`android/local.properties`中保存`codepush`的key值。

```
// 查看key值
code-push deployment ls <appName> -k

// 在local.properties中添加key
code_push_key_production=xxx
code_push_key_staging=xxx
```

2. 在`android/app/build.gradle`中添加下面代码。

```
buildTypes {
    staging {                // 新增
        minifyEnabled enableProguardInReleaseBuilds
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        signingConfig signingConfigs.release

        buildConfigField "String", "CODEPUSH_KEY", '"'+properties.getProperty("code_push_key_staging")+'"'
    }

    release {
        minifyEnabled enableProguardInReleaseBuilds
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        signingConfig signingConfigs.release

        buildConfigField "String", "CODEPUSH_KEY", '"'+properties.getProperty("code_push_key_production")+'"'   // 新增
    }
}
```

buildTypes中的参数可以让我们新增一个命令打包对应的版本，新增了一项staging后，就可以使用命令`./gradlew assembStaging`来打包staging版本。

3. 在`MainApplication.java`中新增。

```
protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG,"codepush服务器地址，如http://2.2.2.2:3000/"),  // 新增
      );
}
```

服务端`codepush`环境的搭建查看下面的参考资料。

## 客户端发布

**1、登录**

打开命令行，进入项目目录输入命令登录`code-push-server`服务器。

```
code-push login http://api.code-push.com:8080
```

上面的命令会自动打开网址，登陆后，获取`accessKey`，然后再在命令行输入即可。

**2、新增要发布的应用**

```
// 新增android版本
code-push app add xxx-android windows react-native

// 新增ios版本
code-push app add xxx-ios ios react-native
```

上面的命令相当于新增一个对应的版本库，接着就可以发布版本了。`xxx`是`app`的名字，可以随便起。

**3、发布**

```npm
// 简单
code-push release-react xxx-ios ios -d Production
code-push release-react xxx-android android -d Production 

// 还可以增加一些参数，会添加到对应的更新弹框中
--mandatory true  -description "修改描述"

// 直接使用命令
code-push release-react xxx-android android -d Production --targetBinaryVersion 2.0.0 --mandatory --description '更新了'
code-push release-react xxx-ios ios -d Production --targetBinaryVersion 2.1.1 --mandatory --description '更新了'
```

**4、其它的一些命令**

```
code-push app ls  // 查看app版本
code-push deployment rename <appName> 重命名
code-push deployment rm <appName> 删除部署
code-push deployment ls <appName> 列出应用的部署情况
code-push deployment ls <appName> -k 查看部署的key

// 查看历史版本(Production 或者 Staging)
code-push deployment history <appName> <deploymentNmae> 

// 清除发布记录
code-push deployment clear chuangku-android Production
```


## 使用实例

```
import codePush from "react-native-code-push"


checkUpdate() {

    // 防止总是rollback  https://github.com/Microsoft/cordova-plugin-code-push/issues/200
    codePush.notifyApplicationReady()

    /**
     * 安卓和ios的热更新不同，app store说更新不要出现提示框,而google store说是要出现提示框
     * - android 提示更新，更新后立即重启
     * - ios     静默更新，更新后立即重启
     */
    
    codePush.checkForUpdate().then((update)=> {
        console.log(update)
        
        if (!update) return;

        if (update.isFirstRun && update.description) {
            Toast.showShortTop('恭喜恭喜，更新成功')
        }
        if (Platform.OS == 'ios') {
            codePush.sync({
                updateDialog: false,
                mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
            });
            return
        }
        
        codePush.sync({
            mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
            updateDialog: {
                title: '更新提示',
                mandatoryContinueButtonLabel: '更新',
                mandatoryUpdateMessage: `有新版本${APP_VERSION}了，立即更新？\n`,
                appendReleaseDescription: true,
                descriptionPrefix: "更新包大小：" + covertByte(update.packageSize),
                optionalIgnoreButtonLabel: '忽略',
                optionalInstallButtonLabel: '更新',
                optionalUpdateMessage: `有新版本${APP_VERSION}了，立即更新？\n`
                
            },
        }, (status)=> {
            // switch (status) {
            // 	case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            // 		Toast.showShortTop('开始下载')
            // 		break;
            // 	case codePush.SyncStatus.INSTALLING_UPDATE:
            // 		Toast.showShortTop('更新成功了')
            // 		break;
            // }
        });
    })
	
}
```

## 参考网址

- https://github.com/lisong/code-push-server
- https://github.com/lisong/code-push-demo-app 
- https://github.com/Microsoft/react-native-code-push
- https://github.com/Microsoft/react-native-code-push/blob/master/docs/api-js.md



js无法加载。
```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

