import Fs from 'fs';
import Colors from 'colors';
import Stylus from 'stylus';
import { fileURLToPath } from 'url';

class Framework {
  
  static createTree() {
    let tree = [
      './client/assets',
      './client/js',
      './client/views',
      './coverage',
      './fixtures',
      './public',
      './public/css',
      './public/js',
      './public/media',
      './reports',
      './scripts',
      './server/controllers',
      './server/middlewares',
      './server/models',
      './test',
    ];
    
    let files = [
      '.gitignore',
      'test/0.reference.md'
    ];

    // Structure
    for (var i = 0; i < tree.length; i++) {
      let dir = tree[i];
      if (!Fs.existsSync(dir)){
        Fs.mkdirSync(dir, { recursive: true });
        this.createGitKeepFile(dir);
        console.log(`Created folder ${dir}`);
      }
    }
    
    // Files
    for (var i = 0; i < files.length; i++) {
      let filePath = files[i];
      this.copyFiles(filePath);
      console.log(`Copied file ${filePath}`);
    }
  }
  
  static createGitKeepFile(dir) {
    Fs.writeFileSync(`${dir}/.gitkeep`, '');
  }
  
  static copyFiles(filePath) {
    Fs.copyFileSync(`./src/file-templates/${filePath}`, `./${filePath}`, Fs.constants.COPYFILE_FICLONE);
  }
  
}

export default Framework;
