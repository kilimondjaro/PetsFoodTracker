import { getLinePath } from './pathFunctions';

describe('Paws Background lib', () => {
  describe('check getLinePath', () => {
    it('when two points are given', () => {
      // given
      const point1 = { x: 10, y: 100 };
      const point2 = { x: 30, y: 50 };

      // y = k*x + b
      // k = (y2 - y1) / (x2 - x1) = -50 / 20 = -2.5
      // 100 = -2.5 * 10 + b; b = 125
      // y = -2.5 * x + 125

      // when
      const path = getLinePath(point1, point2);

      // then
      expect(path.path).toEqual([
        { x: 10, y: 100 },
        { x: 12, y: 92 },
        { x: 15, y: 85 },
        { x: 18, y: 78 },
        { x: 21, y: 71 },
        { x: 24, y: 64 },
        { x: 27, y: 57 },
        { x: 30, y: 50 },
        { x: 32, y: 42 },
      ]);
      expect(path.rotation).toEqual(0.3805063771123649);
    });
  });
});
