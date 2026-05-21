
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { NumberStringHud } from '../../../../../../../org/allbinary/game/layer/hud/basic/NumberStringHud.js';
      
import { BasicColor } from '../../../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { MyFont } from '../../../../../../../org/allbinary/graphics/font/MyFont.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ScoreHudWidget extends NumberStringHud {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(maxscore: number, location: number, direction: number): ScoreHudWidget{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ScoreHudWidget(maxscore, location, direction, 14, MyFont.getInstance()!.getSize() *5, 2, BasicColorFactory.getInstance()!.GREY);
    
}

public constructor (maxscore: number, location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor){
            super("Pts ", maxscore, location, direction, maxHeight, maxWidth, bufferZone, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

