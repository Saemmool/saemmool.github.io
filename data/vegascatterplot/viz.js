import vl from 'vega-lite-api';
export const viz = vl
  .markCircle({
    size: 10,
    opacity: 1
  })
  .encode(
    vl.x().fieldT('year').scale({ zero: false }),
    vl.y().fieldQ('population'),
    vl.color().fieldN('country'),
    vl.size().fieldQ('population')
    vl.tooltip().fieldN('country')
  );