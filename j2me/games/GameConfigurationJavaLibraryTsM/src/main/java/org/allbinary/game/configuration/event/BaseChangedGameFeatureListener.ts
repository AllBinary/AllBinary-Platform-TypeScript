
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
        



import { Feature } from "../../../../../org/allbinary/game/configuration/feature/Feature.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureUtil } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BaseChangedGameFeatureListener
            extends Object
        
                , GameFeatureListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;
        
        

    readonly list: BasicArrayList = new BasicArrayList();
        
        

    private changed: boolean = true;
        
        

    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
log(CommonStrings.getInstance()!.NOT_IMPLEMENTED, this)
}


    public onGameFeatureChange(gameFeatureEvent: GameFeatureEvent){
var gameFeatureEvent = gameFeatureEvent
put(StringMaker().
                            append(gameFeatureUtil!.GAME_FEATURE_CHANGED)!.append(gameFeatureEvent!.getWhatChanged())!.toString(), this, gameFeatureUtil!.ON_GAME_FEATURE_CHANGE)
add(gameFeatureEvent!.getGameOption())
setChanged(true)
}


    public add(gameFeature: Feature){
var gameFeature = gameFeature
add(gameFeature)
}


    public remove(gameFeature: Feature){
var gameFeature = gameFeature
remove(gameFeature)
}


    public setChanged(initialized: boolean){
var initialized = initialized
this.changed= initialized

    
                        if(!this.isChanged())
                        
                                    {
                                    clear()

                                    }
                                
}


    public isChanged(gameFeature: Feature): boolean{
var gameFeature = gameFeature

    var isChanged: boolean = list.contains(gameFeature)!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("GameFeature: ")
append(StringUtil.getInstance()!.toString(gameFeature))
append(" isFeature: ")
appendboolean(Features.getInstance()!.isFeature(gameFeature))
append(" isChanged: ")
appendboolean(isChanged)
put(stringBuffer!.toString(), this, "isChanged")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isChanged;
    
}


    public isChanged(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changed;
    
}


}
                
            

