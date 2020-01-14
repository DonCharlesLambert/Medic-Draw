import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import {View,Text,TouchableOpacity} from 'react-native'

export default class CheckBtn extends Component{
    constructor(props){
        super(props);
        this.state = ({
            setCheckd:false
        })
    }

    componentDidMount(){

        let flag = this.props.checked;
        this.setState({
            setCheckd:flag
        })
    }

    render(){
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                {
                    this.state.setCheckd ?
                    <TouchableOpacity onPress={()=>{
                        this.props.onCheckChange(false);
                        this.setState({
                            setCheckd:false
                        })
                        }}>
                        <Icon name='checkcircle' size={24} color='orangered'/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>{
                        this.props.onCheckChange(true);
                        this.setState({
                            setCheckd:true
                        })
                        }}>
                        <Icon name='checkcircleo' size={24} color='#999'/>
                    </TouchableOpacity>
                }   
                    <Text style={{marginLeft:6}}>{this.props.label}</Text>
                </View>
            )
        }
        
    }
    // http://www.manongjc.com/article/64354.html