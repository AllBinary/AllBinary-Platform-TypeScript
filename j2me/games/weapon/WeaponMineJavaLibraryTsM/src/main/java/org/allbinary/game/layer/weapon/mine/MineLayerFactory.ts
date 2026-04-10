
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
        



import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerFactoryInterface } from "../../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js";

    
import { ViewPositionFactoryInterface } from "../../../../../../org/allbinary/view/ViewPositionFactoryInterface.js";

    

export class MineLayerFactory
            extends Object
        
                , AllBinaryLayerFactoryInterface {
        

    private viewPositionFactoryInterface: ViewPositionFactoryInterface
public constructor (viewPositionFactoryInterface: ViewPositionFactoryInterface){

            super();
            var viewPositionFactoryInterface = viewPositionFactoryInterface
this.viewPositionFactoryInterface= viewPositionFactoryInterface
}


                @Throws(Exception::class)
            
    public getInstance(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MineLayer(this.viewPositionFactoryInterface!.getInstance());
    
}


}
                
            

