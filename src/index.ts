import { Reopa } from './reopa';

const app = new Reopa();
app.on('GET', '/', (req, res) => {
  return res.end('Hello, Reopa!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});