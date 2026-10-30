
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot   
        */
        
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { BasicHudFactory } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const BasicHudFactory

import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameNotificationHud } from './GameNotificationHud.js';
//sameFolderImports - not GWT import - same folder const GameNotificationHud

export class NoGameNotificationHudSingleton
            extends Object
         {
        

    private static readonly instance: NoGameNotificationHudSingleton = new NoGameNotificationHudSingleton();

    public static getInstance(): NoGameNotificationHudSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoGameNotificationHudSingleton.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private gameNotificationHud: GameNotificationHud = GameNotificationHud.NULL_GAME_NOTIFICATION;

private constructor (){

            super();
        
 try { 
    let basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;;
    

//inner=true member= isStatic=
class NoGameGameNotificationHud extends GameNotificationHud {
        

 constructor (){
            super(basicHudFactory!.TOPCENTER, basicHudFactory!.HORIZONTAL, 2, BasicColorFactory.getInstance()!.RED);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.updateMaxWidth= 40;
    
this.updateMaxHeight= 14;
    
}


}

                    //Otherwise - statement - EmptyStmt

this.gameNotificationHud= new NoGameGameNotificationHud();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
}


    public getGameNotificationHud(): GameNotificationHud{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameNotificationHud;
    
}


}

