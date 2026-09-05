
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { TextNotificationUtil } from '../../../../../../org/allbinary/game/input/TextNotificationUtil.js';
//not GWT import const TextNotificationUtil = globalThis.org.allbinary.game.input.TextNotificationUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { Visitor } from '../../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TextItemNumberVisitor extends Visitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


    public visit(anyType: any = {}): any{

    var value: string = anyType as string;;
    

                        if(value.length < 2)
                        
                                    {
                                    
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isNumber(value))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    

                                    }
                                
                        else {
                            
        try {
            TextNotificationUtil.getInstance()!.fireError("Numbers Only");
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.FALSE;
    

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.FALSE;
    

                        }
                            
}


}



