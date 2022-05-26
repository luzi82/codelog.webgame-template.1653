// import HomeMenuBtn from '../../game/home_menu/home_menu_btn.js';

import * as lz_game_object from '../../lz/lz_game_object.js';
import * as PIXI from 'pixi.js';

'use strict';

export const HomeMenuBtn = (function(){

class HomeMenuBtn extends lz_game_object.LzGameObject {

  constructor(runtime){
    super(runtime);
    const self = this;

    self.graphics = new PIXI.Graphics();
    self.graphics.beginFill(0xFFFFFF);
    self.graphics.drawRect(0,0,100,100);
    self.graphics.endFill();
    self.graphics.tint = 0x00FFFF;
    self.addChild(self.graphics);
    
    self.interactive = true;
    self.hitArea = new PIXI.Rectangle(0,0,100,100);
    self.mousedown = function(ev){self.onMouseDown();};
    self.mouseover = function(ev){self.onMouseOver();};
    self.mouseout  = function(ev){self.onMouseOut();};
  };

  onMouseDown() {
    const self=this;
    console.log("QUZLBKIT");
  };

  onMouseOver() {
    console.log("onMouseOver");
    const self=this;
    self.graphics.tint = 0xFFFF00;
  };

  onMouseOut() {
    console.log("onMouseOut");
    const self=this;
    self.graphics.tint = 0x00FFFF;
  };

};

return HomeMenuBtn;

})();

export default HomeMenuBtn;
