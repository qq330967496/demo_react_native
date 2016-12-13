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
    KeyboardAvoidingView,//防止键盘视图
    ListView,//列表视图，可以用ScrollView的属性
    //MapView,//地图视图（0.42版本被移除，使用react-native-maps）
    //Modal,//模态框
    TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';
import Modal from './js/ModalExample.js';

class HelloWorld extends Component {
     constructor(props) {
        super(props);
        this.state = {modalVisible: false};
      }

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    //页面
    render() {
        var lvds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var lvArr = lvds.cloneWithRows({'s1':['row1','row2','row3','row4','row5','row6'],'s2':['row7','row8']});


        // var lvds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // var lvArr = lvds.cloneWithRowsAndSections('s1':['row1','row2','row3','row4','row5','row6'],'s2':['row7','row8']);


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
                <Text>Modal模态框</Text> 
                <Modal></Modal>

                <Text>=============================================</Text>
                <Text>MapView地图视图（模拟器没有地图暂时用不了）</Text> 
                <MapView
                    style={{width:100,height:100}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

                <Text>=============================================</Text>
                <Text>ListView列表视图</Text> 
                <ListView
                    key={1}
                    dataSource={lvArr}
                    initialListSize={3}
                    pageSize={3} 
                    onEndReached={()=>{console.log('onEndReached')}}
                    onChangeVisibleRows={
                        (visibleRows, changedRows) => {
                            console.log('onChangeVisibleRows');
                            visibleRows({ sectionID: { rowID: true  }});
                            changedRows({ sectionID: { rowID: false }});
                        }
                    }
                    renderRow={(rowData, sectionID, rowID, highlightRow) => <Text>{rowData}-{sectionID}-{rowID}-{highlightRow}</Text>}
                    renderSectionHeader={(sectionData, sectionID) => <Text>小节标题-{sectionID}</Text> }
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => <Text>分离器-{sectionID}-{rowID}-{adjacentRowHighlighted}</Text>}
                />

                <Text>=============================================</Text>
                <Text>KeyboardAvoidingView防止键盘视图</Text>
                <KeyboardAvoidingView></KeyboardAvoidingView>

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
    map: {
        height: 150,
        width:300,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000000',
    }
});



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

