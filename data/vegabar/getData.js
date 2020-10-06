import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/Saemmool/4cd2bebea3d3c03c0311a32c6f3f7e00/raw/80d6884c9f2f636bb35ef4210a71f588e8313e81/Refugees%2520in%2520Korea';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};