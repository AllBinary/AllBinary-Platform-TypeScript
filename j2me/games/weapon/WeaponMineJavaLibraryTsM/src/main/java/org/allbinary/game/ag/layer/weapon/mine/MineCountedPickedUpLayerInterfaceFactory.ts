
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { Hashtable } from '../../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      //not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { WeaponProperties } from '../../../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      //not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
      //not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;

      
import { IconLayerFactory } from '../../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
      //not GWT import const IconLayerFactory = globalThis.org.allbinary.game.layer.pickup.IconLayerFactory;

      
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
      //not GWT import const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

      
import { PickedUpLayerTypeFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
      //not GWT import const PickedUpLayerTypeFactory = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory;

      
import { WeaponLayerCircularPool } from '../../../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
      //not GWT import const WeaponLayerCircularPool = globalThis.org.allbinary.game.layer.weapon.WeaponLayerCircularPool;

      
import { ScoreableInterface } from '../../../../../../../org/allbinary/game/score/ScoreableInterface.js';
      //not GWT import const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
















                                        
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



