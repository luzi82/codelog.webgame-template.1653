import * as PIXI from 'pixi.js';
import * as lz_runtime from './lz/lz_runtime.js';
import * as lz_game_object from './lz/lz_game_object.js';

import HomeMenu from './game/home_menu/home_menu.js';

const GAME_MAIN = {

  LOGIC_WIDTH:1280,
  LOGIC_HEIGHT:720,

  onload:function(){
    const self = this;

    this.app = new PIXI.Application({ width: this.LOGIC_WIDTH, height: this.LOGIC_HEIGHT });
    this.app.view.style.position="absolute";
    document.body.appendChild(this.app.view);

    // runtime
    self.runtime = new lz_runtime.LzRuntime(self.app);

    // root game object

    // home menu
    self.runtime.setScene(new HomeMenu(self.runtime));

    // window.addEventListener("resize",()=>{self.onresize();});
    // this.onresize();
  },
};

window.addEventListener("load", function(){
  GAME_MAIN.onload();
});
