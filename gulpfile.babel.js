import path from 'path';
import requireDir from 'require-dir';

requireDir(path.join(__dirname, './tasks'), { recurse: true });
