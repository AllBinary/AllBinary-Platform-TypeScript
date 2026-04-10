
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
        



import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicLayerProcessor
            extends Object
         {
        

    public static readonly NULL_LAYER_PROCESSOR: BasicLayerProcessor = new BasicLayerProcessor();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
protected constructor (){

            super();
            }


    public add(layerInterface: AllBinaryLayer){
var layerInterface = layerInterface

                        if(!list.contains(layerInterface))
                        
                                    {
                                    list.add(layerInterface)

                                    }
                                
}


                //@Throws(Error::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager



                            throw Error(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

