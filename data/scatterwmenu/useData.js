import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/Saemmool/18368979d10aa142c9baee8bade19a57/raw/9975a2db5a63b1a62ad2585ee63ccedfa878230b/gistfile1.txt';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.outflows = +d.outflows;
      d.inflows = +d.inflows;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};