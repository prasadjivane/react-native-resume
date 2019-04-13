import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Linking,Button} from 'react-native';
import { SocialIcon } from 'react-native-elements';
const qualification = Platform.select({
  ios: 'A Passionate React Native Developer\n' + 'M.Tech (CSE)',
  android:
    'A Passionate React Native Developer\n' +
    'M.Tech (CSE)',
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Image
  source={{
    uri: 'https://avatars0.githubusercontent.com/u/26869583?s=400&v=4',
    cache: 'only-if-cached',
  }}
  style={{width: 300, height: 300}}
/>
        <Text style={styles.name}>Prasad Jivane</Text>
        <Text style={styles.qualification}>Software Developer</Text>
        <Text style={styles.qualification}>{qualification}</Text>
        <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {Linking.openURL('https://in.linkedin.com/in/prasadjivane')}}
                />
                <Text style={{ textAlign: 'center' }}>Linkedin</Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="github"
                  onPress={() => {Linking.openURL('https://github.com/prasadjivane')}}
                />
                <Text style={{ textAlign: 'center' }}>Github</Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="stack-overflow"
                  onPress={() => {Linking.openURL('https://stackoverflow.com/cv/prasadjivane')}}
                />
                <Text style={{ textAlign: 'center' }}>Stack-Of</Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="medium"
                  onPress={() => {Linking.openURL('https://medium.com/@prasadjivane')}}
                />
                <Text style={{ textAlign: 'center' }}>Medium</Text>
              </View>
        </View>
        <View style={styles.buttonContainer}>
<Button
  title="Download  resume"
  onPress={() => {Linking.openURL('https://drive.google.com/open?id=1vbDFZoBEbvkjGnyAO2zwVblVndeMcNo7')}}
/>
      </View>
      </View> 
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer:{
    margin: 60,
  },
  name: {
    fontSize: 40,
    color: '#333333',
    textAlign: 'center',
    margin: 10,
  },
  qualification: {
    fontSize:20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
});