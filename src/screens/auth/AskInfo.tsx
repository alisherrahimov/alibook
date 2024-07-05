import {Line, Text, Touchable, View} from '@components';
import {Colors, FontSize, WIDTH} from '@constants';
import {FONT} from '@fonts';
import {ChevronIcon, SelectIcon} from '@icons';
import {navigate} from '@navigation';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
const NEXT1 = forwardRef((props, ref) => {
  const {theme} = useStyles();
  const [sex, setSex] = React.useState(0);

  const onPress = (index: number) => {
    setSex(index);
  };

  useImperativeHandle(
    ref,
    () => ({
      sex,
    }),
    [sex],
  );

  return (
    <View paddingHorizontal={20} width={WIDTH}>
      <Text size={FontSize.x28} font={FONT.BOLD}>
        What is your gender?🚻
      </Text>
      <Text mTop={10} size={FontSize.x16}>
        Select gender to get better recommendations and personalized
      </Text>

      <View marginVertical={50}>
        <Touchable
          onPress={() => onPress(0)}
          height={60}
          flexDirection="row"
          alignItems="center">
          <SelectIcon
            width={24}
            height={24}
            color={sex === 0 ? Colors.orage : theme.colors.background}
            fill={Colors.orage}
          />
          <Text mLeft={10} size={FontSize.x18} font={FONT.BOLD}>
            I am male
          </Text>
        </Touchable>
        <Line width={'100%'} />
        <Touchable
          onPress={() => onPress(1)}
          height={60}
          flexDirection="row"
          alignItems="center">
          <SelectIcon
            width={24}
            height={24}
            color={sex === 1 ? Colors.orage : theme.colors.background}
            fill={Colors.orage}
          />
          <Text mLeft={10} size={FontSize.x18} font={FONT.BOLD}>
            I am famale
          </Text>
        </Touchable>
        <Line width={'100%'} />
        <Touchable
          onPress={() => onPress(2)}
          height={60}
          flexDirection="row"
          alignItems="center">
          <SelectIcon
            width={24}
            height={24}
            color={sex === 2 ? Colors.orage : theme.colors.background}
            fill={Colors.orage}
          />
          <Text mLeft={10} size={FontSize.x18} font={FONT.BOLD}>
            I don't want to say
          </Text>
        </Touchable>
      </View>
    </View>
  );
});

const NEXT2 = forwardRef((props, ref) => {
  const {theme} = useStyles();

  const [age, setAge] = useState<string>('');

  const onPress = (value: string) => {
    setAge(value);
  };

  useImperativeHandle(
    ref,
    () => ({
      age,
    }),
    [age],
  );

  return (
    <View paddingHorizontal={20} width={WIDTH}>
      <Text size={FontSize.x28} font={FONT.BOLD}>
        Choose your age 🎯
      </Text>
      <Text mTop={10} size={FontSize.x16}>
        Select age to get better recommendations and personalized
      </Text>
      <View
        flexDirection="row"
        paddingVertical={30}
        justifyContent="space-between">
        <View width={'48%'}>
          {['14-17', '25-29', '35-39', '45-49'].map((item, index) => {
            return (
              <Touchable
                onPress={() => onPress(item)}
                key={index}
                borderColor={Colors.orage}
                padding={8}
                marginVertical={8}
                borderRadius={20}
                backgroundColor={
                  item === age ? Colors.orage : theme.colors.background
                }
                borderWidth={1}
                alignItems="center"
                justifyContent="center">
                <Text
                  color={item === age ? Colors.white : Colors.orage}
                  size={FontSize.x18}
                  font={FONT.BOLD}>
                  {item}
                </Text>
              </Touchable>
            );
          })}
        </View>
        <View width={'48%'}>
          {['18-24', '30-34', '40-44', '<50'].map((item, index) => (
            <Touchable
              key={index}
              onPress={() => onPress(item)}
              borderColor={Colors.orage}
              padding={8}
              backgroundColor={
                item === age ? Colors.orage : theme.colors.background
              }
              marginVertical={8}
              borderRadius={20}
              borderWidth={1}
              alignItems="center"
              justifyContent="center">
              <Text
                color={item === age ? Colors.white : Colors.orage}
                size={FontSize.x18}
                font={FONT.BOLD}>
                {item}
              </Text>
            </Touchable>
          ))}
        </View>
      </View>
    </View>
  );
});

