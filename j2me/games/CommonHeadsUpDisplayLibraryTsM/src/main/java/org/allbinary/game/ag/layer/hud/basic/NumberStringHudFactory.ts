
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
        
//not game specific package import { BasicHudFactory } from '../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      const BasicHudFactory = globalThis.org.allbinary.game.graphics.hud.BasicHudFactory;

      
//not game specific package import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NumberStringHud } from './NumberStringHud.js';

export class NumberStringHudFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!;

    public static getInstance(): NumberStringHudFactory{

                        if(NumberStringHudFactory.instance == NullUtil.getInstance())
                        
                                    {
                                    NumberStringHudFactory.instance= new NumberStringHudFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NumberStringHudFactory.instance as NumberStringHudFactory;
    
}


    public createHud(): NumberStringHud{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NumberStringHud(StringUtil.getInstance()!.EMPTY_STRING, 9, BasicHudFactory.getInstance()!.ABSOLUTE, 1, 0, BasicColorFactory.getInstance()!.NULL_COLOR);
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    



                            throw new RuntimeException();
                    
}

}


    public readonly NULL_NUMBER_STRING_HUD: NumberStringHud = this.createHud()!;

}
                
            

