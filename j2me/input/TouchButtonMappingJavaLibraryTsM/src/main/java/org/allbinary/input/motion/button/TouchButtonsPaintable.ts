
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorSetUtil } from "../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class TouchButtonsPaintable extends Paintable {
        

    readonly foregroundBasicColor: BasicColor

    readonly foregroundColor: number

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    private readonly touchButtonFactory: TouchButtonFactory = TouchButtonFactory.getInstance()!;
        
        
public constructor (basicColor: BasicColor){

            super();
            var basicColor = basicColor
this.foregroundBasicColor= basicColor
this.foregroundColor= basicColor!.toInt()
}


    public paint(graphics: Graphics){
var graphics = graphics

    var list: BasicArrayList = touchButtonFactory!.getList()!;
        
        

this.basicSetColorUtil!.setBasicColorP(graphics, this.foregroundBasicColor, this.foregroundColor)

    var touchButton: TouchButton





                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {
touchButton= list.objectArray[index]! as TouchButton
touchButton!.paint(graphics)
}





                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {
touchButton= list.objectArray[index]! as TouchButton
touchButton!.paintHint(graphics)
}

}


}
                
            

