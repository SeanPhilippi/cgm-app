import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './Deck';
import uuid from 'react-uuid';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'https://web.archive.org/web/20170305162243/http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'https://web.archive.org/web/20170305162243/http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'https://web.archive.org/web/20170305162243/http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'https://web.archive.org/web/20170305162243/http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'https://web.archive.org/web/20170305162243/http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'https://web.archive.org/web/20170305162243/http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'https://web.archive.org/web/20170305162243/http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'https://web.archive.org/web/20170305162243/http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

const Practice = () => {
  const [position, setPosition] = useState(new Animated.ValueXY(0, 0));

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 200, y: 500 },
      useNativeDriver: false,
    }).start();
  }, []);

  const renderCard = item => {
    return (
      <Card key={uuid()}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Image resizeMode='cover' source={{ uri: item.uri }} />
        <Button
          icon={{ name: 'code' }}
          backgroundColor='#03A9F4'
          title='View Now!'
        />
      </Card>
    );
  };

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.container}>
        <Deck data={DATA} renderCard={renderCard} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Practice;
