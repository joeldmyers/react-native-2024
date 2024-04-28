# react-native-2024

Notes

- View is like div
- SafeAreaView - guaranteed to be below bar at top.
- Scrollview - like div that you can scroll
- Text - you have to wrap element in text to get text.
- have to do this inline style for each component - StyleSheet.create({ })

Use expo

Shake to open debugger.

Can do debugger to see console.log

Native styles don't have units. E.g., padding margin.

https://reactnative.dev/docs/view-style-props

Everything is flex.

Can use styled components!

https://styled-components.com/docs/basics#react-native

can do multiple styles by passing in array (for cascading styles)

Colors can look different on iOS and android. Esp greens for some reason.

Never use 'map' to render array of items. This is for performance reasons.

Instead, use FlatList and SectionList.
https://reactnative.dev/docs/flatlist
https://reactnative.dev/docs/sectionlist

section list is like a list that has a title and then sections.

it seems like flatlist is a replacement for map generally.
