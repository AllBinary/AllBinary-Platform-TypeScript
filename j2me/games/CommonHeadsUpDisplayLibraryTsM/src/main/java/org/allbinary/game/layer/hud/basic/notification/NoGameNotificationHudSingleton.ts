
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
        



import { BasicHudFactory } from "../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { BasicColorFactory } from "../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class NoGameNotificationHudSingleton
            extends Object
         {
        

    private static readonly instance: NoGameNotificationHudSingleton = new NoGameNotificationHudSingleton();
        
        

    public static getInstance(): NoGameNotificationHudSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private gameNotificationHud: GameNotificationHud = GameNotificationHud.NULL_GAME_NOTIFICATION;
        
        
private constructor (){

            super();
            
        try {
            
    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;
        
        

this.gameNotificationHud= GameNotificationHud(basicHudFactory!.TOPCENTER, basicHudFactory!.HORIZONTAL, 14, 40, 2, BasicColorFactory.getInstance()!.RED)
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}


    public getGameNotificationHud(): GameNotificationHud{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameNotificationHud;
    
}


}
                
            

