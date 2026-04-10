
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
        



import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { Item } from "../../../../../javax/microedition/lcdui/Item.js";

    
import { ItemCommandListener } from "../../../../../javax/microedition/lcdui/ItemCommandListener.js";

    
import { GameConfigurationGauge } from "../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js";

    
import { GameConfigurationUtil } from "../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js";

    
import { GameOptionsForm } from "../../../../../org/allbinary/game/configuration/GameOptionsForm.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { MidletStrings } from "../../../../../org/allbinary/midlet/MidletStrings.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class GameFeatureItemCommandListener
            extends Object
        
                , ItemCommandListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private gameOptionsForm: GameOptionsForm
public constructor (gameOptionsForm: GameOptionsForm){

            super();
            var gameOptionsForm = gameOptionsForm
this.gameOptionsForm= gameOptionsForm
}


    public commandAction(command: Command, item: Item){
var command = command
var item = item

        try {
            
    var itemLabel: string = item.getLabel()!;
        
        

put(StringMaker().
                            append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, MidletStrings.getInstance()!.COMMAND_ACTION)

    
                        if(item is GameConfigurationGauge)
                        
                                    {
                                    change(this.gameOptionsForm, item as GameConfigurationGauge)

                                    }
                                
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, MidletStrings.getInstance()!.COMMAND_ACTION, e)
}

}


}
                
            

