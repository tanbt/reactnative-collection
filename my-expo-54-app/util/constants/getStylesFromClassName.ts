// import React from 'react';
// import { View, Text } from 'react-native';
// import { getStylesFromClassName } from './getStylesFromClassName';

// export default function MyComponent() {
//   return (
//     <View style={getStylesFromClassName('va-primary-500 va-shadow-ds_1-0 va-mobile-grid')}>
//       <Text style={getStylesFromClassName('va-body-2-bold')}>Hello React Native</Text>
//     </View>
//   );
// }


import { ClassStyles } from './va-class-styles';

export function getStylesFromClassName(className: string): any[] {
  if (!className) return [];

  return className
    .split(/\s+/)
    .map((cls) => ClassStyles[cls])
    .filter(Boolean);
}