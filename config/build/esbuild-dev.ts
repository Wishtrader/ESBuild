import ESBuild from 'esbuild';
import path from 'path';
import config from './esbuild-config';

const PORT = Number(process.env.port) || 3000;

ESBuild.serve({
    servedir: config.outdir,
    port: PORT
}, {
    ...config
}).then(() => {
    console.log('Server started on http://localhost:' + PORT);
}).catch(error => {
    console.error(error);
})