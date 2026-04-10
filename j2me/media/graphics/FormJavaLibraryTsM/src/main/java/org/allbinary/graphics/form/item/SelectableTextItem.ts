
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

    

export class SelectableTextItem extends TextItem {
        
public constructor (label: string, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(label, layout, altText, backgroundBasicColor, foregroundBasicColor){

            super();
            var label = label
var layout = layout
var altText = altText
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public isFocusable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y

    var stringComponent: StringComponent = this.getLabelStringComponent()!;
        
        


    
                        if(stringComponent != 
                                    null
                                )
                        
                                    {
                                    setColor(stringComponent!.getForegroundBasicColor()!.toInt())

                                    }
                                
drawString(this.getLabel(), x +2, y, 0)
}


}
                
            

