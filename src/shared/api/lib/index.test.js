import { getPathArray } from './index';

describe('API Lib', () => {
  describe('check getPathArray', () => {
    it('when no ids', () => {
      const ids = getPathArray();
      expect(ids).toEqual([]);
    });
    it('when single id', () => {
      const ids = getPathArray('id');
      expect(ids).toEqual(['id']);
    });
    it('when multiple ids', () => {
      const ids = getPathArray(['id1', 'id2']);
      expect(ids).toEqual(['id1', 'id2']);
    });
  });
});
