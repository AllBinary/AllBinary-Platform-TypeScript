
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

        


import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil

import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonFactory } from './TouchButtonFactory.js';
//not GWT import - same folder const TouchButtonFactory
import { TouchButton } from './TouchButton.js';
//not GWT import - same folder const TouchButton

export class TouchButtonsPaintable extends Paintable {
        

    readonly foregroundBasicColor: BasicColor;

    readonly foregroundColor: number;

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    private readonly touchButtonFactory: TouchButtonFactory = TouchButtonFactory.getInstance()!;

public constructor (basicColor: BasicColor){

            super();
        this.foregroundBasicColor= basicColor;
    
this.foregroundColor= basicColor!.intValue();
    
}


    public paint(graphics: Graphics){

    var list: BasicArrayList = this.touchButtonFactory!.getList()!;;
    
this.basicSetColorUtil!.setBasicColorP3(graphics, this.foregroundBasicColor, this.foregroundColor);
    

    var touchButton: TouchButton;;
    




                        for (
    var index: number = list.size()!;--index >= 0; )
        {
touchButton= list.objectArray[index]! as TouchButton;
    
touchButton!.paint(graphics);
    
}





                        for (
    var index: number = list.size()!;--index >= 0; )
        {
touchButton= list.objectArray[index]! as TouchButton;
    
touchButton!.paintHint(graphics);
    
}

}


}



