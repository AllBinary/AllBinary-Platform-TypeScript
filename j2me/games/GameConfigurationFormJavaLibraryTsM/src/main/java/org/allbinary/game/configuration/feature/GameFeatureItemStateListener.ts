
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { ChoiceGroup } from '../../../../../javax/microedition/lcdui/ChoiceGroup.js';
      const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;

      
//not game specific package import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
      const Item = globalThis.javax.microedition.lcdui.Item;

      
//not game specific package import { ItemStateListener } from '../../../../../javax/microedition/lcdui/ItemStateListener.js';
      const ItemStateListener = globalThis.javax.microedition.lcdui.ItemStateListener;

      
//not game specific package import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
      const GameConfigurationGauge = globalThis.org.allbinary.game.configuration.GameConfigurationGauge;

      
//not game specific package import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
      const GameConfigurationUtil = globalThis.org.allbinary.game.configuration.GameConfigurationUtil;

      
//not game specific package import { GameOptionsForm } from '../../../../../org/allbinary/game/configuration/GameOptionsForm.js';
      const GameOptionsForm = globalThis.org.allbinary.game.configuration.GameOptionsForm;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameFeatureFactory } from './GameFeatureFactory.js';
import { GameFeature } from './GameFeature.js';
import { GameFeatureUtil } from './GameFeatureUtil.js';

export class GameFeatureItemStateListener
            extends Object
         implements ItemStateListener {
        

    private static toggleList: BasicArrayList = new BasicArrayListD();

    public static add(gameFeature: GameFeature){

                        if(!GameFeatureItemStateListener.toggleList!.contains(gameFeature))
                        
                                    {
                                    GameFeatureItemStateListener.toggleList!.add(gameFeature);
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private gameOptionsForm: GameOptionsForm;

public constructor (gameOptionsForm: GameOptionsForm){

            super();
        this.gameOptionsForm= gameOptionsForm;
    

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;;
    
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

        try {
            
    var itemLabel: string = item.getLabel()!;;
    
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, "itemStateChanged");
    

                        if(item instanceof GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.change(this.gameOptionsForm, item as GameConfigurationGauge);
    

                                    }
                                
                             else 
                        if(item instanceof ChoiceGroup)
                        
                                    {
                                    
    var gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;;
    

                        if(gameFeatureUtil!.isExclusive(itemLabel))
                        
                                    {
                                    gameFeatureUtil!.updateExclusiveForChoiceGroup(item as ChoiceGroup);
    

                                    }
                                
                        else {
                            gameFeatureUtil!.updateMultiple(item as ChoiceGroup);
    

                        }
                            

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "itemStateChanged", e);
    
}

}


}
                
            

