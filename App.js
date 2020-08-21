
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';

export default function App(){
  return(
  <View style={styles.container}>
    <Text style={styles.Text}>
    HELLO WORLD
    </Text>
    <Image style={{width:400,height:200}}
            source={{uri:'https://pbs.twimg.com/profile_images/1221073125233709061/YnqLl14e_400x400.jpg'}}
    >
    </Image>
    <Image style={{width:400,height:200}}
            source={{uri:'https://cdn.royalcanin-weshare-online.io/jyJEPmYBaxEApS7LtgZ4/v3/ec52h-older-cats-and-incontinence-causes-and-treatment-hero-cat'}}
    >
    </Image>
    <Image style={{width:400,height:200}}
            source={{uri:'https://lifestyle.campus-star.com/app/uploads/2018/08/cat-world.jpg'}}
    >
    </Image>
  </View>
  )
}
const styles=StyleSheet.create({
  container:{
    fiex:1,
    justifyContent:'center',
    alignItem:'center',
    backgroundColor:'#CCCCCC',
  },
  text:{
    fontSize:50,
      color:'red',
      backgroundColor:'blue',
      padding:10,
  }
})
//export default App;
