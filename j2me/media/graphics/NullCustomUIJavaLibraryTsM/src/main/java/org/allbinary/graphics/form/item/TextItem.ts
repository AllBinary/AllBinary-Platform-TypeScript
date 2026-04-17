
        /* Generated Code Do Not Modify */
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CustomCustomItem } from "./CustomCustomItem.js";

import { StringComponent } from "./StringComponent.js";

export class TextItem extends CustomCustomItem implements CustomItemInterface {
        
public constructor (label: string, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(label, backgroundBasicColor, foregroundBasicColor){

            super();
            var label = label
var layout = layout
var altText = altText
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public keyPressed(keyCode: number){
var keyCode = keyCode
}


    public paintUnselected(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
}


    public getLabelStringComponent(): StringComponent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringComponent.NULL_STRING_COMPONENT;
    
}


}
                
            

