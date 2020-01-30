import React from 'react';
import { View, TextInput, StatusBar, Text,FlatList,TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state= {
    inputValue: '',
    todos: []
  };
    changeText= value => {
      this.setState({
        inputValue: value
      });
    };

    addItem = () => {
      if (this.state.inputValue !== ''){
        this.setState(prevState => {
          const newToDo = {
            title: this.state.inputValue,
            createdAt: Date.now(),
          };

          var todos = this.state.todos.concat(newToDo);

          this.setState({
            todos: todos,
          });
        });
      }
    };

  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
    <View style={style.listview}>
    <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} 
        />
    <TouchableOpacity style={style.checkround}>
        </TouchableOpacity>
        <Text
        style={style.todotitle}>{todo.title} </Text>
        </View>
   );

    return (
 
       <LinearGradient
          colors={['orange', '#FA8072', '#764ba2']}
          style={style.lineargradient}>
        <StatusBar barStyle="light-content" />
        <View>
        <TextInput
        style={style.input}
        onSubmitEditing={this.addItem}
        onChangeText={this.changeText}
        placeholder="Type here to add something."
        placeholderTextColor={'#fff'}
        multiline={true}
        autoCapitalize="sentences"
        underlineColorAndroid="transparent"
        selectionColor={"white"}
        maxLength={30}
        returnKeyType="done"
        autoCorrect={false}
        blurOnSubmit={true}
        />
        
      </View>
      <View>
      {todos}
      </View>
      </LinearGradient>
    );
  }
}

const style = {
  input:
  {
    marginTop: 30,
    paddingTop: 10,
    paddingRight:15,
    paddingLeft: 15,
    fontSize: 34,
    color: "white",
    fontWeight: "500"
    },
   
    lineargradient :
    { 
      flex:1
    },
   
    todotitle :
     { 
      paddingLeft: 5, 
      marginTop: 10, 
      fontSize: 28, 
      color: "red"
    },
     
      checkround :
      { 
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 3,
      borderColor: "white",
      margin: 15
    },

    listview :
       { 
      flexDirection: 'row',
      marginTop:20
    },
    };