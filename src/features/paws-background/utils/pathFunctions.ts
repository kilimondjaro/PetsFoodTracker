import type { SkPoint } from '@shopify/react-native-skia';
import _ from 'lodash';

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const getLinePath = (p1: SkPoint, p2: SkPoint) => {
  const k = (p2.y - p1.y) / (p2.x - p1.x);
  const b = p2.y - k * p2.x;

  const lineFn = (x: number) => k * x + b;

  const angle = Math.atan(k) + Math.PI / 2;

  // const lineLength = Math.sqrt(
  //   Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
  // );

  const stepsCount = 7;
  const xStep = (p2.x - p1.x) / stepsCount;

  const arr = _.times(stepsCount + 2, Number);

  const path = arr.map((i) => ({
    x: Math.floor(p1.x + xStep * i),
    y: Math.floor(lineFn(p1.x + xStep * i)),
  }));

  return {
    path,
    rotation: angle,
  };
};
