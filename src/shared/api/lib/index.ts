export const getPathArray = (path?: string | string[]) =>
  path ? (Array.isArray(path) ? path : [path]) : [];
