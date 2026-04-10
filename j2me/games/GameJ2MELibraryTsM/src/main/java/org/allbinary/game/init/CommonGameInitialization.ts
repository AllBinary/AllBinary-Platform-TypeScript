
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
        



import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { ResourceInitialization } from "../../../../org/allbinary/game/resource/ResourceInitialization.js";

    
import { ResourceLoadingLevelFactory } from "../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class CommonGameInitialization extends BaseGameInitialization {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
protected constructor (resourceInitializationArray: ResourceInitialization[], portion: number)                        

                            : super(resourceInitializationArray, portion){

            super();
                //var resourceInitializationArray = resourceInitializationArray
var portion = portion


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public init(abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, level: number){
    //var abeClientInformation = abeClientInformation
    //var commandListener = commandListener
    //var level = level
super.init(abeClientInformation, commandListener, level)

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        


                        if(!this.isGameInitialized() && level == resourceLoadingLevelFactory!.LOAD_ALL.getLevel())
                        
                                    {
                                    this.setGameInitialized(true)

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

SmallIntegerSingletonFactory.getInstance()!.init()
progressCanvas!.addPortion(50, "Integers")
PointFactory.getInstance()!.init()
progressCanvas!.addPortion(50, "Points")
AngleFactory.getInstance()
progressCanvas!.addPortion(50, "Angles")
this.initGame()
this.resourceInitializationArray[GAME_RESOURCES]!.init()

                                    }
                                
super.resourceInitialization(level)
}


                //@Throws(Error::class)
            
    public initGame(){



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
}


}
                
            

