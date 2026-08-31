
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.PlayerGameInput;

                import { GameInputProcessorInterface } from './GameInputProcessorInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.input.GameInputProcessorInterface;

                
export class GameInputProcessorComposite extends PlayerGameInput {
        

    private readonly name: string;

    private readonly gameInputProcessorInterface: GameInputProcessorInterface;

public constructor (name: string, gameInputProcessorInterface: GameInputProcessorInterface){
            super(new BasicArrayListD(), new BasicArrayListD(),  -1);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.name= name;
    
this.gameInputProcessorInterface= gameInputProcessorInterface;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public update(){

        try {
            
    var list: BasicArrayList = this.getGameKeyEventList()!;;
    
this.gameInputProcessorInterface!.onInput(list);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    
}

}


    private readonly NAME_LABEL: string = " GameInputProcessorInterface: ";

    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(super.toString())!.append(this.NAME_LABEL)!.append(this.name)!.toString();;
    
}


}



