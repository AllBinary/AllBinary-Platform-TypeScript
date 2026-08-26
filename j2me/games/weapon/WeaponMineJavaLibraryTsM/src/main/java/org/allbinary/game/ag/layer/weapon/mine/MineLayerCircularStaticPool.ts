
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { WeaponLayerCircularPool } from '../../../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
      const WeaponLayerCircularPool = globalThis.org.allbinary.game.layer.weapon.WeaponLayerCircularPool;

      
//not game specific package import { ViewPositionFactoryInterface } from '../../../../../../../org/allbinary/view/ViewPositionFactoryInterface.js';
      const ViewPositionFactoryInterface = globalThis.org.allbinary.view.ViewPositionFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MineCountedPickedUpLayerInterfaceFactory } from './MineCountedPickedUpLayerInterfaceFactory.js';
import { MineLayerFactory } from './MineLayerFactory.js';

export class MineLayerCircularStaticPool
            extends Object
         {
        

    private static WEAPON_LAYER_CIRCULAR_STATIC_POOL: WeaponLayerCircularPool = new WeaponLayerCircularPool();

                //@Throws(Exception.constructor)
            
    public static init(viewPositionFactoryInterface: ViewPositionFactoryInterface){
MineCountedPickedUpLayerInterfaceFactory.init();
    
MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL.initAllBinaryLayerCircularPool(new MineLayerFactory(viewPositionFactoryInterface), 20);
    
}


    public static getInstance(): WeaponLayerCircularPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL;
    
}


}
                
            

