# RN官方组件汇总


# WebView 组件

## 使用

- 高度设置：设置高度时，给父级元素设置，WebView组件会自动伸展撑满父级
- 指示器：页面添加指示器，需要同时添加2个属性：`startInLoadingState`、`renderLoading`
- 返回键：安卓返回时，让网页返回，返回完后再app返回， 使用`onNavigationStateChange`属性，和`WebView`的`goBack()`方法。


## 实例
```
import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet,
	WebView,
	ActivityIndicator,
	BackHandler
} from 'react-native'

export default class WebPage extends Component {
	static navigationOptions = ({navigation})=> {
		let {title, url} = navigation.state.params.item
		return {
			title,
			headerRight: <ShareWebUrl
				title={title}
				webpageUrl={url}
			/>
		}
	}
	
	constructor(props) {
		super(props);
		this.state = {
			backButtonEnabled: false
		}
	}
	
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backHandler);
	}
	
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
	}
	
	backHandler = () => {
		if (this.state.backButtonEnabled) {
			this.webView.goBack();
			return true;
		}
	}
	onNavigationStateChange = (navState)=> {
		this.setState({
			backButtonEnabled: navState.canGoBack
		})
	}
	
	onLoadEnd() {} 

	renderLoading() {
		return (<View style={{flex: 1, ...FlexCenter}}>
			<ActivityIndicator color={DEFAULT_COLOR}/>
		</View>)
	}
	
	render() {
		let {url} = this.props.navigation.state.params.item
		
		return (
			<View style={styles.wrapper}>
				<WebView
					ref={(e)=> {
						this.webView = e
					}}
					onLoadEnd={this.onLoadEnd.bind(this)}
					source={{uri: url}}
					javaScriptEnabled={true}
					scalesPageToFit={false}
					startInLoadingState={true}
					renderLoading={this.renderLoading.bind(this)}
					onNavigationStateChange={this.onNavigationStateChange.bind(this)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	}
})

```

## 参考链接
- <a href='https://stackoverflow.com/questions/39446077/react-native-go-back-on-android-hardware-back-button-pressed' target='_blank'>React-Native: Go back on android hardware back button pressed</a>



```