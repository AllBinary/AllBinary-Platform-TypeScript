
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
        



import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { PlatformInputMappingFactory } from "../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { GameInputMapping } from "../../../../../org/allbinary/game/input/mapping/GameInputMapping.js";

    
import { PersistentInputMapping } from "../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicInputMappingHelpPaintable extends HelpPaintable {
        

    private gameInputMappingArray: GameInputMapping[]

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;
        
        
protected constructor (gameInputMappingArray: GameInputMapping[], basicColor: BasicColor)                        

                            : super(basicColor){

            super();
                //var gameInputMappingArray = gameInputMappingArray
    //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.gameInputMappingArray= gameInputMappingArray
this.update(NONE, NONE)
}


    public update(selectedGameKey: GameKey, selectedInput: Input){
    //var selectedGameKey = selectedGameKey
    //var selectedInput = selectedInput

    var gameKeyMapping: PersistentInputMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!;
        
        


    var EQUAL: string = " = ";
        
        


    var stringMaker: StringMaker = new StringMaker();
        
        


    var size: number = gameInputMappingArray!.length
                ;
        
        


    var keyInfo: string[] = new Array(size);
        
        


    var gameInputMapping: GameInputMapping


    var gameKey: GameKey


    var list: BasicArrayList





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameInputMapping= gameInputMappingArray[index]!
gameKey= gameInputMapping!.getGameKey()
list= gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey)
stringMaker!.delete(0, stringMaker!.length())
keyInfo[index]= stringMaker!.append(gameInputMapping!.getName())!.append(EQUAL)!.append(this.get(list))!.toString()
}

super.setInputInfoP(keyInfo)
}


    get(keyList: BasicArrayList): string{
    //var keyList = keyList

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    var AND: string = "and ";
        
        


    var key: Input


    var size: number = keyList!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
key= keyList!.objectArray[index]! as Input
stringBuffer!.append(key.getName())

                        if(index +1 < keyList!.size())
                        
                                    {
                                    
                        if(keyList!.size() == 2)
                        
                                    {
                                    stringBuffer!.append(commonSeps!.SPACE)!.append(AND)

                                    }
                                
                        else {
                            
                        if(index +2 == keyList!.size())
                        
                                    {
                                    stringBuffer!.append(commonSeps!.COMMA_SEP)
stringBuffer!.append(AND)

                                    }
                                
                        else {
                            stringBuffer!.append(commonSeps!.COMMA_SEP)

                        }
                            

                        }
                            

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

