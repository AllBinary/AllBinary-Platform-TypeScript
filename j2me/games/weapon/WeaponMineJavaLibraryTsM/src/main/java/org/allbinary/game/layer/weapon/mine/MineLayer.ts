
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
        



import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { SimpleWeaponLayer } from "../../../../../../org/allbinary/game/layer/weapon/SimpleWeaponLayer.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { NoMovementFactory } from "../../../../../../org/allbinary/physics/movement/NoMovementFactory.js";

    
import { ViewPosition } from "../../../../../../org/allbinary/view/ViewPosition.js";

    
import { ViewPositionEventHandler } from "../../../../../../org/allbinary/view/event/ViewPositionEventHandler.js";

    
import { DropWeaponSound } from "../../../../../../org/allbinary/weapon/media/audio/DropWeaponSound.js";

    

import { MineWeaponResources } from "./MineWeaponResources.js";

export class MineLayer extends SimpleWeaponLayer {
        

    private static readonly NAME: string = "MineLayer";
        
        
public constructor (viewPosition: ViewPosition)                        

                            : super(NAME, NoMovementFactory.getInstance()!.getMovmentInstance(), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.RESOURCE)!.getInstance(0), new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 10, 10), viewPosition){

            super();
            var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly viewPositionEventHandler: ViewPositionEventHandler = ViewPositionEventHandler.getInstance()!;
        
        

    public init(x: number, y: number, z: number){
var x = x
var y = y
var z = z
this.setPosition(x +5, y +5, z);
    
this.viewPositionEventHandler!.addListener(this as AllBinaryLayer);
    
SecondaryPlayerQueueFactory.getInstance()!.add(DropWeaponSound.getInstance());
    
}


    public damage(damage: number, damageType: number){
var damage = damage
var damageType = damageType
this.totalDamage= this.getInitDamage() +1;
    
}


    public getDamage(damageType: number): number{
var damageType = damageType
super.getDamage(damageType);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInitDamage();

                        ;
    
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    this.viewPositionEventHandler!.removeListener(this);
    

                                    }
                                
}


}
                
            

