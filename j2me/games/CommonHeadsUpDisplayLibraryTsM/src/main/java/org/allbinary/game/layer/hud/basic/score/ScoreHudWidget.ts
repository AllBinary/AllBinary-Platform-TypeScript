
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
        



import { NumberStringHud } from "../../../../../../../org/allbinary/game/layer/hud/basic/NumberStringHud.js";

    
import { BasicColor } from "../../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyFont } from "../../../../../../../org/allbinary/graphics/font/MyFont.js";

    

export class ScoreHudWidget extends NumberStringHud {
        
public constructor (maxscore: number, location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor)                        

                            : super("Pts ", maxscore, location, direction, maxHeight, maxWidth, bufferZone, basicColor){

            super();
            var maxscore = maxscore
var location = location
var direction = direction
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (maxscore: number, location: number, direction: number, maxWidth: number)                        

                            : this(maxscore, location, direction, 14, maxWidth, 2, BasicColorFactory.getInstance()!.GREY){

            super();
            var maxscore = maxscore
var location = location
var direction = direction
var maxWidth = maxWidth


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (maxscore: number, location: number, direction: number)                        

                            : this(maxscore, location, direction, 14, MyFont.getInstance()!.getSize() *5, 2, BasicColorFactory.getInstance()!.GREY){

            super();
            var maxscore = maxscore
var location = location
var direction = direction


                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

