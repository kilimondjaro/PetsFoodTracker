import type { Transforms2d } from '@shopify/react-native-skia';
import {
  BackdropBlur,
  Canvas,
  Fill,
  FitBox,
  Group,
  interpolate,
  Path,
  translate,
  useClockValue,
  useComputedValue,
  useValue,
  useValueEffect,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import type { PawsBackgroundProps } from './types';
import { getLinePath, getRandomInt } from './utils/pathFunctions';

const interval = 2000;

export const PawsBackground = ({}: PawsBackgroundProps) => {
  const clock = useClockValue();

  const generateNewPath = () =>
    getLinePath(
      vec(0, getRandomInt(Dimensions.get('screen').height)),
      vec(
        Dimensions.get('screen').width,
        getRandomInt(Dimensions.get('screen').height)
      )
    );

  const pathRef = React.useRef(generateNewPath());
  const stepIndex = React.useRef(0);

  const getIndex = () =>
    Math.floor(clock.current / interval) % pathRef.current.path.length;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const paw1TranslateValue = useComputedValue<Transforms2d>(() => {
    const index = getIndex();

    if (index !== stepIndex.current) {
      if (index === 0) {
        pathRef.current = generateNewPath();
      }
      stepIndex.current = index;
    }

    return [
      ...translate({
        x: pathRef.current.path[index]?.x || 0,
        y: pathRef.current.path[index]?.y || 0,
      }),
      { rotateZ: pathRef.current.rotation },
      {
        scale: interpolate(
          (clock.current % interval) / interval,
          [0, 0.05, 0.25, 0.5],
          [1.2, 1, 1, 1.2]
        ),
      },
    ];
  }, [clock]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const paw2TranslateValue = useComputedValue<Transforms2d>(() => {
    const index = getIndex();

    return [
      ...translate({
        x: pathRef.current.path[index]?.x || 0,
        y: (pathRef.current.path[index]?.y || 0) + 100,
      }),
      { rotateZ: pathRef.current.rotation },
      {
        scale: interpolate(
          (clock.current % interval) / interval,
          [0.5, 0.55, 0.75, 1],
          [1.2, 1, 1, 1.2]
        ),
      },
    ];
  }, [clock]);

  const blur = useValue(15);
  const opacity1 = useValue(1);
  const opacity2 = useValue(0);

  useValueEffect(clock, () => {
    blur.current = interpolate(
      (clock.current % interval) / interval,
      [0, 0.15, 0.2, 0.5, 0.5, 0.6, 1],
      [15, 2, 2, 2, 15, 2, 2]
    );
    opacity1.current = interpolate(
      (clock.current % interval) / interval,
      [0, 0.15, 0.25, 0.5, 1],
      [0, 1, 1, 0, 0]
    );

    opacity2.current = interpolate(
      (clock.current % interval) / interval,
      [0, 0.5, 0.65, 0.75, 1],
      [0, 0, 1, 1, 0]
    );
  });

  const pathBoxInitialDimensions = { x: 0, y: 0, width: 500, height: 500 };
  const pathBoxResultDimensions = { x: 0, y: 0, width: 70, height: 70 };

  return (
    <Canvas style={styles.canvas}>
      <Fill color="white" />
      <Group transform={paw1TranslateValue}>
        <FitBox src={pathBoxInitialDimensions} dst={pathBoxResultDimensions}>
          <Path opacity={opacity1} color="black" path={pawPath} />
        </FitBox>
      </Group>

      <Group transform={paw2TranslateValue}>
        <FitBox src={pathBoxInitialDimensions} dst={pathBoxResultDimensions}>
          <Path opacity={opacity2} color="black" path={pawPath} />
        </FitBox>
      </Group>
      <BackdropBlur blur={blur} />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});

const pawPath =
  'm281.78 0c-0.88 0.011256-1.79 0.054519-2.69 0.125-35.82 6.1835-55.52 44.064-58.37 77.469-4.17 30.316 9.19 69.266 42.47 76.066 4.83 0.92 9.84 0.5 14.56-0.78 40.08-13.44 58.01-60.908 52.22-100.22-1.69-25.396-20.83-53.009-48.19-52.66zm-151.87 1.625c-22.28 0.5468-39.63 23.138-43.16 44.375-7.441 42.074 11.698 94.35 55.53 107.66 4.11 0.89 8.35 0.98 12.5 0.34 29.63-4.94 42.18-38.15 40.94-64.969-0.89-35.372-19.27-76.273-56-86.218-3.36-0.8909-6.63-1.2661-9.81-1.188zm248.93 119.5c-38.53 2.31-64.95 40.76-68.72 76.66-5.09 25.89 8.71 60.53 38.26 62.6 41.19-0.51 69.3-44.53 70.46-82.41 2.61-25.05-12.15-55.46-40-56.85zm-337.28 8.54c-16.394-0.14-32.517 9.68-37.874 26.34-14.293 44.58 14.408 101.04 61.624 110.41 19.706 3.37 37.018-11.76 41.908-29.97 10.35-38.95-10.915-84.17-46.908-101.85-5.863-3.29-12.334-4.88-18.75-4.93zm172.75 79.93c-32.14 0.07-64.78 16.38-85.59 40.66-22.48 28.3-40.892 61.23-48.095 96.94-8.751 25.7 11.083 55.29 38.565 55.47 33.06 0.91 61.47-21.79 94.34-23.47 27.89-4.25 52.86 10.25 77.94 19.75 21.35 9.13 50.85 5.63 61.75-17.35 8.57-23.41-4.05-48.39-14.5-69.18-21.32-33.76-44.17-69.24-79.13-90.32-14.01-8.68-29.58-12.53-45.28-12.5z';
