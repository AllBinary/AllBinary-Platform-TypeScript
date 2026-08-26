
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
//not game specific package import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { Movement } from '../../../../../org/allbinary/physics/movement/Movement.js';
      const Movement = globalThis.org.allbinary.physics.movement.Movement;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleWeaponLayer } from './SimpleWeaponLayer.js';

export class TempExplosionWeaponLayer extends SimpleWeaponLayer {
        

    public readonly weaponProperties: WeaponProperties = new WeaponProperties( -1,  -1, 0, 1000, 0);

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(0);

public constructor (name: string, movement: Movement, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPositionBase, timeDelay: number){
            super(name, RemoteInfo.REMOTE_INFO,  -1, movement, animationInterface, SimpleWeaponLayer.createDestroyed(), rectangle, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.timeDelayHelper!.delay= timeDelay;
    
}


                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    this.getCollidableInferface()!.collide(this, this);
    
this.totalDamage= this.getInitDamage() +1;
    

                                    }
                                
super.processTick(allBinaryLayerManager);
    
}


}
                
            

