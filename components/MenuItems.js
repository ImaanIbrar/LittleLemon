import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const MenuItems = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);

  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}>
        <Text style={menuStyles.buttonText}>
        {showMenu ? 'Home' : 'View Menu'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator}></SectionList>   
      )}
      <Pressable onPress={()=> navigation.goBack()}>
        <Text style={menuStyles.buttonText}>Go Back</Text>
        </Pressable>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: 'black',
  },
});

export default MenuItems;





/*Displaying using menuitem using Flatlist


const menuItemsToDisplay = [
  { name: 'Hummus', price: '$5.00', id: '1A' }
];

const Separator = () => <View style={menuStyles.separator}/>

const Item = ({ name , price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name} </Text>
    <Text style={menuStyles.itemText}>{price} </Text>
  </View>
);
const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
};



// Displaying menu using ScrollView
    <View style={{ flex: 0.75 }}>
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
          View Menu
        </Text>
      <ScrollView
        //indicatorStyle={"white"}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "#495E57",
        }}>
        
        <Text style={{ color: '#F4CE14', fontSize: 36 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
    */
    
    