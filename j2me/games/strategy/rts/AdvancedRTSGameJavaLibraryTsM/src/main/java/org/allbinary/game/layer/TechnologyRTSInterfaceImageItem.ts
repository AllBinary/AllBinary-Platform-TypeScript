
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { ABCustomImageItem } from '../../../../org/allbinary/graphics/form/item/ABCustomImageItem.js';
      //not GWT import const ABCustomImageItem = globalThis.org.allbinary.graphics.form.item.ABCustomImageItem;

      
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
      //not GWT import const CharArrayFactory = globalThis.org.allbinary.logic.java.character.CharArrayFactory;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not plain js import { PrimitiveLongUtil } from '../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSInterface } from './RTSInterface.js';

export class TechnologyRTSInterfaceImageItem extends ABCustomImageItem implements UpdateMyFontInterface {
        

    private readonly rtsInterface: RTSInterface;

    private readonly primitiveLongUtil: PrimitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(10000)!;

    private readonly LEVEL: string = "Level";

    private readonly COST: string = "Cost";

    private readonly DOLLAR: string = "$";

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private costString: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;

    private costLength: number= 0;

    private levelString: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;

    private levelLength: number= 0;

    private adjustedCostLabelY: number= 0;

    private adjustedCostX: number= 0;

    private adjustedCostY: number= 0;

    private adjustedLevelX: number= 0;

    private adjustedLevelY: number= 0;

public constructor (label: string, img: Image, layout: number, altText: string, basicColor: BasicColor, rtsInterface: RTSInterface){
            super(label, img, layout, altText, basicColor, 0);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.rtsInterface= rtsInterface;
    
this.update();
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    

    var fontHeight: number = font.getHeight()!;;
    

    var imageHeight: number = 0;;
    

    var image: Image = this.getImage()!;;
    

                        if(image != NullImage.NULL_IMAGE)
                        
                                    {
                                    imageHeight= image.getHeight();
    

                                    }
                                
this.adjustedCostLabelY=  -this.yOffset +imageHeight -(3 *fontHeight);
    
this.adjustedCostY=  -this.yOffset +imageHeight -(2 *fontHeight);
    
this.adjustedCostX= 2 +(this.DOLLAR.length *(fontHeight -1));
    
this.adjustedLevelY=  -this.yOffset +imageHeight -fontHeight;
    
this.adjustedLevelX= 2 +(this.LEVEL.length *(fontHeight -1));
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
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
this.myFontProcessor!.process(graphics);
    
super.paintXY(graphics, x, y);
    

    var xa: number = x +2;;
    
graphics.drawString(this.COST, xa, y +this.adjustedCostLabelY, 0);
    
graphics.drawString(this.DOLLAR, xa, y +this.adjustedCostY, 0);
    
graphics.drawChars(this.costString, 0, this.costLength, x +this.adjustedCostX, y +this.adjustedCostY, 0);
    
graphics.drawString(this.LEVEL, xa, y +this.adjustedLevelY, 0);
    
graphics.drawChars(this.levelString, 0, this.levelLength, x +this.adjustedLevelX, y +this.adjustedLevelY, 0);
    
}


}



