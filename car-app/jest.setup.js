jest.mock('react-native-linear-gradient', () => {
  const {View} = require('react-native');
  return View;
});
