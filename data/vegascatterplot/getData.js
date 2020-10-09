import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/Saemmool/cd0b5768282d0bdb5f0e00921ae26da9/raw/659925e674a33f0a0bec2cb1fd4b4ac57dd16620/Refugeeapplicants.csv';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};