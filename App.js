import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity ,Image , ScrollView } from 'react-native';
import {useState} from "react";
import {TextInput} from "react-native";
import {Picker} from "@react-native-picker/picker";
import ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.js";
import {useFonts} from "expo-font";

function QuestionComponent({option_index,setOption_index,PictureUrl}) {

  return (
      <View style={styles.QuestionBorder}>
        <Picker selectedValue={option_index} onValueChange={(value) => setOption_index(value)} style={{width : 300 , height :100,backgroundColor : '#C4A484'}}>
            <Picker.Item label="Choose Option:" value="null" ></Picker.Item>
          <Picker.Item label="Butterfly Pea Latte" value="Butterfly_Pea_Latte"></Picker.Item>
          <Picker.Item label="Coffee" value="Coffee"></Picker.Item>
          <Picker.Item label="Matcha" value="Matcha"></Picker.Item>
        </Picker>
        <CustomImage ImageUrl={PictureUrl}/>
      </View>
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

    const [fontsLoaded] = useFonts({
        Himalayan: require('./assets/fonts/Himalayan-1jOvL.ttf'),
        CafeCorner : require('./assets/fonts/CafeCornerScriptDemo-nAV5J.ttf')
    });



    if (!fontsLoaded) {
        return null;
    }

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


function Logo() {
    return (
        <View>
            <Image source={{uri : "https://cdn-icons-png.flaticon.com/512/6744/6744480.png"}} style={styles.Logo}>
            </Image>
            <Text style={[styles.Header,{textAlign : "center" , fontSize : 30}]}>Drink Quiz</Text>
        </View>
    )
}

function Background() {
    return(
        <Image source={{uri : "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlOV9zaW1wbGVfYWJzdHJhY3RfcHJpbnRpbmdfbWluaW1hbF9pbGx1c3RyYXRpb25fb181MmNmNzUwNC0zOTQzLTQyMWUtODFhMy1mOTU5ZDM5NDBjYTJfMS5qcGc.jpg"}}
               style={{width : "100%" , height : "100%",zIndex : -1,position : "absolute"}}/>
    )
}

  function CheckAnswers() {
    console.log(option1,option2,option3)
    let score = 0

    if (option1 == questions[0]["text"]) { score += 1}
    if ( option2 == questions[1]["text"]) {score += 1}
    if (option3 == questions[2]["text"]) {score += 1}

    ToastAndroid.show(`Your score is ${score}/${questions.length}`,ToastAndroid.SHORT)
  }




  return (
    <View style={styles.container}  >

        <Logo/>
      <ScrollView >
        {questions.map((item, index) => (
            <QuestionComponent key={index} option_index={item["option"]} setOption_index={item["hook"]} PictureUrl= {item["image"]}/>
        ))}

          <TouchableOpacity onPress={CheckAnswers} style={styles.AnswerButton}>
              <Text style={{fontFamily : "CafeCorner",fontSize : 25,color : "white"}}>Submit quiz</Text>
          </TouchableOpacity>
      </ScrollView>
        <Background/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
  },
    Header : {
      fontFamily : "Himalayan",
        color : "white"
    },
    AnswerButton : {
        width: 100, height: 50, backgroundColor: "#654321", borderRadius: 20, alignItems : "center",justifyContent : "center",
        left: "50%", bottom: 0, transform: "translate(-50%, -50%)"
    },
    QuestionBorder : {
      borderWidth : 5,
        borderRadius : 10,
        borderColor : "#654321"
    },
    Logo : {
        width : 150 , height : 100
    }
});
