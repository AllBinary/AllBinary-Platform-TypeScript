
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Screen } from '../../../../javax/microedition/lcdui/Screen.js';
      const Screen = globalThis.javax.microedition.lcdui.Screen;

      
//not game specific package import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { ABCustomItemInterface } from '../../../../org/allbinary/graphics/form/item/ABCustomItemInterface.js';
      const ABCustomItemInterface = globalThis.org.allbinary.graphics.form.item.ABCustomItemInterface;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';

export class TileLayerItem extends ABCustomItem implements ABCustomItemInterface {
        

    private readonly tiledLayer: AllBinaryTiledLayer;

public constructor (label: string, tiledLayer: AllBinaryTiledLayer, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.tiledLayer= tiledLayer;
    
}


    public setOwner(owner: Screen){
}


    public getMinimumWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getWidth();;
    
}


    public getMinimumHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getHeight();;
    
}


    getMinContentHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getHeight();;
    
}


    getMinContentWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getWidth();;
    
}


    getPrefContentHeight(width: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getHeight();;
    
}


    getPrefContentWidth(height: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getWidth();;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.tiledLayer!.setPosition(x, y, this.tiledLayer!.getZP());
    
this.tiledLayer!.paint(graphics);
    
}


    public paintUnselected(graphics: Graphics, x: number, y: number){
}


}



