
        /* Generated Code Do Not Modify */
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { WeaponProperties } from "../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { Movement } from "../../../../../org/allbinary/physics/movement/Movement.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class TempExplosionWeaponLayer extends SimpleWeaponLayer {
        

    public readonly weaponProperties: WeaponProperties = new WeaponProperties(0, 1000, 0.toShort());
        
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        
public constructor (name: string, movement: Movement, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition, timeDelay: number)                        

                            : super(name, movement, animationInterface, rectangle, viewPosition){

            super();
                //var name = name
    //var movement = movement
    //var animationInterface = animationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition
    //var timeDelay = timeDelay


                            //For kotlin this is before the body of the constructor.
                    
this.timeDelayHelper!.delay= timeDelay
}


                @Throws(Exception::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    
                        if(timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    collide(this)
this.totalDamage= this.getInitDamage() +1

                                    }
                                
processTick(allBinaryLayerManager)
}


}
                
            

