import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet, 
    View,
    Text,
    Alert,
    ScrollView,
    TextInput,
    DrawerLayoutAndroid,//抽屉视图，安卓
} from 'react-native';

import {styles} from './css/style.js';
import {drawerView} from './components/drawerView.js';

class HelloWorld extends Component {

    //页面
    render() {

    	let msgArr = [
    		{id:0, icon:'',name:'名称0' ,time:'16:00',abstract:'摘要',count:1},
    		{id:1, icon:'',name:'名称1' ,time:'16:00',abstract:'摘要',count:1},
    		{id:2, icon:'',name:'名称2' ,time:'16:00',abstract:'摘要',count:1},
    		{id:3, icon:'',name:'名称3' ,time:'16:00',abstract:'摘要',count:1},
    		{id:4, icon:'',name:'名称4' ,time:'16:00',abstract:'摘要',count:1},
    		{id:5, icon:'',name:'名称5' ,time:'16:00',abstract:'摘要',count:1},
    		{id:6, icon:'',name:'名称6' ,time:'16:00',abstract:'摘要',count:1},
    		{id:7, icon:'',name:'名称7' ,time:'16:00',abstract:'摘要',count:1},
    		{id:8, icon:'',name:'名称8' ,time:'16:00',abstract:'摘要',count:1},
    		{id:9, icon:'',name:'名称9' ,time:'16:00',abstract:'摘要',count:1},
    		{id:10,icon:'',name:'名称10',time:'16:00',abstract:'摘要',count:1},
    		{id:11,icon:'',name:'名称11',time:'16:00',abstract:'摘要',count:1},
    		{id:12,icon:'',name:'名称12',time:'16:00',abstract:'摘要',count:1},
    		{id:13,icon:'',name:'名称13',time:'16:00',abstract:'摘要',count:1},
    		{id:14,icon:'',name:'名称14',time:'16:00',abstract:'摘要',count:1},
    		{id:15,icon:'',name:'名称15',time:'16:00',abstract:'摘要',count:1},
    		{id:16,icon:'',name:'名称16',time:'16:00',abstract:'摘要',count:1},
    		{id:17,icon:'',name:'名称17',time:'16:00',abstract:'摘要',count:1},
    	];

    	/*let drawerView = (
			<View>
				<Text>抽屉视图</Text>
			</View>
		);*/


    	console.log(styles);
        
        return (
        	<DrawerLayoutAndroid
                drawerWidth={300}
                drawerLockMode='unlocked'
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => drawerView}
                >
	            <View style={styles.container}>
	                <View style={styles.header}>
	                    <Text style={[styles.col_2,styles.headerInner]}>头像</Text>
	                    <Text style={[styles.col_8,styles.headerInner,styles.tc,styles.headerInnerMid]}>消息|电话</Text>
	                    <Text style={[styles.col_2,styles.headerInner,styles.tr,styles.headerInnerRight]}>+</Text>
	                </View>
	                <ScrollView style={styles.main}>
	                	<Text style={[styles.searchBar]} >搜索</Text>

						{
	                        //遍历
	                        msgArr.map((el, index) => {
	                            return  (
	                                <View key={index} style={styles.msgMod}>
	                                	<View style={[styles.col_2,styles.msgModInner,styles.msgModInnerLeft]}>
	                                		<Text>头像</Text>
	                                	</View>
	                                	<View style={[styles.col_10,styles.msgModInner,styles.msgModInnerRight]}>
	                                		<View style={[styles.msgModInnerRightTop]}>
	                                			<Text style={[styles.col_10]}>
	                                				{msgArr[index].name}
	                                			</Text> 
	                                			<Text style={[styles.col_2,styles.tr]}>
	                                				{msgArr[index].time}
	                                			</Text> 
	                                		</View>
	                                		<View style={[styles.msgModInnerRightBottom]}>
	                                			<Text style={[styles.col_10]}>
	                                				{msgArr[index].abstract}
	                                			</Text> 
	                                			<Text style={[styles.col_2,styles.tr]}>
	                                				{msgArr[index].count}
	                                			</Text> 
	                                		</View>
	                                	</View>
	                                    
	                                </View> 
	                            )
	                        })
	                    }

	                </ScrollView>
	                <View style={styles.footer}>
	                	<Text style={[styles.col_4,styles.tc]}>消息</Text>
	                	<Text style={[styles.col_4,styles.tc]}>联系人</Text>
	                	<Text style={[styles.col_4,styles.tc]}>动态</Text>
	                </View>
	            </View>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

