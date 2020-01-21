
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

  lerpv4: (v1, v2, t) => {
    if (t === undefined) { t = 0; }

    const x = v1[0] + t * (v2[0] - v1[0]);
    const y = v1[1] + t * (v2[1] - v1[1]);
    const z = v1[2] + t * (v2[2] - v1[2]);
    const w = v1[3] + t * (v2[3] - v1[3]);

    return [x, y, z, w];
  },

  getGridColor: (x, y) => {
    const d = 0.1;
    const colors = [
      [  d, 1, 1, 1],
      [1,   d, 1, 1],
      [1, 1,   d, 1],
      [1, 1, 1, 1]
    ];
    const c1 = MathUtils.lerpv4(colors[0], colors[1], x);
    const c2 = MathUtils.lerpv4(colors[2], colors[3], x);
    return MathUtils.lerpv4(c1, c2, y);
  }, 
};

export { MathUtils };