
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      
import { WeaponProperties } from '../../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
      
import { IconLayerFactory } from '../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
      
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
      
import { PickedUpLayerTypeFactory } from '../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
      
import { WeaponLayerCircularPool } from '../../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
      
import { ScoreableInterface } from '../../../../../../org/allbinary/game/score/ScoreableInterface.js';
      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MineLayerCircularStaticPool } from './MineLayerCircularStaticPool.js';
import { MineWeaponResources } from './MineWeaponResources.js';

export class MineCountedPickedUpLayerInterfaceFactory extends CountedPickedUpLayerInterfaceFactory {
        

    private static pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

                //@Throws(Exception.constructor)
            
    public static init(){
MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface= new MineCountedPickedUpLayerInterfaceFactory();
    
}


    public static getInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    
}


    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool = MineLayerCircularStaticPool.getInstance()!;

private constructor (){
            super(PickedUpLayerTypeFactory.getInstance()!.MINE, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.DROP_ICON_RESOURCE)!.getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.DROP_RESOURCE)!.getInstance(0));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 3;
    
}


    private readonly weaponProperties: WeaponProperties = new WeaponProperties( -1,  -1, 0, 8000, 10);

    private readonly smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getNextInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{

    var sourceLayerInterface: AllBinaryLayer = hashtable.get(this.smallIntegerSingletonFactory!.getAt(0)) as AllBinaryLayer;;
    

    var angle: Integer = hashtable.get(this.smallIntegerSingletonFactory!.getAt(1)) as Integer;;
    

    var scoreableInterface: ScoreableInterface = sourceLayerInterface as unknown as ScoreableInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(sourceLayerInterface, x, y, z, Math.round(angle.intValue()), 0, this.weaponProperties, scoreableInterface);;
    
}


}
                
            

