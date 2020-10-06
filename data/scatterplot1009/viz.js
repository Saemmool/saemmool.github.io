import vl from 'vega-lite-api';
export const viz = vl
  .markCircle({
    fill: true,
    stroke: false,
    size: 10,
    opacity: 0.5
  })
  .encode(
    vl.x().fieldT('year').scale({ zero: false }),
    vl.y().fieldQ('population'),
    vl.tooltip().fieldN('country')
  );