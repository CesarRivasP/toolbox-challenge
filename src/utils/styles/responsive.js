import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size) => {
  const relation = SCREEN_HEIGHT / guidelineBaseHeight;

  return Math.min(1.2, relation) * size;
};
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const NAVIGATION_BAR_HEIGHT = verticalScale(72);

export { scale, verticalScale, moderateScale, NAVIGATION_BAR_HEIGHT };
