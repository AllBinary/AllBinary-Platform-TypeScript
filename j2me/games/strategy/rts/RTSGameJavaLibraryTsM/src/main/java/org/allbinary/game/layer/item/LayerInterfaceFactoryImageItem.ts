
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { ABCustomImageItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomImageItem.js';
      //not GWT import const ABCustomImageItem = globalThis.org.allbinary.graphics.form.item.ABCustomImageItem;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { LayerInterfaceFactoryInterface } from '../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js';
      //not GWT import const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LayerInterfaceFactoryImageItem extends ABCustomImageItem {
        

    private readonly animationArray: Animation[];

    private readonly layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface;

public constructor (label: string, img: Image, layout: number, altText: string, basicColor: BasicColor, animationArray: Animation[], layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface){
            super(label, img, layout, altText, basicColor, 0);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationArray= animationArray;
    
this.layerInterfaceFactoryInterface= layerInterfaceFactoryInterface;
    
}


    public getLayerInterfaceFactoryInterface(): LayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerInterfaceFactoryInterface;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x, y);
    




                        for (
    var index: number = this.animationArray!.length
                ;--index >= 0; )
        {
this.animationArray[index]!.paintXY(graphics, x, y);
    
}

}


}



