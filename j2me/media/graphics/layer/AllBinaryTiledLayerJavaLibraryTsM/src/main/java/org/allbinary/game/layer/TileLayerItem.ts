
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Screen } from "../../../../javax/microedition/lcdui/Screen.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CustomItemInterface } from "../../../../org/allbinary/graphics/form/item/CustomItemInterface.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    

export class TileLayerItem extends CustomItem
                , CustomItemInterface {
        

    private readonly tiledLayer: AllBinaryTiledLayer
public constructor (label: string, tiledLayer: AllBinaryTiledLayer, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(label, backgroundBasicColor, foregroundBasicColor){

            super();
            var label = label
var tiledLayer = tiledLayer
var layout = layout
var altText = altText
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.tiledLayer= tiledLayer
}


    public setOwner(owner: Screen){
var owner = owner
}


    public getMinimumWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getWidth();
    
}


    public getMinimumHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getHeight();
    
}


    getMinContentHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getHeight();
    
}


    getMinContentWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getWidth();
    
}


    getPrefContentHeight(width: number): number{
var width = width



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getHeight();
    
}


    getPrefContentWidth(height: number): number{
var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayer!.getWidth();
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
setPosition(x, y, this.tiledLayer!.getZP())
paint(graphics)
}


    public paintUnselected(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
}


}
                
            

