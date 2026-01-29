import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = 3000

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(express.static(path.join(_dirname, 'public')))

app.use(express.json())

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});