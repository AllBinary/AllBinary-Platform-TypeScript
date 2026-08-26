
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
        
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { ABCustomImageItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomImageItem.js';
      const ABCustomImageItem = globalThis.org.allbinary.graphics.form.item.ABCustomImageItem;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { LayerInterfaceFactoryInterface } from '../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js';
      const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;

      
















                                        
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
                
            

