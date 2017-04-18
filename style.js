'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const PADDING = 20;
const BORDER_RADIUS = 15;
const FONT_SIZE = 18;
// const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const HIGHLIGHT_COLOR = '#5f9ee5';
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({

    overlayStyle: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20
    },

    optionContainer: {
        borderRadius:BORDER_RADIUS,
        // width:width*0.8,
        width:300,
        // height:OPTION_CONTAINER_HEIGHT,
        backgroundColor:'#ffffff',
        // left:width*0.1,
        // top:(height-OPTION_CONTAINER_HEIGHT)/2
    },

    cancelContainer: {
        left:width*0.1,
        top:(height-OPTION_CONTAINER_HEIGHT)/2 + 10
    },

    selectStyle: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        borderRadius: BORDER_RADIUS
    },

    selectTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE
    },

    cancelStyle: {
        borderRadius: BORDER_RADIUS,
        width: width * 0.8,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: PADDING
    },

    cancelTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE
    },

    optionStyle: {
        padding: PADDING,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

    optionLastStyle:{
        borderBottomWidth:0
    },

    optionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE,
        fontWeight:'500',
        color: HIGHLIGHT_COLOR
    },

    sectionStyle: {
        padding: PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    sectionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE
    }
});