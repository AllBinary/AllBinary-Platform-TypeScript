
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      //not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      //not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { Movement } from '../../../../../org/allbinary/physics/movement/Movement.js';
      //not GWT import const Movement = globalThis.org.allbinary.physics.movement.Movement;

      
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      //not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleWeaponLayer } from './SimpleWeaponLayer.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.weapon.SimpleWeaponLayer;

                
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



