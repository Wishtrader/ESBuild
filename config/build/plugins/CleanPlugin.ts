import {Plugin} from 'ESBuild';
import {rm} from 'fs/promises';

export const CleanPlugin: Plugin = {
    name: 'CleanPlugin',
    setup(build) {
       build.onStart(async () => {
           try {
               const outdir = build.initialOptions.outdir
               if(outdir) {
                   await rm(outdir, {recursive: true});
               }
           } catch (err) {
               console.error(err);
           }
       })
    },
}