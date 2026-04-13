
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        

export class HtmlPasswordInput extends HtmlLengthInput {
        
public constructor (before: string, name: string, value: string, after: string)                        

                            : super(before, HtmlInputData.getInstance()!.PASSWORD, name, value, after){

            super();
            var before = before
var name = name
var value = value
var after = after


                            //For kotlin this is before the body of the constructor.
                    
setSize(new Integer(32));
    
setMaxLength(new Integer(128));
    
}


}
                
            

