import vl from 'vega-lite-api';
export const viz = vl
  .markbar()
  .encode(
    vl.x().fieldT('year'),
    vl.y().fieldQ('population').scale({ zero: false }),
    vl.color().fieldN('country'),
    vl.tooltip().fieldN('population')
  );