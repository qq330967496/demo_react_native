import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet, 
} from 'react-native';


export const styles = StyleSheet.create({
	col_1:{
		flex:8.333333333,
	},
	col_2:{
		flex:16.66666667,
	},
	col_3:{
		flex:25,
	},
	col_4:{
		flex:33.33333333,
	},
	col_5:{
		flex:41.66666667,
	},
	col_6:{
		flex:50,
	},
	col_7:{
		flex:58.33333333,
	},
	col_8:{
		flex:66.66666667,
	},
	col_9:{
		flex:75,
	},
	col_10:{
		flex:83.33333333,
	},
	col_11:{
		flex:91.66666667,
	},
	col_12:{
		flex:100,
	},
	tl:{
		textAlign:'left',
	},
	tc:{
		textAlign:'center',
	},
	tr:{
		textAlign:'right',
	},
    container:{
        flex:1,
        flexDirection:'column',
    },
    header:{
    	flexDirection:'row',
        height: 40,
        backgroundColor: '#1ab5ee',
        paddingLeft:10,
        paddingRight:10,
    },
    headerInner:{
    	color:'#fff',
    },
    headerInnerLeft:{
    },
    headerInnerMid:{
    	marginTop:8,
    	textAlign:'center',
    },
    headerInnerRight:{
		textAlign:'right',
		fontSize:25,
    },
    footer:{
    	flexDirection:'row',
    	height: 40,
    	borderTopWidth:1,
    	borderTopColor:'#e8e8e8',
    },
    footerInner:{

    },
    main:{
        flex:1,
        flexDirection:'column',
    },
    searchBar:{
    	backgroundColor:'#ededed',
    	marginTop:10,
    	marginBottom:10,
    	marginLeft:5,
    	marginRight:5,
    	textAlign:'center',
    	padding:2,
    	fontSize:12,
    	borderRadius:3,
    },
    msgMod:{
    	flexDirection:'row',
    	borderBottomWidth: 1,
    	borderBottomColor:'#e8e8e8',
    },
    msgModInner:{
    	
    },
    msgModInnerLeft:{
    	paddingTop:10,
    	paddingLeft:10,
    },
    msgModInnerRight:{
    	paddingRight:10,
    },
    msgModInnerRightTop:{
    	paddingTop:10,
    	flexDirection:'row',
    },
    msgModInnerRightBottom:{
    	flexDirection:'row',
    	paddingBottom:10,
    },
    drawerContainer:{
		flex:1,
        flexDirection:'column',
	}
});
