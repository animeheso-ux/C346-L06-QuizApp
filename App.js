import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity ,Image , ScrollView} from 'react-native';
import {useState} from "react";
import {TextInput} from "react-native";
import {Picker} from "@react-native-picker/picker";
import ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.js";


function QuestionComponent({option_index,setOption_index,PictureUrl}) {

  return (
      <>
        <Picker selectedValue={option_index} onValueChange={(value) => setOption_index(value)} style={{width : 100 , height :100}}>
          <Picker.Item label="Butterfly Pea Latte" value="Butterfly_Pea_Latte"></Picker.Item>
          <Picker.Item label="Coffee" value="Coffee"></Picker.Item>
          <Picker.Item label="Matcha" value="Matcha"></Picker.Item>
        </Picker>
        <CustomImage ImageUrl={PictureUrl}/>
      </>
  )
}

function  CustomImage({ImageUrl}) {
  return (
      <Image source={{uri : ImageUrl}} style={{width : 300, height : 300}}></Image>
  )
}

export default function App() {
  const [option1,setoption1] = useState("")
  const [option2,setoption2] = useState("")
  const [option3,setoption3] = useState("")

  const questions = [

        {
          option : option1,
          hook : setoption1,
          text: "Butterfly_Pea_Latte",
          image: "https://www.ohhowcivilized.com/wp-content/uploads/iced-butterfly-flower-tea-latte-recipe.jpg"
        },
        {
          option: option2,
          hook : setoption2,
          text: "Coffee",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIXmWBuEivCCYhCEf7tUUgFA7gmbgZKWNNpU0FYUwaab1MQYRmrNVdHc&s=10"
        },
    {
      option : option3,
      hook : setoption3,
      text: "Matcha",
      image: "https://www.justonecookbook.com/wp-content/uploads/2025/12/Matcha-Latte-4598-I-2-500x375.jpg"
    }
  ];





  function CheckAnswers() {
    console.log(option1,option2,option3)
    let score = 0

    if (option1 == questions[0]["text"]) { score += 1}
    if ( option2 == questions[1]["text"]) {score += 1}
    if (option3 == questions[2]["text"]) {score += 1}

    ToastAndroid.show(`Your score is ${score}/${questions.length}`,ToastAndroid.SHORT)
  }



  return (
    <View style={styles.container}>
        <Text style={{textAlign : "center" , fontSize : 20}}>Food Quiz</Text>
      <ScrollView>
        {questions.map((item, index) => (
            <QuestionComponent key={index} option_index={item["option"]} setOption_index={item["hook"]} PictureUrl= {item["image"]}/>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={CheckAnswers} style={{width : 100 , height : 50,backgroundColor : "cyan" , borderRadius : 20 ,textAlign : "Center"}}>
        <Text>Submit quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent : "center",
    justifyContent : "center",
    alignItems : "center"
  },
});
