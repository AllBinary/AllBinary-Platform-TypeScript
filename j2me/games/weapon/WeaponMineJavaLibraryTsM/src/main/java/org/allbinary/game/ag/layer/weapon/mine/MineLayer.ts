
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
        
import { DropWeaponSound } from '../../../../../../../org/allbinary/ag/weapon/media/audio/DropWeaponSound.js';
      //not GWT import and is game specific code const DropWeaponSound = globalThis.org.allbinary.ag.weapon.media.audio.DropWeaponSound;

      
//not game specific package import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
//not game specific package import { SimpleWeaponLayer } from '../../../../../../../org/allbinary/game/layer/weapon/SimpleWeaponLayer.js';
      const SimpleWeaponLayer = globalThis.org.allbinary.game.layer.weapon.SimpleWeaponLayer;

      
//not game specific package import { RemoteInfo } from '../../../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { PointFactory } from '../../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { SecondaryPlayerQueueFactory } from '../../../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
      const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
//not game specific package import { NoMovementFactory } from '../../../../../../../org/allbinary/physics/movement/NoMovementFactory.js';
      const NoMovementFactory = globalThis.org.allbinary.physics.movement.NoMovementFactory;

      
//not game specific package import { ViewPositionBase } from '../../../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { ViewPositionEventHandler } from '../../../../../../../org/allbinary/view/event/ViewPositionEventHandler.js';
      const ViewPositionEventHandler = globalThis.org.allbinary.view.event.ViewPositionEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MineWeaponResources } from './MineWeaponResources.js';

export class MineLayer extends SimpleWeaponLayer {
        

    private static readonly NAME: string = "MineLayer";

public constructor (viewPosition: ViewPositionBase){
            super(MineLayer.NAME, RemoteInfo.REMOTE_INFO,  -1, NoMovementFactory.getInstance()!.getMovmentInstance(), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.RESOURCE)!.getInstance(0), SimpleWeaponLayer.createDestroyed(), new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 10, 10), viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly viewPositionEventHandler: ViewPositionEventHandler = ViewPositionEventHandler.getInstance()!;

    public initXYZ(x: number, y: number, z: number){
this.setPosition(x +5, y +5, z);
    
this.viewPositionEventHandler!.addListener(this as AllBinaryLayer);
    
SecondaryPlayerQueueFactory.getInstance()!.add(DropWeaponSound.getInstance());
    
}


    public damage(damage: number, damageType: number){
this.totalDamage= this.getInitDamage() +1;
    
}


    public getDamage(damageType: number): number{
super.getDamage(damageType);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInitDamage();;
    
}


    public setDestroyed(destroyed: boolean){
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    this.viewPositionEventHandler!.removeListener(this);
    

                                    }
                                
}


}
                
            

