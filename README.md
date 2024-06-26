# react-native-2024

Color Palette App:

<img src="https://github.com/joeldmyers/react-native-2024/assets/4838984/b3ed52be-46d7-400c-b239-95b5ec68b1e4" width="300">
<img src="https://github.com/joeldmyers/react-native-2024/assets/4838984/cc4f7bd2-2c29-4738-9c0b-8a8ad41907e6" width="300">

## Notes

My notes from following along with this class: https://frontendmasters.com/courses/react-native-v2/

- View is like div

- SafeAreaView - guaranteed to be below bar at top.

- Scrollview - like div that you can scroll

- Text - you have to wrap element in text to get text.

- have to do this inline style for each component - StyleSheet.create({ })

- Generally easier to use expo. Can eject if needed.

- Shake to open debugger. Can use debugger to see console.log

- Native styles don't have units. E.g., padding margin.

- https://reactnative.dev/docs/view-style-props

- Everything is flex.

- We Can use styled components! https://styled-components.com/docs/basics#react-native

- We can do multiple styles by passing in array (for cascading styles)

- Colors can look different on iOS and android. Esp greens for some reason.

- Never use 'map' to render array of items. This is for performance reasons.

- Instead, use FlatList and SectionList.

  - https://reactnative.dev/docs/flatlist
  - https://reactnative.dev/docs/sectionlist

- section list is like a list that has a title and then sections.

- it seems like flatlist is a replacement for map generally.

## Navigation

React navigation and react native navigation are two nav libraries. React native doesn't have built-in navigation.

https://reactnative.dev/docs/navigation

They recommend starting with react navigation.

React navigation is built-in with expo.

```
 npm i @react-navigation/native
```

and then

```
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

then

```
npm i @react-navigation/stack
```

Re navigation, there's often a bottom nav and when you launch the app everything available on the root level menu gets launched, so be aware of this as far as data fetching etc. re: performance.

Two main kinds of nav:

- bottom nav
- stack

With web you use onClick, with mobile, we press, use touch. TouchableOpacity, TouchableWithoutFeedback, etc.

### Testing

E2E - Detox
Unit Testing: React Native Testing Library

### Forms

Can use TextInput

https://reactnative.dev/docs/textinput

Picker - looks very different on iOS vs Android.

Switch is toggle.

### Modal

### React Native Community

Reliable 3rd party resources.

https://github.com/react-native-community

## Animations

No CSS. Can use Lottie.

## Images

Often use react-native-fast-image for better performance.

## Codepush

Send "over the air" for developers.

## Fastlane

Automating building and releasing app.
