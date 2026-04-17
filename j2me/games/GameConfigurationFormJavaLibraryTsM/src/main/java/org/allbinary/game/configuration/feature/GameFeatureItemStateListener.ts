
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
        



import { ChoiceGroup } from "../../../../../javax/microedition/lcdui/ChoiceGroup.js";

    
import { Item } from "../../../../../javax/microedition/lcdui/Item.js";

    
import { ItemStateListener } from "../../../../../javax/microedition/lcdui/ItemStateListener.js";

    
import { GameConfigurationGauge } from "../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js";

    
import { GameConfigurationUtil } from "../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js";

    
import { GameOptionsForm } from "../../../../../org/allbinary/game/configuration/GameOptionsForm.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameFeatureFactory } from "./GameFeatureFactory.js";

import { GameFeature } from "./GameFeature.js";

import { GameFeatureUtil } from "./GameFeatureUtil.js";

export class GameFeatureItemStateListener
            extends Object
         implements ItemStateListener {
        

    private toggleList: BasicArrayList = new BasicArrayList();
        
        

    public static add(gameFeature: GameFeature){
var gameFeature = gameFeature

                        if(!GameFeatureItemStateListener.toggleList!.contains(gameFeature);

                        )
                        
                                    {
                                    GameFeatureItemStateListener.toggleList!.add(gameFeature);
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private gameOptionsForm: GameOptionsForm
public constructor (gameOptionsForm: GameOptionsForm){

            super();
            var gameOptionsForm = gameOptionsForm
this.gameOptionsForm= gameOptionsForm;
    

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        
;
    
GameFeatureItemStateListener.add(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.DAMAGE_FLOATERS);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.DROPPED_ITEMS);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.HEALTH_BARS);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.SOUND);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR);
    
}


    public itemStateChanged(item: Item){
var item = item

        try {
            
    var itemLabel: string = item.getLabel()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, "itemStateChanged");
    

                        if(item is GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.change(this.gameOptionsForm, item as GameConfigurationGauge);
    

                                    }
                                
                             else 
                        if(item is ChoiceGroup)
                        
                                    {
                                    
    var gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;
        
        
;
    

                        if(gameFeatureUtil!.isExclusive(itemLabel))
                        
                                    {
                                    gameFeatureUtil!.updateExclusive(item as ChoiceGroup);
    

                                    }
                                
                        else {
                            gameFeatureUtil!.updateMultiple(item as ChoiceGroup);
    

                        }
                            

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "itemStateChanged", e);
    
}

}


}
                
            

