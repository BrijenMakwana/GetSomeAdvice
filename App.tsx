
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdviceItem from './Components/AdviceItem';
import UIButton from './Components/UIButton';

export default function App() {

  const [advice,setAdvice] = useState("");

  const getAdvice = async() => {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((json) => {
      setAdvice(json.slip.advice);
      
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    getAdvice();
  },[])

  return (
    <View style={styles.container}>
      <AdviceItem adviceText={advice}/>
      <UIButton buttonText="Get Some Advice" onPress={getAdvice}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEEE7',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
