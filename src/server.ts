import mongoose from 'mongoose';
import app from './app';
import config from './config';

const main = async () => {
  await mongoose.connect(config.db_Url as string);
};
app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

main();
