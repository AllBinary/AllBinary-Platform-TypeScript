
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
        



import { WeaponLayerCircularPool } from "../../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js";

    
import { ViewPositionFactoryInterface } from "../../../../../../org/allbinary/view/ViewPositionFactoryInterface.js";

    

export class MineLayerCircularStaticPool
            extends Object
         {
        

    private WEAPON_LAYER_CIRCULAR_STATIC_POOL: WeaponLayerCircularPool = new WeaponLayerCircularPool();
        
        

                @Throws(Exception::class)
            
    public static init(viewPositionFactoryInterface: ViewPositionFactoryInterface){
var viewPositionFactoryInterface = viewPositionFactoryInterface
init()
init(MineLayerFactory(viewPositionFactoryInterface), 20)
}


    public static getInstance(): WeaponLayerCircularPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WEAPON_LAYER_CIRCULAR_STATIC_POOL;
    
}


}
                
            

