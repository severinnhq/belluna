import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const INPUT = path.join(process.cwd(), 'public/shopi.gif');
const OUTPUT = path.join(process.cwd(), 'public/shopi-compressed.gif');

const TARGET_MB = 20;
const TARGET_BYTES = TARGET_MB * 1024 * 1024;

function compress({ colors, lossy }) {
  return new Promise((resolve, reject) => {
    const cmd = `
      gifsicle "${INPUT}" \
      --optimize=3 \
      --colors ${colors} \
      --lossy=${lossy} \
      -o "${OUTPUT}"
    `;

    exec(cmd, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function run() {
  if (!fs.existsSync(INPUT)) {
    console.error('Input GIF not found');
    return;
  }

  let colors = 256;
  let lossy = 20;

  while (true) {
    await compress({ colors, lossy });

    const size = fs.statSync(OUTPUT).size;

    console.log(`Size: ${(size / 1024 / 1024).toFixed(2)} MB`);

    if (size <= TARGET_BYTES) {
      console.log('Target reached');
      break;
    }

    if (colors > 128) colors -= 32;
    else lossy += 10;

    if (lossy > 200) {
      console.log('Quality floor reached');
      break;
    }
  }
}

run();
