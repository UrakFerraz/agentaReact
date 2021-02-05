/* eslint-disable linebreak-style */

export default function isRetina(img1x, img2x) {
  if (window.devicePixelRatio >= 2) {
    return img2x;
  }
  return img1x;
}
