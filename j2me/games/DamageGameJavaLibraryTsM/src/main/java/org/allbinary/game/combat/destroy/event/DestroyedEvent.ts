
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
        



import { AllBinaryGameCanvas } from "../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { NullGameCanvas } from "../../../../../../org/allbinary/game/displayable/canvas/NullGameCanvas.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DestroyedEventHandler } from "./DestroyedEventHandler.js";

export class DestroyedEvent extends AllBinaryEventObject {
        

    private allBinaryGameCanvas: AllBinaryGameCanvas = NullGameCanvas.getInstance()!;
        
        

    private allBinaryLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        
public constructor (combatGameCanvas: AllBinaryGameCanvas){
            super(DestroyedEventHandler.getInstance());
                    var combatGameCanvas = combatGameCanvas


                            //For kotlin this is before the body of the constructor.
                    
this.setAllBinaryGameCanvas(combatGameCanvas);
    
}


    public getAllBinaryGameCanvas(): AllBinaryGameCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allBinaryGameCanvas;
    
}


    public getLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allBinaryLayerInterface;
    
}


    setAllBinaryGameCanvas(allBinaryGameCanvas: AllBinaryGameCanvas){
var allBinaryGameCanvas = allBinaryGameCanvas
this.allBinaryGameCanvas= allBinaryGameCanvas;
    
}


    public setLayerInterfaceForCircularStaticPool(allBinaryLayerInterface: AllBinaryLayer){
var allBinaryLayerInterface = allBinaryLayerInterface
this.allBinaryLayerInterface= allBinaryLayerInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("DestroyedEvent: \n");
    
stringBuffer!.append("AllBinaryLayerInterface: ");
    
stringBuffer!.append(this.allBinaryLayerInterface!.toString());
    
stringBuffer!.append("\nAllBinaryGameCanvas: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getAllBinaryGameCanvas()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

