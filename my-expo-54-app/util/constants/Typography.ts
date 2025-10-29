export const FONT_FAMILY = {
  PRIMARY: 'Poppins',
};

export const FONT_WEIGHT = {
  REGULAR: '400' as const,
  MEDIUM: '500' as const, 
  SEMIBOLD: '600' as const,
  BOLD: '700' as const,
};

export const FONT_SIZE = {
  LABEL: 11,
  CAPTION: 12,
  BODY2: 14,
  BODY1: 16,
  HEADER7: 18,
  HEADER6: 20,
  HEADER5: 24,
  HEADER4: 28,
  HEADER3: 40,
  HEADER2: 60,
  HEADER1_REGULAR: 60,
  HEADER1_BOLD: 80,
};

export const LINE_HEIGHT = {
  LABEL: 13.2,
  CAPTION_REGULAR: 14.4,
  CAPTION_BOLD: 20,
  BODY2: 20,
  BODY1: 19.2,
  HEADER7: 21.6,
  HEADER6: 24,
  HEADER5: 28.8,
  HEADER4: 40,
  HEADER3: 48,
  HEADER2: 72,
  HEADER1: 96,
};

export const Typography = {
  // Headers
  HEADER1_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER1_BOLD,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER1,
  },
  HEADER1_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER1_REGULAR,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.HEADER2,
  },
  HEADER2_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER2,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER2,
  },
  HEADER3_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER3,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER3,
  },
  HEADER3_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER3,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.HEADER3,
  },
  HEADER4_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER4,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER4,
  },
  HEADER4_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER4,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.HEADER4,
  },
  HEADER5_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER5,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER5,
  },
  HEADER5_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER5,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.HEADER5,
  },
  HEADER6_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER6,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER6,
  },
  HEADER6_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER6,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.HEADER6,
  },
  HEADER7_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER7,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.HEADER7,
  },
  HEADER7_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.HEADER7,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.HEADER7,
  },

  // Body text
  BODY1_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.BODY1,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.BODY1,
  },
  BODY1_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.BODY1,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.BODY1,
  },
  BODY2_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.BODY2,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.BODY2,
  },
  BODY2_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.BODY2,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.BODY2,
  },

  // Small text
  CAPTION_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.CAPTION,
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: LINE_HEIGHT.CAPTION_BOLD,
  },
  CAPTION_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.CAPTION,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.CAPTION_REGULAR,
  },
  LABEL_BOLD: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.LABEL,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.LABEL,
  },
  LABEL_REGULAR: {
    fontFamily: FONT_FAMILY.PRIMARY,
    fontSize: FONT_SIZE.LABEL,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.LABEL,
  },
}; 