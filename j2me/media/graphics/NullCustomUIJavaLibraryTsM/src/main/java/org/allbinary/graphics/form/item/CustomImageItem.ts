
        /* Generated Code Do Not Modify */
        



import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CustomItem } from "./CustomItem.js";

export class CustomImageItem extends CustomItem {
        

    yOffset: number = 0;
        
        
public constructor (label: string, image: Image, layout: number, altText: string, basicColor: BasicColor, yOffset: number){
            super(label, basicColor, basicColor);
                    var label = label
var image = image
var layout = layout
var altText = altText
var basicColor = basicColor
var yOffset = yOffset


                            //For kotlin this is before the body of the constructor.
                    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullCanvas.NULL_IMAGE;
    
}


}
                
            

