
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
      const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
//not game specific package import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { MyRandomFactory } from '../../../../../../org/allbinary/game/rand/MyRandomFactory.js';
      const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { PlayerQueue } from '../../../../../../org/allbinary/media/audio/PlayerQueue.js';
      const PlayerQueue = globalThis.org.allbinary.media.audio.PlayerQueue;

      
//not game specific package import { SecondaryPlayerQueueFactory } from '../../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
      const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
//not game specific package import { Sound } from '../../../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
//not game specific package import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HorizontalScreenPatrolAI extends BasicAI {
        

    public static readonly SOUND: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(433)!;

    keyDirection: number = Canvas.LEFT;

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private firingX: number = this.displayInfoSingleton!.getLastHalfWidth()!;

    private firedIndex: number = 0;

    private readonly MAX_FIRE: number = 28;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(240);

    private readonly secondaryPlayerQueue: PlayerQueue = SecondaryPlayerQueueFactory.getInstance()!;

    private readonly sound: Sound;

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.sound= hashtable.get(HorizontalScreenPatrolAI.SOUND) as Sound;
    

                        if(this.sound == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Sound Provided!!");
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
super.processKeyAI(this.keyDirection);
    

                        if(this.timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    
    var layerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var currentOwnerLayerX: number = layerInterface!.getXP()!;;
    

                        if(currentOwnerLayerX <  -layerInterface!.getWidth())
                        
                                    {
                                    
    var y: number = MyRandomFactory.getInstance()!.getAbsoluteNextIntAllowZero(50)!;;
    
layerInterface!.setPosition(this.displayInfoSingleton!.getLastWidth() +layerInterface!.getWidth() +50, y, layerInterface!.getZP());
    
this.firedIndex= 0;
    
this.firingX= this.displayInfoSingleton!.getLastHalfWidth() +MyRandomFactory.getInstance()!.getNextInt(this.displayInfoSingleton!.getLastHalfWidth());
    
this.secondaryPlayerQueue!.add(this.sound);
    

                                    }
                                

                        if(currentOwnerLayerX < this.firingX && currentOwnerLayerX >  -layerInterface!.getWidth())
                        
                                    {
                                    super.processKeyAI(Canvas.KEY_NUM1);
    

    var gameLayerManager: AllBinaryGameLayerManager = allBinaryLayerManager as AllBinaryGameLayerManager;;
    

    var FIRE: number = (gameLayerManager!.getGameInfo()!.getCurrentLevel() +12)>>2;;
    

                        if(FIRE > this.MAX_FIRE)
                        
                                    {
                                    FIRE= this.MAX_FIRE;
    

                                    }
                                

                        if(this.firedIndex > FIRE)
                        
                                    {
                                    this.firedIndex= 0;
    
this.firingX= Integer.MIN_VALUE;
    

                                    }
                                
this.firedIndex++;
    

                                    }
                                

                                    }
                                
}


    nextDirection(){
}


}



