
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
        



import { AllBinaryGameLayerManager } from "../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryLayerManager } from "../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    

export class BaseDropCellPositionGenerator
            extends Object
        
                , DropCellPositionGeneratorInterface {
        

    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;

                        ;
    
}


                //@Throws(Error::class)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var geographicMapInterface = geographicMapInterface
}


                //@Throws(Error::class)
            
    public isDropAllowedAt(geographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var geographicMapCellPosition = geographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager
}


}
                
            

