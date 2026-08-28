
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
        
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
      const Item = globalThis.javax.microedition.lcdui.Item;

      
//not game specific package import { ItemCommandListener } from '../../../../../javax/microedition/lcdui/ItemCommandListener.js';
      const ItemCommandListener = globalThis.javax.microedition.lcdui.ItemCommandListener;

      
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

      
//not game specific package import { MidletStrings } from '../../../../../org/allbinary/midlet/MidletStrings.js';
      const MidletStrings = globalThis.org.allbinary.midlet.MidletStrings;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
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