const NEXT3 = forwardRef((props, ref) => {
  const {theme} = useStyles();
  const [genre, setGenre] = useState<string[]>([]);

  const onPress = (item: string) => {
    if (genre.includes(item)) {
      setGenre(genre.filter(i => i !== item));
    } else {
      setGenre([...genre, item]);
    }
  };

  useImperativeHandle(ref, () => ({genre}), [genre]);

  return (
    <View paddingHorizontal={20} width={WIDTH}>
      <Text size={FontSize.x28} font={FONT.BOLD}>
        Choose the Book Genre 📚 You Like
      </Text>
      <Text mTop={10} size={FontSize.x16}>
        Select genre to get better recommendations and personalized
      </Text>

      <View flex={1} marginVertical={30}>
        <ScrollView>
          <View flexDirection="row" flexWrap="wrap">
            {[
              'Action',
              'Adventure',
              'Comedy',
              'Drama',
              'Fantasy',
              'Horror',
              'Art',
              'Biography',
              'Business',
              'Children',
              'Christian',
              'Classics',
              'Comics',
              'Cookbooks',
              'Ebooks',
              'Fantasy',
              'Fiction',
              'Graphic Novels',
              'Historical Fiction',
              'History',
              'Manga',
              'Memoir',
              'Music',
              'Mystery',
            ].map((item, index) => (
              <Touchable
                key={index}
                onPress={() => onPress(item)}
                padding={8}
                borderColor={Colors.orage}
                borderWidth={1}
                margin={4}
                backgroundColor={
                  genre.includes(item) ? Colors.orage : theme.colors.background
                }
                borderRadius={20}
                justifyContent="center"
                alignItems="center">
                <Text
                  color={genre.includes(item) ? Colors.white : Colors.orage}
                  size={FontSize.x14}
                  font={FONT.BOLD}>
                  {item}
                </Text>
              </Touchable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
});

const AskInfo: React.FunctionComponent = () => {
  const valueX = useSharedValue(WIDTH / 1.8 / 3);
  const {theme, styles} = useStyles(askInfoStyles);
  const scrollRef = useRef<ScrollView>(null);
  const sexRef = useRef<{sex: number}>(null);
  const ageRef = useRef<{age: string}>(null);
  const genreRef = useRef<{genre: string[]}>(null);
  const [active, setActive] = React.useState(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(valueX.value),
    };
  }, []);
  console.log(sexRef.current);
  console.log(ageRef.current);
  console.log(genreRef.current);

  return (
    <View flex={1}>
      <View
        paddingVertical={10}
        paddingHorizontal={20}
        height={110}
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-end">
        <Touchable
          onPress={() => {
            if (active !== 1) {
              scrollRef.current?.scrollTo({
                x: WIDTH * (active - 2),
                y: 0,
                animated: true,
              });
              valueX.value = (WIDTH / 1.8 / 3) * (active - 1);
              setActive(active - 1);
            }
          }}
          width={35}
          height={35}
          alignItems="center"
          justifyContent="center">
          <ChevronIcon />
        </Touchable>
        <View
          position="absolute"
          width={WIDTH / 1.8}
          left={WIDTH / 4.2}
          backgroundColor={theme.colors.lineColor}
          height={15}
          bottom={20}
          justifyContent="center"
          borderRadius={20}>
          <Animated.View style={[styles.view, animatedStyle]} />
        </View>
      </View>

      <View flex={1} alignItems="center" justifyContent="center">
        <ScrollView
          ref={scrollRef}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={event => {
            const x = event.nativeEvent.contentOffset.x;
            setActive(Math.round(x / WIDTH) + 1);
          }}
          scrollEventThrottle={16}>
          <NEXT1 ref={sexRef} />
          <NEXT2 ref={ageRef} />
          <NEXT3 ref={genreRef} />
        </ScrollView>

        <Touchable
          onPress={() => {
            if (active <= 2) {
              scrollRef.current?.scrollTo({
                x: WIDTH * active,
                y: 0,
                animated: true,
              });
              valueX.value = (WIDTH / 1.8 / 3) * (active + 1);
            } else {
              navigate('BottomTab');
            }
          }}
          width={'90%'}
          height={60}
          backgroundColor={Colors.orage}
          borderRadius={20}
          marginVertical={10}
          alignItems="center"
          justifyContent="center">
          <Text color={Colors.white} size={FontSize.x18} font={FONT.BOLD}>
            Continue
          </Text>
        </Touchable>
      </View>
    </View>
  );
};

export default AskInfo;

const askInfoStyles = createStyleSheet(theme => ({
  view: {
    backgroundColor: Colors.orage,
    height: 15,
    borderRadius: 20,
  },
}));
