import {Platform, TouchableOpacity} from 'react-native';
import {Touchable, Text, View} from '@components';
import {useStyles} from 'react-native-unistyles';

const MyTabBar = ({state, descriptors, navigation}) => {
  const {theme} = useStyles();
  return (
    <View flexDirection="row">
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
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Touchable
            key={index.toString()}
            height={Platform.OS === 'ios' ? 70 : 80}
            alignItems="center"
            justifyContent="center"
            onPress={onPress}
            backgroundColor={theme.colors.background}
            style={{flex: 1}}>
            {options.tabBarIcon({
              focused: isFocused,
              color: isFocused
                ? theme.colors.bottomTabActiveIcon
                : theme.colors.bottomTabInactiveIcon,
            })}
            <Text
              size={12}
              weight={isFocused ? 'bold' : '600'}
              color={
                isFocused
                  ? theme.colors.bottomTabActiveText
                  : theme.colors.bottomTabInactiveText
              }>
              {label}
            </Text>
          </Touchable>
        );
      })}
    </View>
  );
};

export default MyTabBar;
