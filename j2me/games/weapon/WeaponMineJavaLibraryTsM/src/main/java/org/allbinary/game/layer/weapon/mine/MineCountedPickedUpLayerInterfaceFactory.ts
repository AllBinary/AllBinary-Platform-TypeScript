
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
        



            import Hashtable from "@ohos.util.HashMap";
        
            import { Integer } from "../../../../../java/lang/Integer.js";
        

//import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { WeaponProperties } from "../../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { CountedPickedUpLayerInterfaceFactory } from "../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js";

    
import { IconLayerFactory } from "../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js";

    
import { PickedUpLayerInterfaceFactoryInterface } from "../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js";

    
import { PickedUpLayerTypeFactory } from "../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js";

    
import { WeaponLayerCircularPool } from "../../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js";

    
import { ScoreableInterface } from "../../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

export class MineCountedPickedUpLayerInterfaceFactory extends CountedPickedUpLayerInterfaceFactory {
        

    private pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        
        

                //@Throws(Error::class)
            
    public static init(){
pickedUpLayerInterfaceFactoryInterface= new MineCountedPickedUpLayerInterfaceFactory();
    
}


    public static getInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickedUpLayerInterfaceFactoryInterface;
    
}


    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool = MineLayerCircularStaticPool.getInstance()!;
        
        
private constructor ()                        

                            : super(PickedUpLayerTypeFactory.getInstance()!.MINE, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.DROP_ICON_RESOURCE)!.getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.DROP_RESOURCE)!.getInstance(0)){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 3;
    
}


    private readonly weaponProperties: WeaponProperties = new WeaponProperties(0, 8000, 10.toShort());
        
        

    private readonly smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{
    //var hashtable = hashtable
    //var x = x
    //var y = y
    //var z = z

    var sourceLayerInterface: AllBinaryLayer = hashtable.get(smallIntegerSingletonFactory!.getInstance(0);

                         as Object);

                         as AllBinaryLayer;
        
        
;
    

    var angle: Integer = hashtable.get(smallIntegerSingletonFactory!.getInstance(1);

                         as Object);

                         as Integer;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.weaponLayerCircularStaticPool!.getInstance(sourceLayerInterface, x, y, z, angle.toInt();

                        .toInt(), 0, weaponProperties, sourceLayerInterface as ScoreableInterface);

                        ;
    
}


}
                
            

