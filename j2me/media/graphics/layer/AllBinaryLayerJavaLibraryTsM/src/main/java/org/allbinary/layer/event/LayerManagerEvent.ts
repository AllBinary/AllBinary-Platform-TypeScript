
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
        



import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LayerManager } from "../../../../org/allbinary/layer/LayerManager.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LayerManagerEvent extends AllBinaryEventObject {
        

    private layerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        

    private readonly crud: string
public constructor (layerManager: LayerManager, crud: string)                        

                            : super(layerManager){

            super();
            var layerManager = layerManager
var crud = crud


                            //For kotlin this is before the body of the constructor.
                    
this.crud= crud;
    
}


    public getLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterface;
    
}


    public setLayerInterface(layerInterface: AllBinaryLayer){
var layerInterface = layerInterface
this.layerInterface= layerInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("LayerManagerEvent: \n");
    
stringBuffer!.append("LayerInterface: ");
    
stringBuffer!.append(this.getLayerInterface()!.toString());
    
stringBuffer!.append("\nCRUD: ");
    
stringBuffer!.append(this.crud.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

