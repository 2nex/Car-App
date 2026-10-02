// Use the same icon fonts as the native application.
const fonts: Record<string, string> = {
  AntDesign: require('react-native-vector-icons/Fonts/AntDesign.ttf'),
  EvilIcons: require('react-native-vector-icons/Fonts/EvilIcons.ttf'),
  Feather: require('react-native-vector-icons/Fonts/Feather.ttf'),
  FontAwesome: require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
  Fontisto: require('react-native-vector-icons/Fonts/Fontisto.ttf'),
  Ionicons: require('react-native-vector-icons/Fonts/Ionicons.ttf'),
  MaterialCommunityIcons: require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
  MaterialIcons: require('react-native-vector-icons/Fonts/MaterialIcons.ttf'),
  Octicons: require('react-native-vector-icons/Fonts/Octicons.ttf'),
  SimpleLineIcons: require('react-native-vector-icons/Fonts/SimpleLineIcons.ttf'),
};
const style = document.createElement('style');
style.textContent = Object.entries(fonts)
  .map(([family, url]) => `@font-face {font-family: '${family}'; src: url('${url}') format('truetype');}`)
  .join('\n');
document.head.appendChild(style);
