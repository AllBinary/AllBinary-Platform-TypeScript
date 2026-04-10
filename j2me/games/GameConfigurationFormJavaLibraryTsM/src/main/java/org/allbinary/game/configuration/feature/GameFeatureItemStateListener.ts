
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

    

export class GameFeatureItemStateListener
            extends Object
        
                , ItemStateListener {
        

    private toggleList: BasicArrayList = new BasicArrayList();
        
        

    public static add(gameFeature: GameFeature){
var gameFeature = gameFeature

    
                        if(!GameFeatureItemStateListener.toggleList!.contains(gameFeature))
                        
                                    {
                                    add(gameFeature)

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private gameOptionsForm: GameOptionsForm
public constructor (gameOptionsForm: GameOptionsForm){

            super();
            var gameOptionsForm = gameOptionsForm
this.gameOptionsForm= gameOptionsForm

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        

add(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR)
add(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR)
add(gameFeatureFactory!.DAMAGE_FLOATERS)
add(gameFeatureFactory!.DROPPED_ITEMS)
add(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR)
add(gameFeatureFactory!.HEALTH_BARS)
add(gameFeatureFactory!.SOUND)
add(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR)
}


    public itemStateChanged(item: Item){
var item = item

        try {
            
    var itemLabel: string = item.getLabel()!;
        
        

put(StringMaker().
                            append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, "itemStateChanged")

    
                        if(item is GameConfigurationGauge)
                        
                                    {
                                    change(this.gameOptionsForm, item as GameConfigurationGauge)

                                    }
                                
                             else 
    
                        if(item is ChoiceGroup)
                        
                                    {
                                    
    var gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;
        
        


    
                        if(gameFeatureUtil!.isExclusive(itemLabel))
                        
                                    {
                                    updateExclusive(item as ChoiceGroup)

                                    }
                                
                        else {
                            updateMultiple(item as ChoiceGroup)

                        }
                            

                                    }
                                
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, "itemStateChanged", e)
}

}


}
                
            

