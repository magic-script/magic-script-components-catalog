
const MathUtils = {
  rotateBy: (angle, axis) => {
    const s = Math.sin(angle / 2);
    const quat = {
      x: axis[0] * s,
      y: axis[1] * s,
      z: axis[2] * s,
      w: Math.cos(angle / 2),
    };
    return [quat.x, quat.y, quat.z, quat.w];
  },
};

export { MathUtils };