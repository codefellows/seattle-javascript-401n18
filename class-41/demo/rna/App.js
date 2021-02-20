import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, Text, View, Button, Linking } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

function App(props) {

  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  };

  const showContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data);
  };

  const call = contact => {
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then((supported) => Linking.openURL(link) )
      .catch(console.error);
  };

  useEffect( () => {
    getPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <Button
        onPress={showContacts}
        title="Show Contacts"
      />

      <View style={styles.section}>
        <Text>FlatList ...</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Button title={item.name} style={styles.person} onPress={() => call(item)} />}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  person: {
    marginTop:'1em',
  },
  section: {
    margin: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginTop: 25,
  },
});

export default App;
