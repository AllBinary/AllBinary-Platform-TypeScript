
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
        



//not game specific package import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      const Input = globalThis.org.allbinary.game.input.Input;

      
//not game specific package import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
//not game specific package import { GameInputMapping } from '../../../../../org/allbinary/game/input/mapping/GameInputMapping.js';
      const GameInputMapping = globalThis.org.allbinary.game.input.mapping.GameInputMapping;

      
//not game specific package import { PersistentInputMapping } from '../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
      const PersistentInputMapping = globalThis.org.allbinary.game.input.mapping.PersistentInputMapping;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HelpPaintable } from './HelpPaintable.js';

export class BasicInputMappingHelpPaintable extends HelpPaintable {
        

    private gameInputMappingArray: GameInputMapping[];

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

protected constructor (gameInputMappingArray: GameInputMapping[], basicColor: BasicColor){
            super("Help Screen", BasicColorFactory.getInstance()!.BLACK, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.gameInputMappingArray= gameInputMappingArray;
    
this.update(this.NONE, this.NONE);
    
}


    public update(selectedGameKey: GameKey, selectedInput: Input){

    var gameKeyMapping: PersistentInputMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!;;
    

    var EQUAL: string = " = ";;
    

    var stringMaker: StringMaker = new StringMaker();;
    

    var size: number = this.gameInputMappingArray!.length
                ;;
    

    var keyInfo: string[] = new Array(size);;
    

    var gameInputMapping: GameInputMapping;;
    

    var gameKey: GameKey;;
    

    var list: BasicArrayList;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameInputMapping= this.gameInputMappingArray[index]!;
    
gameKey= gameInputMapping!.getGameKey();
    
list= gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey);
    
stringMaker!.delete(0, stringMaker!.length());
    
keyInfo[index]= stringMaker!.append(gameInputMapping!.getName())!.append(EQUAL)!.append(this.get(list))!.toString();
    
}

super.setInputInfoP(keyInfo);
    
}


    get(keyList: BasicArrayList): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var AND: string = "and ";;
    

    var key: Input;;
    

    var size: number = keyList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
key= keyList!.objectArray[index]! as Input;
    
stringBuffer!.append(key.getName());
    

                        if(index +1 < keyList!.size())
                        
                                    {
                                    
                        if(keyList!.size() == 2)
                        
                                    {
                                    stringBuffer!.append(commonSeps!.SPACE)!.append(AND);
    

                                    }
                                
                        else {
                            
                        if(index +2 == keyList!.size())
                        
                                    {
                                    stringBuffer!.append(commonSeps!.COMMA_SEP);
    
stringBuffer!.append(AND);
    

                                    }
                                
                        else {
                            stringBuffer!.append(commonSeps!.COMMA_SEP);
    

                        }
                            

                        }
                            

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

