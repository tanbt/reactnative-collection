// How to use va-class-styles

// import { ClassStyles } from '@/util/constants/va-class-styles';

// <View style={ClassStyles['va-primary-500']}>
//   <Text>Hello</Text>
// </View>

// or 

// <Text className="va-body-2-bold">Welcome</Text>
// <View className="va-primary-500 va-shadow-ds_1-0 va-mobile-grid" />

export const ClassStyles: { [key: string]: any } = {
  'va-primary-500': {
    backgroundColor: '#ed1b64ff',
  },
  'va-secondary-500': {
    backgroundColor: '#383f99ff',
  },
  'va-tertiary-500': {
    backgroundColor: '#a862eaff',
  },
  'va-dark-500': {
    backgroundColor: '#181214ff',
  },
  'va-gray-500': {
    backgroundColor: '#9c9497ff',
  },
  'va-light-500': {
    backgroundColor: '#d9e1e1ff',
  },
  'va-white-500': {
    backgroundColor: '#ffffffff',
  },
  'va-primary-primary-100': {
    backgroundColor: '#f1c7d3ff',
  },
  'va-primary-primary-200': {
    backgroundColor: '#de96aaff',
  },
  'va-primary-primary-300': {
    backgroundColor: '#d2728dff',
  },
  'va-primary-primary-400': {
    backgroundColor: '#c74469ff',
  },
  'va-primary-primary-600': {
    backgroundColor: '#841837ff',
  },
  'va-primary-primary-700': {
    backgroundColor: '#700f2aff',
  },
  'va-primary-primary-800': {
    backgroundColor: '#640c25ff',
  },
  'va-primary-primary-900': {
    backgroundColor: '#650722ff',
  },
  'va-primary-primary-90%': {
    backgroundColor: '#9b2748e6',
  },
  'va-primary-primary-80%': {
    backgroundColor: '#9b2748cc',
  },
  'va-primary-primary-20%': {
    backgroundColor: '#9b274833',
  },
  'va-primary-primary-10%': {
    backgroundColor: '#9b27481a',
  },
  'va-primary-primary-5%': {
    backgroundColor: '#9b27480d',
  },
  'va-secondary-secondary-100': {
    backgroundColor: '#e1f1bcff',
  },
  'va-secondary-secondary-200': {
    backgroundColor: '#cee993ff',
  },
  'va-secondary-secondary-300': {
    backgroundColor: '#bcde6bff',
  },
  'va-secondary-secondary-400': {
    backgroundColor: '#afd751ff',
  },
  'va-secondary-secondary-600': {
    backgroundColor: '#97bd33ff',
  },
  'va-secondary-secondary-700': {
    backgroundColor: '#88a52aff',
  },
  'va-secondary-secondary-800': {
    backgroundColor: '#798d21ff',
  },
  'va-secondary-secondary-900': {
    backgroundColor: '#626615ff',
  },
  'va-secondary-secondary-90%': {
    backgroundColor: '#a3d139e6',
  },
  'va-secondary-secondary-80%': {
    backgroundColor: '#a3d139cc',
  },
  'va-secondary-secondary-20%': {
    backgroundColor: '#a3d13933',
  },
  'va-secondary-secondary-10%': {
    backgroundColor: '#a3d1391a',
  },
  'va-secondary-secondary-5%': {
    backgroundColor: '#a3d1390d',
  },
  'va-tertiary-tertiary-100': {
    backgroundColor: '#eee0fbff',
  },
  'va-tertiary-tertiary-200': {
    backgroundColor: '#dcc0f7ff',
  },
  'va-tertiary-tertiary-300': {
    backgroundColor: '#cba1f2ff',
  },
  'va-tertiary-tertiary-400': {
    backgroundColor: '#b981eeff',
  },
  'va-tertiary-tertiary-600': {
    backgroundColor: '#864ebbff',
  },
  'va-tertiary-tertiary-700': {
    backgroundColor: '#653b8cff',
  },
  'va-tertiary-tertiary-800': {
    backgroundColor: '#43275eff',
  },
  'va-tertiary-tertiary-900': {
    backgroundColor: '#22142fff',
  },
  'va-tertiary-tertiary-90%': {
    backgroundColor: '#a862eae6',
  },
  'va-tertiary-tertiary-80%': {
    backgroundColor: '#a862eacc',
  },
  'va-tertiary-tertiary-20%': {
    backgroundColor: '#a862ea33',
  },
  'va-tertiary-tertiary-10%': {
    backgroundColor: '#a862ea1a',
  },
  'va-tertiary-tertiary-5%': {
    backgroundColor: '#a862ea0d',
  },
  'va-dark-dark-90%': {
    backgroundColor: '#181214e6',
  },
  'va-dark-dark-80%': {
    backgroundColor: '#181214cc',
  },
  'va-dark-dark-20%': {
    backgroundColor: '#18121433',
  },
  'va-dark-dark-10%': {
    backgroundColor: '#1812141a',
  },
  'va-dark-dark-5%': {
    backgroundColor: '#1812140d',
  },
  'va-gray-gray-90%': {
    backgroundColor: '#9c9497e6',
  },
  'va-gray-gray-80%': {
    backgroundColor: '#9c9497cc',
  },
  'va-gray-gray-20%': {
    backgroundColor: '#9c949733',
  },
  'va-gray-gray-10%': {
    backgroundColor: '#9c94971a',
  },
  'va-gray-gray-5%': {
    backgroundColor: '#9c94970d',
  },
  'va-light-light-90%': {
    backgroundColor: '#d9e1e1e6',
  },
  'va-light-light-80%': {
    backgroundColor: '#d9e1e1cc',
  },
  'va-light-light-20%': {
    backgroundColor: '#d9e1e133',
  },
  'va-light-light-10%': {
    backgroundColor: '#d9e1e11a',
  },
  'va-light-light-5%': {
    backgroundColor: '#d9e1e10d',
  },
  'va-white-white-90%': {
    backgroundColor: '#ffffffe6',
  },
  'va-white-white-80%': {
    backgroundColor: '#ffffffcc',
  },
  'va-white-white-20%': {
    backgroundColor: '#ffffff33',
  },
  'va-white-white-10%': {
    backgroundColor: '#ffffff1a',
  },
  'va-white-white-5%': {
    backgroundColor: '#ffffff0d',
  },
  'va-color-option-color-option-1': {
    backgroundColor: '#30be82ff',
  },
  'va-color-option-color-option-2': {
    backgroundColor: '#30beb6ff',
  },
  'va-color-option-color-option-3': {
    backgroundColor: '#5d30beff',
  },
  'va-color-option-color-option-4': {
    backgroundColor: '#304fbeff',
  },
  'va-gradient-1': {
    backgroundImage: 'linear-gradient(135deg, #f74e89ff, #af68ddff)',
  },
  'va-gradient-2': {
    backgroundImage: 'linear-gradient(135deg, #30beb6ff, #3069beff)',
  },
  'va-gradient-3': {
    backgroundImage: 'linear-gradient(135deg, #5d30beff, #b330beff)',
  },
  'va-header-1-bold': {
    fontSize: 80,
    fontWeight: 600,
    lineHeight: 96,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-1-regular': {
    fontSize: 60,
    fontWeight: 400,
    lineHeight: 72,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-2-bold': {
    fontSize: 60,
    fontWeight: 600,
    lineHeight: 72,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-3-bold': {
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 48,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-3-regular': {
    fontSize: 40,
    fontWeight: 400,
    lineHeight: 48,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-4-bold': {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 40,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-4-regular': {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 40,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-5-bold': {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 28.8,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-5-regular': {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 28.8,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-6-bold': {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-6-regular': {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-7-bold': {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 21.6,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-header-7-regular': {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21.6,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-body-1-bold': {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 19.2,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-body-1-regular': {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19.2,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-body-2-bold': {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-body-2-regular': {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-caption-bold': {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-caption-regular': {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 14.4,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-label-bold': {
    fontSize: 11,
    fontWeight: 600,
    lineHeight: 13.2,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-label-regular': {
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 13.2,
    letterSpacing: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  'va-ds-1-0': {
    shadowColor: '#00000003',
    shadowOffset: { width: 0, height: 38.51852035522461 },
    shadowRadius: 25.481481552124023,
    shadowOpacity: 1,
  },
  'va-ds-1-1': {
    shadowColor: '#00000005',
    shadowOffset: { width: 0, height: 100 },
    shadowRadius: 80,
    shadowOpacity: 1,
  },
  'va-mobile-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
};