import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <IconIon name="home-sharp" size={25} color="#6A4029" />
      ) : (
        <IconIon name="home-sharp" size={25} color="#b2bec3" />
      );
    case 'Profile':
      return focus ? (
        <IconFeather name="user" size={25} color="#6A4029" />
      ) : (
        <IconFeather name="user" size={25} color="#b2bec3" />
      );
    case 'Chat':
      return focus ? (
        <IconIon name="ios-chatbubbles-sharp" size={25} color="#6A4029" />
      ) : (
        <IconIon name="ios-chatbubbles-sharp" size={25} color="#b2bec3" />
      );
    default:
      return <IconIon name="home-sharp" size={25} color="#6A4029" />;
  }
};

const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 50,
    paddingTop: 15,
    paddingBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
