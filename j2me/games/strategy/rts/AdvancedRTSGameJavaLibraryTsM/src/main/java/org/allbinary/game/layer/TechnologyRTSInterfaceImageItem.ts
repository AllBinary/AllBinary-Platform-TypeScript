
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

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { CustomImageItem } from "../../../../org/allbinary/graphics/form/item/CustomImageItem.js";

    
import { CharArrayFactory } from "../../../../org/allbinary/logic/java/character/CharArrayFactory.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { PrimitiveLongUtil } from "../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    

export class TechnologyRTSInterfaceImageItem extends CustomImageItem {
        

    private readonly myFont: MyFont = MyFont.getInstance()!;
        
        

    private readonly rtsInterface: RTSInterface

    private readonly adjustedCostLabelY: number

    private readonly adjustedCostX: number

    private readonly adjustedCostY: number

    private costString: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;
        
        

    private costLength: number= 0

    private readonly adjustedLevelX: number

    private readonly adjustedLevelY: number

    private levelString: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;
        
        

    private levelLength: number= 0

    private readonly primitiveLongUtil: PrimitiveLongUtil = new PrimitiveLongUtil(10000);
        
        

    private readonly LEVEL: string = "Level";
        
        

    private readonly COST: string = "Cost";
        
        

    private readonly DOLLAR: string = "$";
        
        
public constructor (label: string, img: Image, layout: number, altText: string, basicColor: BasicColor, rtsInterface: RTSInterface)                        

                            : super(label, img, layout, altText, basicColor){

            super();
            var label = label
var img = img
var layout = layout
var altText = altText
var basicColor = basicColor
var rtsInterface = rtsInterface


                            //For kotlin this is before the body of the constructor.
                    
this.rtsInterface= rtsInterface

    var DEFAULT_CHAR_HEIGHT: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        


    var imageHeight: number = 0;
        
        


    var image: Image = this.getImage()!;
        
        


                        if(image != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    imageHeight= image.getHeight()

                                    }
                                
this.adjustedCostLabelY=  -yOffset +imageHeight -(3 *DEFAULT_CHAR_HEIGHT)
this.adjustedCostY=  -yOffset +imageHeight -(2 *DEFAULT_CHAR_HEIGHT)
this.adjustedCostX= 2 +(DOLLAR.length *(DEFAULT_CHAR_HEIGHT -1))
this.adjustedLevelY=  -yOffset +imageHeight -DEFAULT_CHAR_HEIGHT
this.adjustedLevelX= 2 +(LEVEL.length *(DEFAULT_CHAR_HEIGHT -1))
this.this.update()
}


    public getRtsInterface(): RTSInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsInterface;
    
}


    public update(){
this.costString= this.primitiveLongUtil!.getCharArray(this.getRtsInterface()!.getUpgradeCost())
this.levelString= this.primitiveLongUtil!.getCharArray(this.getRtsInterface()!.getLevel())
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
super.paint(graphics, x, y)

    var xa: number = x +2;
        
        

graphics.drawString(COST, xa, y +this.adjustedCostLabelY, 0)
graphics.drawString(DOLLAR, xa, y +this.adjustedCostY, 0)
graphics.drawChars(costString, 0, this.costLength, x +this.adjustedCostX, y +this.adjustedCostY, 0)
graphics.drawString(LEVEL, xa, y +this.adjustedLevelY, 0)
graphics.drawChars(levelString, 0, this.levelLength, x +this.adjustedLevelX, y +this.adjustedLevelY, 0)
}


}
                
            

