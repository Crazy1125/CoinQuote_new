import { ScrollView, Image, StyleSheet, Dimensions, View, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
  const { width } = Dimensions.get('window');
  const height = width * 0.3;
  const scrollRef = useRef(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prevActive => prevActive >= images.length - 1 ? 0 : prevActive + 1);
    }, 3000);

    // console.log(active);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo({ x: active * width, animated: false });
  }, [active]);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={change}
        style={{ width, height }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{ width, height, resizeMode: 'cover' }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k == active ? styles.activeDot : styles.dot}
          >
            .
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -5,
    alignSelf: 'center'
  },
  dot: {
    color: '#888',
    fontSize: 50
  },
  activeDot: {
    color: '#fff',
    fontSize: 50
  }
});

export default ImageSlider;