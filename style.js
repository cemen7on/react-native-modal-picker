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
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20
    },

    optionContainer:{
        width:300
    },

    cancelContainer:{
        marginTop:10
    },

    selectStyle:{
        flex:1,
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
        width:300,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: PADDING
    },

    cancelTextStyle: {
        textAlign: 'center',
        color: HIGHLIGHT_COLOR,
        fontSize: FONT_SIZE,
        fontWeight:'500',
    },

    optionStyle: {
        padding: PADDING,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        marginBottom:1
    },

    optionFirstStyle:{
        borderTopLeftRadius:BORDER_RADIUS,
        borderTopRightRadius:BORDER_RADIUS
    },

    optionLastStyle:{
        borderBottomLeftRadius:BORDER_RADIUS,
        borderBottomRightRadius:BORDER_RADIUS
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