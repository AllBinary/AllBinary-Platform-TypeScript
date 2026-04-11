
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameInputProcessorComposite extends PlayerGameInput {
        

    private readonly name: string

    private readonly gameInputProcessorInterface: GameInputProcessorInterface
public constructor (name: string, gameInputProcessorInterface: GameInputProcessorInterface)                        

                            : super(new BasicArrayList(),  -1){

            super();
            var name = name
var gameInputProcessorInterface = gameInputProcessorInterface


                            //For kotlin this is before the body of the constructor.
                    
this.name= name;
    
this.gameInputProcessorInterface= gameInputProcessorInterface;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public update(){

        try {
            
    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        
;
    
this.gameInputProcessorInterface!.onInput(list);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

}


    private readonly NAME_LABEL: string = " GameInputProcessorInterface: ";
        
        

    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(super.toString())!.append(NAME_LABEL)!.append(name)!.toString();

                        ;
    
}


}
                
            

