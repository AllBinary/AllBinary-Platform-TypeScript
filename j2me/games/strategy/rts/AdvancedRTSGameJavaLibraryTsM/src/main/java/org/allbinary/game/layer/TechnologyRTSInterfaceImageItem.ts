
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      
import { ABCustomImageItem } from '../../../../org/allbinary/graphics/form/item/ABCustomImageItem.js';
      
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { MyFont } from '../../../../org/allbinary/graphics/font/MyFont.js';
      
import { PrimitiveLongUtil } from '../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSInterface } from './RTSInterface.js';

export class TechnologyRTSInterfaceImageItem extends ABCustomImageItem {
        

    private readonly myFont: MyFont = MyFont.getInstance()!;

    private readonly rtsInterface: RTSInterface;

    private readonly adjustedCostLabelY: number;

    private readonly adjustedCostX: number;

    private readonly adjustedCostY: number;

    private costString: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;

    private costLength: number= 0;

    private readonly adjustedLevelX: number;

    private readonly adjustedLevelY: number;

    private levelString: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;

    private levelLength: number= 0;

    private readonly primitiveLongUtil: PrimitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(10000)!;

    private readonly LEVEL: string = "Level";

    private readonly COST: string = "Cost";

    private readonly DOLLAR: string = "$";

public constructor (label: string, img: Image, layout: number, altText: string, basicColor: BasicColor, rtsInterface: RTSInterface){
            super(label, img, layout, altText, basicColor, 0);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.rtsInterface= rtsInterface;
    

    var DEFAULT_CHAR_HEIGHT: number = this.myFont!.DEFAULT_CHAR_HEIGHT;;
    

    var imageHeight: number = 0;;
    

    var image: Image = this.getImage()!;;
    

                        if(image != NullImage.NULL_IMAGE)
                        
                                    {
                                    imageHeight= image.getHeight();
    

                                    }
                                
this.adjustedCostLabelY=  -this.yOffset +imageHeight -(3 *DEFAULT_CHAR_HEIGHT);
    
this.adjustedCostY=  -this.yOffset +imageHeight -(2 *DEFAULT_CHAR_HEIGHT);
    
this.adjustedCostX= 2 +(this.DOLLAR.length *(DEFAULT_CHAR_HEIGHT -1));
    
this.adjustedLevelY=  -this.yOffset +imageHeight -DEFAULT_CHAR_HEIGHT;
    
this.adjustedLevelX= 2 +(this.LEVEL.length *(DEFAULT_CHAR_HEIGHT -1));
    
this.update();
    
}


    public getRtsInterface(): RTSInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsInterface;
    
}


    public update(){
this.costString= this.primitiveLongUtil!.getCharArray(this.getRtsInterface()!.getUpgradeCost());
    
this.levelString= this.primitiveLongUtil!.getCharArray(this.getRtsInterface()!.getLevel());
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x, y);
    

    var xa: number = x +2;;
    
graphics.drawString(this.COST, xa, y +this.adjustedCostLabelY, 0);
    
graphics.drawString(this.DOLLAR, xa, y +this.adjustedCostY, 0);
    
graphics.drawChars(costString, 0, this.costLength, x +this.adjustedCostX, y +this.adjustedCostY, 0);
    
graphics.drawString(this.LEVEL, xa, y +this.adjustedLevelY, 0);
    
graphics.drawChars(levelString, 0, this.levelLength, x +this.adjustedLevelX, y +this.adjustedLevelY, 0);
    
}


}
                
            

