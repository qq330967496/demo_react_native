import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet, 
    View,
    Text,
    Alert,
    ScrollView,
    ActivityIndicator,//loading提示符号
    Button,//按钮
    DrawerLayoutAndroid,//抽屉【安卓】
    Image,//图片
} from 'react-native';
class HelloWorld extends Component {


    //页面
    render() {
        function pressButton() {
            Alert.alert('标题','内容',[
                {text:'确定',onPress:()=>{console.log('确定')}}
            ]);
        }

        var drawerNavigationView = (
            <View>
              <Text>Drawer</Text>
            </View>
          );

        return (
            <ScrollView style={styles.container}>
                <Text>组件</Text> 

                <Text>=============================================</Text>
                <Text>Image图片</Text>
                <Text>属性：resizeMode（拉伸方式）('cover'【等比拉伸取最大】, 'contain'【等比拉伸取最小】, 'stretch'【不等比拉伸】)</Text>
                <Image source={{uri:'https://imgsa.baidu.com/baike/s%3D220/sign=85eb22e8a5345982c18ae2903cf5310b/bd315c6034a85edf9f8748bf41540923dd547526.jpg'}}
                    style={{width:100,height:50}}
                    resizeMode='cover'
                    onLayout = {(obj) => {console.log(obj.nativeEvent.layout)}}
                />
                <Image source={{uri:'https://imgsa.baidu.com/baike/s%3D220/sign=85eb22e8a5345982c18ae2903cf5310b/bd315c6034a85edf9f8748bf41540923dd547526.jpg'}}
                    style={{width:100,height:50}}
                    resizeMode='contain'
                />
                <Image source={{uri:'https://imgsa.baidu.com/baike/s%3D220/sign=85eb22e8a5345982c18ae2903cf5310b/bd315c6034a85edf9f8748bf41540923dd547526.jpg'}}
                    style={{width:100,height:50}}
                    resizeMode='stretch'
                />
                <Text>=============================================</Text>
                <Text>DrawerLayoutAndroid（抽屉【安卓】）</Text>
                <Text>属性：drawerLockMode抽屉锁定模式('unlocked', 'locked-closed', 'locked-open')，</Text>
                <DrawerLayoutAndroid
                    drawerWidth={200}
                    drawerLockMode='unlocked'
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => drawerNavigationView}
                    onDrawerOpen = {() => {console.log('打开完毕')}}
                    onDrawerSlide = {() => {console.log('交互中')}}
                    onDrawerStateChanged  = {(status) => {console.log(status=='Idle'?'空闲':status=='Dragging'?'拖拽中':status=='Settling'?'停靠':status);}}
                    style={{height:100}}
                    >
                    <View>
                        <Text>》》按住左边缘往右拖动</Text>
                    </View>
                </DrawerLayoutAndroid>

                <Text>=============================================</Text>
                <Text>Button（按钮）</Text>
                <Button title='可点击' onPress={pressButton}/>
                <Button title='不可点击' onPress={pressButton} disabled={true}/>
                <Button title='绿色' onPress={pressButton} color='green'/>
                <Text>=============================================</Text>
                <Text>ActivityIndicator（loading提示符号）</Text>
                <Text>属性：size（'small', 'large'）</Text>
                <ActivityIndicator color='red' size='large'/>
                <Text>=============================================</Text>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        
    },
});



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

