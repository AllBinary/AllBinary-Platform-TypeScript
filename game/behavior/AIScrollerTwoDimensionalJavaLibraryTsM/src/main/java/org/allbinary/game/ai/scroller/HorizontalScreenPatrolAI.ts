
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
        

//import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { BasicAI } from "../../../../../org/allbinary/game/ai/BasicAI.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { MyRandomFactory } from "../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { PlayerQueue } from "../../../../../org/allbinary/media/audio/PlayerQueue.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class HorizontalScreenPatrolAI extends BasicAI {
        

    public static readonly SOUND: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(433)!;
        
        

    keyDirection: number = Canvas.LEFT;
        
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private firingX: number = displayInfoSingleton!.getLastHalfWidth()!;
        
        

    private firedIndex: number = 0;
        
        

    private readonly MAX_FIRE: number = 28;
        
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(240);
        
        

    private readonly secondaryPlayerQueue: PlayerQueue = SecondaryPlayerQueueFactory.getInstance()!;
        
        

    private readonly sound: Sound
public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.sound= hashtable.get(SOUND as Object);

                         as Sound;
    

                        if(this.sound == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("No Sound Provided!!")

                                    }
                                
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
super.processAI(this.keyDirection);
    

                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    
    var layerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

    var currentOwnerLayerX: number = layerInterface!.getXP()!;
        
        
;
    

                        if(currentOwnerLayerX <  -layerInterface!.getWidth();

                        )
                        
                                    {
                                    
    var y: number = MyRandomFactory.getInstance()!.getAbsoluteNextIntAllowZero(50)!;
        
        
;
    
layerInterface!.setPosition(displayInfoSingleton!.getLastWidth() +layerInterface!.getWidth() +50, y, layerInterface!.getZP());
    
firedIndex= 0;
    
this.firingX= displayInfoSingleton!.getLastHalfWidth() +MyRandomFactory.getInstance()!.getNextInt(displayInfoSingleton!.getLastHalfWidth());
    
secondaryPlayerQueue!.add(this.sound);
    

                                    }
                                

                        if(currentOwnerLayerX < this.firingX && currentOwnerLayerX >  -layerInterface!.getWidth();

                        )
                        
                                    {
                                    super.processAI(Canvas.KEY_NUM1);
    

    var gameLayerManager: AllBinaryGameLayerManager = allBinaryLayerManager as AllBinaryGameLayerManager;
        
        
;
    

    var FIRE: number = (gameLayerManager!.getGameInfo()!.getCurrentLevel() +12) shr 2;
        
        
;
    

                        if(FIRE > MAX_FIRE)
                        
                                    {
                                    FIRE= MAX_FIRE;
    

                                    }
                                

                        if(firedIndex > FIRE)
                        
                                    {
                                    firedIndex= 0;
    
this.firingX= Integer.MIN_VALUE;
    

                                    }
                                
firedIndex++;
    

                                    }
                                

                                    }
                                
}


    nextDirection(){
}


}
                
            

