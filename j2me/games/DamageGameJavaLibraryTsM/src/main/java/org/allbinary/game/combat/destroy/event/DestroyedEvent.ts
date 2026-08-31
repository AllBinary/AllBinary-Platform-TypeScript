
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryGameCanvas } from '../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      //not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
import { NullGameCanvas } from '../../../../../../org/allbinary/game/displayable/canvas/NullGameCanvas.js';
      //not GWT import const NullGameCanvas = globalThis.org.allbinary.game.displayable.canvas.NullGameCanvas;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DestroyedEventHandler } from './DestroyedEventHandler.js';

export class DestroyedEvent extends AllBinaryEventObject {
        

    private allBinaryGameCanvas: AllBinaryGameCanvas = NullGameCanvas.getInstance()!;

    private allBinaryLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

public constructor (combatGameCanvas: AllBinaryGameCanvas){
            super(DestroyedEventHandler.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setAllBinaryGameCanvas(combatGameCanvas);
    
}


    public getAllBinaryGameCanvas(): AllBinaryGameCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allBinaryGameCanvas;
    
}


    public getLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allBinaryLayerInterface;
    
}


    setAllBinaryGameCanvas(allBinaryGameCanvas: AllBinaryGameCanvas){
this.allBinaryGameCanvas= allBinaryGameCanvas;
    
}


    public setLayerInterfaceForCircularStaticPool(allBinaryLayerInterface: AllBinaryLayer){
this.allBinaryLayerInterface= allBinaryLayerInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("DestroyedEvent: \n");
    
stringBuffer!.append("AllBinaryLayerInterface: ");
    
stringBuffer!.append(this.allBinaryLayerInterface!.toString());
    
stringBuffer!.append("\nAllBinaryGameCanvas: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getAllBinaryGameCanvas()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



