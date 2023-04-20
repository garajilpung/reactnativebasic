import React from 'react';
import {
  // Alert,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ListData} from '../model/ListData';

function Home({navigation, route}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const createTwoButtonAlert = (msg: string) => {
  //   Alert.alert('알림', 'msg : ' + msg, [
  //     {
  //       text: '취소',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {
  //       text: '확인',
  //       onPress: () => console.log('OK Pressed'),
  //     },
  //   ]);
  // };

  const itemOnPress = (id: string) => {
    switch (id) {
      case 'LotsOfStyles':
        navigation.navigate('LotsOfStyles');
        break;
      case 'PropsAndState':
        navigation.navigate('PropsAndState');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <SectionList
        sections={ListData}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => itemOnPress('' + item.id)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'rgba(240,240,240,1.0)',
  },
  title: {
    fontSize: 24,
  },
  desc: {
    fontSize: 16,
    color: Colors.lightGray,
    textAlign: 'right',
    paddingRight: 20,
  },
});

export default Home;
