'use strict';

export const LzRuntime = (function(){

class LzRuntime {
  constructor(){
    this.actBusy = false;
    this.app = null;
  };
  
  act(func,callback=null){
    const self = this;

    if(self.actBusy){
      if(callback){self.app.ticker.addOnce(callback);}
      return false;
    }
    self.actBusy = true;

    Promise.resolve()
    .then(()=>{return new Promise(func);})
    .catch((reason)=>{
      //console.error(`LEMLPBUV act error, reason=${reason}`);
      console.error(reason);
    })
    .finally(()=>{
      self.actBusy = false;
      if(callback){self.app.ticker.addOnce(callback);}
    });
    
    return true;
  };
};

return LzRuntime;

})();
