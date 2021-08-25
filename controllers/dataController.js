import { importDataRemote } from '../seeder.js';

export const resetData = async (req, res) => {
  try {
    await importDataRemote();
    res.status(200).json({message: 'data reset'});
  } catch (e) {
    throw new Error('data reset controller error');
  }
}