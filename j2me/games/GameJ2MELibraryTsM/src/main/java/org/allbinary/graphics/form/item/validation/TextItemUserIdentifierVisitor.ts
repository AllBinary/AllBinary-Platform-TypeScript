
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
        



import { TextNotificationUtil } from "../../../../../../org/allbinary/game/input/TextNotificationUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Visitor } from "../../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class TextItemUserIdentifierVisitor extends Visitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


    public visit(anyType: any = {}): any = {}{
var anyType = anyType

    var value: string = anyType as String;
        
        


    
                        if(value.length < 2)
                        
                                    {
                                    
    var charValue: string = value[0]!;
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(stringValidationUtil!.isNumber(value))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    

                                    }
                                
                             else 
    
                        if(this.isLetter(charValue))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    

                                    }
                                
                        else {
                            
        try {
            fireError("Only Letters & Numbers Allowed")
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, e)
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


    public isLetter(charValue: string): boolean{
var charValue = charValue

    var value: number = charValue.toInt();
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (value > 64 && value < 91) || (value > 96 && value < 123);
    
}


}
                
            

