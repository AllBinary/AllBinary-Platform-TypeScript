
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
        
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
      const Item = globalThis.javax.microedition.lcdui.Item;

      
//not plain js import { ItemCommandListener } from '../../../../../javax/microedition/lcdui/ItemCommandListener.js';
      const ItemCommandListener = globalThis.javax.microedition.lcdui.ItemCommandListener;

      
import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
      //not GWT import const GameConfigurationGauge = globalThis.org.allbinary.game.configuration.GameConfigurationGauge;

      
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
      //not GWT import const GameConfigurationUtil = globalThis.org.allbinary.game.configuration.GameConfigurationUtil;

      
import { GameOptionsForm } from '../../../../../org/allbinary/game/configuration/GameOptionsForm.js';
      //not GWT import const GameOptionsForm = globalThis.org.allbinary.game.configuration.GameOptionsForm;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { MidletStrings } from '../../../../../org/allbinary/midlet/MidletStrings.js';
      //not GWT import const MidletStrings = globalThis.org.allbinary.midlet.MidletStrings;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameFeatureItemCommandListener
            extends Object
         implements ItemCommandListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private gameOptionsForm: GameOptionsForm;

public constructor (gameOptionsForm: GameOptionsForm){

            super();
        this.gameOptionsForm= gameOptionsForm;
    
}


    public commandAction(command: Command, item: Item){

        try {
            
    var itemLabel: string = item.getLabel()!;;
    
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, MidletStrings.getInstance()!.COMMAND_ACTION);
    

                        if(item instanceof GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.change(this.gameOptionsForm, item as GameConfigurationGauge);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, MidletStrings.getInstance()!.COMMAND_ACTION, e);
    
}

}


}



