import React, { Component } from 'react';
import { 
    View,
    Text,
    ScrollView,
} from 'react-native';

import {styles} from '../css/drawStyle.js';

//抽屉视图
export let drawerView = (
	<View style={styles.drawerContainer}>
		<View style={{height:150}}>
			<Text>用户信息</Text>
		</View>
		<ScrollView>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
			<Text>选项</Text>
		</ScrollView>
		<View style={{height:60}}>
			<Text>底部</Text>
		</View>
	</View>
);