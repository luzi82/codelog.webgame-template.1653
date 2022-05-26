// import Sokoban from '../../game/sokoban/sokoban.js';

import * as lz_game_object from '../../lz/lz_game_object.js';
import * as PIXI from 'pixi.js';

import SokobanMap from '../../game/sokoban/sokoban_map.js';

'use strict';

export const Sokoban = (function(){

class Sokoban extends lz_game_object.LzGameObject {

  constructor(runtime){
    super(runtime);
    const self = this;
    
    self.sokobanMap = new SokobanMap(self.runtime);
    self.addChild(self.sokobanMap);
  };

};

return Sokoban;

})();

export default Sokoban;
