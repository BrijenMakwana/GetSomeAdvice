import { StyleSheet, Text, Image,Pressable } from 'react-native';
import React from 'react';

export type UIButtonProps = {
    buttonText: string;
    onPress: () => void;
}

const UIButton = (props: UIButtonProps) => {
  return (
    <Pressable 
        style={styles.imageContainer}
        onPress={props.onPress}
      >
        <Image 
          source={require("../assets/newAdvice.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{props.buttonText}</Text>
      </Pressable>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  imageContainer:{
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    height: 120,
    width: 120,
    backgroundColor: "#D96098",
    borderRadius: 100,
    
  },
  text:{
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    color: "#325288"
  }
});
