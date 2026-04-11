
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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

    
import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { CustomImageItem } from "../../../../../org/allbinary/graphics/form/item/CustomImageItem.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { LayerInterfaceFactoryInterface } from "../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js";

    

export class LayerInterfaceFactoryImageItem extends CustomImageItem {
        

    private readonly animationArray: Animation[]

    private readonly layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface
public constructor (label: string, img: Image, layout: number, altText: string, basicColor: BasicColor, animationArray: Animation[], layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface)                        

                            : super(label, img, layout, altText, basicColor){

            super();
            var label = label
var img = img
var layout = layout
var altText = altText
var basicColor = basicColor
var animationArray = animationArray
var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.animationArray= animationArray;
    
this.layerInterfaceFactoryInterface= layerInterfaceFactoryInterface;
    
}


    public getLayerInterfaceFactoryInterface(): LayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerInterfaceFactoryInterface;
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
super.paint(graphics, x, y);
    




                        for (
    var index: number = this.animationArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationArray[index]!.paint(graphics, x, y);
    
}

}


}
                
            

