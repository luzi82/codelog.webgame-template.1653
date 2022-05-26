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
    self.runtime = new lz_runtime.LzRuntime();
    self.runtime.app = self.app;
    self.runtime.app.ticker.maxFPS = 60;

    // root game object
    self.runtime.rootGo = new lz_game_object.LzGameObject(self.runtime);
    self.app.stage.addChild(self.runtime.rootGo);

    // home menu
    var home_menu = new HomeMenu(self.runtime);
    self.runtime.rootGo.addChild(home_menu);

    // window.addEventListener("resize",()=>{self.onresize();});
    // this.onresize();
  },
};

window.addEventListener("load", function(){
  GAME_MAIN.onload();
});
