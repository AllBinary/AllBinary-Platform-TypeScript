
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
        
//not game specific package import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { CostLayerInterfaceFactoryInterface } from '../../../../../org/allbinary/game/layer/CostLayerInterfaceFactoryInterface.js';
      const CostLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.CostLayerInterfaceFactoryInterface;

      
//not game specific package import { TechEventListenerInterface } from '../../../../../org/allbinary/game/rts/technology/event/TechEventListenerInterface.js';
      const TechEventListenerInterface = globalThis.org.allbinary.game.rts.technology.event.TechEventListenerInterface;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { PrimitiveLongUtil } from '../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RTSLayerCostAnimation extends Animation implements TechEventListenerInterface, UpdateMyFontInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly primitiveLongUtil: PrimitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(10000)!;

    private readonly DOLLAR: string = "$";

    private readonly image: Image;

    private readonly layerInterfaceFactoryInterface: CostLayerInterfaceFactoryInterface;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private costString: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;

    private len: number= 0;

    private adjustedCostX: number= 0;

    private fontHeight: number = 0;

public constructor (image: Image, layerInterfaceFactoryInterface: CostLayerInterfaceFactoryInterface){

            super();
        this.image= image;
    
this.layerInterfaceFactoryInterface= layerInterfaceFactoryInterface;
    
this.update();
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.adjustedCostX= font.stringWidth(this.DOLLAR);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public onEvent(event: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onTechEvent(event: AllBinaryEventObject){

        try {
            this.update();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onTechEvent", e);
    
}

}


                //@Throws(Exception.constructor)
            
    public update(){
this.len= 0;
    
this.costString= this.primitiveLongUtil!.getCharArray(this.layerInterfaceFactoryInterface!.getCost());
    
this.len= this.primitiveLongUtil!.getCurrentTotalDigits();
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.myFontProcessor!.process(graphics);
    
super.paintXY(graphics, x, y);
    

    var adjustedCostY: number = this.image.getHeight() -this.fontHeight;;
    

    var xa: number = x +2;;
    
graphics.drawString(this.DOLLAR, xa, y +adjustedCostY, 0);
    
graphics.drawChars(this.costString, 0, this.len, x +this.adjustedCostX, y +adjustedCostY, 0);
    
}


}
                
            

