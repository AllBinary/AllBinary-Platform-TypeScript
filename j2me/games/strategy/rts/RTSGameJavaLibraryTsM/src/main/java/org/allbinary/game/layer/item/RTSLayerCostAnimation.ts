
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

    
import { CostLayerInterfaceFactoryInterface } from "../../../../../org/allbinary/game/layer/CostLayerInterfaceFactoryInterface.js";

    
import { TechEventListenerInterface } from "../../../../../org/allbinary/game/rts/technology/event/TechEventListenerInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { PrimitiveLongUtil } from "../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    

export class RTSLayerCostAnimation extends Animation
                , TechEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly myFont: MyFont = MyFont.getInstance()!;
        
        

    private readonly primitiveLongUtil: PrimitiveLongUtil = new PrimitiveLongUtil(10000);
        
        

    private readonly image: Image

    private costString: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;
        
        

    private len: number= 0

    private readonly DOLLAR: string = "$";
        
        

    private readonly adjustedCostX: number = myFont!.stringWidth(DOLLAR)!;
        
        

    private readonly layerInterfaceFactoryInterface: CostLayerInterfaceFactoryInterface
public constructor (image: Image, layerInterfaceFactoryInterface: CostLayerInterfaceFactoryInterface){

            super();
            var image = image
var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface
this.image= image;
    
this.layerInterfaceFactoryInterface= layerInterfaceFactoryInterface;
    
this.update();
    
}


    public onEvent(event: AllBinaryEventObject){
var event = event
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onTechEvent(event: AllBinaryEventObject){
var event = event

        try {
            this.update();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "onTechEvent", e);
    
}

}


                //@Throws(Error::class)
            
    public update(){
this.len= 0;
    
this.costString= this.primitiveLongUtil!.getCharArray(this.layerInterfaceFactoryInterface!.getCost());
    
this.len= this.primitiveLongUtil!.getCurrentTotalDigits();
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
super.paint(graphics, x, y);
    

    var adjustedCostY: number = image.getHeight() -myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var xa: number = x +2;
        
        
;
    
graphics.drawString(DOLLAR, xa, y +adjustedCostY, 0);
    
graphics.drawChars(costString, 0, this.len, x +adjustedCostX, y +adjustedCostY, 0);
    
}


}
                
            

