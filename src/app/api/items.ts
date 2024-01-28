import { NextApiRequest, NextApiResponse } from 'next';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  // Add more items as needed
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(items);
};