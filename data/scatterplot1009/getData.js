import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/Saemmool/cd0b5768282d0bdb5f0e00921ae26da9/raw/e967ef049f2194e6f18c51689f6e5f994d734ef2/Refugeeapplicants.csv';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};