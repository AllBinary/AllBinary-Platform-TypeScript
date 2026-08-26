
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Feature } from '../../../../../org/allbinary/game/configuration/feature/Feature.js';
      const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureUtil } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js';
      const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameFeatureListenerInterface } from './GameFeatureListenerInterface.js';
import { GameFeatureEvent } from './GameFeatureEvent.js';

export class BaseChangedGameFeatureListener
            extends Object
         implements GameFeatureListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;

    readonly list: BasicArrayList = new BasicArrayListD();

    private changed: boolean = true;

    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(CommonStrings.getInstance()!.NOT_IMPLEMENTED, this);
    
}


    public onGameFeatureChange(gameFeatureEvent: GameFeatureEvent){
this.logUtil!.putF(new StringMaker().append(this.gameFeatureUtil!.GAME_FEATURE_CHANGED)!.append(gameFeatureEvent!.getWhatChanged())!.toString(), this, this.gameFeatureUtil!.ON_GAME_FEATURE_CHANGE);
    
this.list.add(gameFeatureEvent!.getGameOption());
    
this.setChanged(true);
    
}


    public add(gameFeature: Feature){
this.list.add(gameFeature);
    
}


    public remove(gameFeature: Feature){
this.list.remove(gameFeature);
    
}


    public setChanged(initialized: boolean){
this.changed= initialized;
    

                        if(!this.isChanged())
                        
                                    {
                                    this.list.clear();
    

                                    }
                                
}


    public isChangedFeature(gameFeature: Feature): boolean{

    var isChanged: boolean = this.list.contains(gameFeature)!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("GameFeature: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(gameFeature));
    
stringBuffer!.append(" isFeature: ");
    
stringBuffer!.appendboolean(Features.getInstance()!.isFeature(gameFeature));
    
stringBuffer!.append(" isChanged: ");
    
stringBuffer!.appendboolean(isChanged);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "isChanged");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isChanged;
    
}


    public isChanged(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changed;
    
}


}
                
            

