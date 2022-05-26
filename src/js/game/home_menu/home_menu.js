// import HomeMenu from '../../game/home_menu/home_menu.js';

import * as lz_game_object from '../../lz/lz_game_object.js';
import * as PIXI from 'pixi.js';
import HomeMenuBtn from '../../game/home_menu/home_menu_btn.js';

'use strict';

export const HomeMenu = (function(){

class HomeMenu extends lz_game_object.LzGameObject {

  constructor(runtime){
    super(runtime);
    const self = this;
    
    self.testBtn = new HomeMenuBtn(self.runtime);
    self.addChild(self.testBtn);
  };

};

return HomeMenu;

})();

export default HomeMenu;
