'use strict';

import React,{
    PropTypes
} from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    Modal,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';

import styles from './style';
import BaseComponent from './BaseComponent';

let componentIndex = 0;

const propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
    onCloze:PropTypes.func,
    initValue: PropTypes.string,
    style: View.propTypes.style,
    selectStyle: View.propTypes.style,
    optionStyle: View.propTypes.style,
    optionTextStyle: Text.propTypes.style,
    sectionStyle: View.propTypes.style,
    sectionTextStyle: Text.propTypes.style,
    cancelStyle: View.propTypes.style,
    cancelTextStyle: Text.propTypes.style,
    overlayStyle: View.propTypes.style,
    cancelText: PropTypes.string
};

const defaultProps = {
    data:[],
    onChange: ()=> {},
    onClose:()=>{},
    initValue: 'Select me!',
    style: {},
    selectStyle: {},
    optionStyle: {},
    optionTextStyle: {},
    sectionStyle: {},
    sectionTextStyle: {},
    cancelStyle: {},
    cancelTextStyle: {},
    overlayStyle: {},
    cancelText: 'cancel'
};

export default class ModalPicker extends BaseComponent {

    constructor() {

        super();

        this._bind(
            'onChange',
            'open',
            'close'
            // 'renderChildren'
        );

        this.state = {
            animationType: 'slide',
            transparent: false,
            selected: 'please select'
        };
    }

    componentDidMount() {
        this.setState({selected: this.props.initValue});
        this.setState({cancelText: this.props.cancelText});
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.initValue != this.props.initValue) {
        this.setState({selected: nextProps.initValue});
      }
    }

    onChange(item) {
        this.props.onChange(item);
        this.setState({selected: item.label});
        this.close();
    }

    close() {
    /*
      this.setState({
        modalVisible: false
      }, this.props.onClose);
      */
      this.props.onClose();
    }

    open() {
      this.setState({
        modalVisible: true
      });
    }

    renderSection(section) {
        return (
            <View key={section.key} style={[styles.sectionStyle,this.props.sectionStyle]}>
                <Text style={[styles.sectionTextStyle,this.props.sectionTextStyle]}>{section.label}</Text>
            </View>
        );
    }

    renderOption(option, first=false, last=false) {
        return (
            <TouchableOpacity key={option.key} onPress={()=>this.onChange(option)}>
                <View style={[styles.optionStyle, first ? styles.optionFirstStyle : null, last ? styles.optionLastStyle : null, this.props.optionStyle]}>
                    <Text style={[styles.optionTextStyle,this.props.optionTextStyle]}>{option.label}</Text>
                </View>
            </TouchableOpacity>)
    }

    renderOptionList() {
        var options = this.props.data.map((item, i) => {
            if (item.section) {
                return this.renderSection(item);
            } else {
                return this.renderOption(item, i==0, i==this.props.data.length-1);
            }
        });

        return (
            <TouchableWithoutFeedback key={'modalPicker'+(componentIndex++)} onPress={this.close}>
                <View style={[styles.overlayStyle, this.props.overlayStyle]}>
                    <View>
                        <View style={styles.optionContainer}>
                            <ScrollView keyboardShouldPersistTaps="always">
                                <View>
                                    {options}
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.cancelContainer}>
                            <TouchableOpacity onPress={this.close}>
                                <View style={[styles.cancelStyle, this.props.cancelStyle]}>
                                    <Text style={[styles.cancelTextStyle,this.props.cancelTextStyle]}>{this.props.cancelText}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    /*
    renderChildren() {

        if(this.props.children) {
            return this.props.children;
        }
        return (
            <View style={[styles.selectStyle, this.props.selectStyle]}>
                <Text style={[styles.selectTextStyle, this.props.selectTextStyle]}>{this.state.selected}</Text>
            </View>
        );
    }
    */

    render() {

        const dp = (
          <Modal transparent={true} ref="modal" visible={this.props.modalVisible} onRequestClose={this.close} animationType={this.state.animationType}>
            {this.renderOptionList()}
          </Modal>
        );

        return (
            <View style={this.props.style}>
                {dp}

                {/*
                <TouchableOpacity onPress={this.open}>
                    {this.renderChildren()}
                </TouchableOpacity>
                */}
            </View>
        );
    }
}

ModalPicker.propTypes = propTypes;
ModalPicker.defaultProps = defaultProps;
