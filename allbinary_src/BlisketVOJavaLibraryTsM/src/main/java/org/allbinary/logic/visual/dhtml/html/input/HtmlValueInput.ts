
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
        



import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class HtmlValueInput extends HtmlInput {
        

    private value: string

    private readonly VALUE: string = "VALUE";
        
        
public constructor (before: string, type: string, name: string, value: string, after: string)                        

                            : super(before, type, name, after){

            super();
            var before = before
var type = type
var name = name
var value = value
var after = after


                            //For kotlin this is before the body of the constructor.
                    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

this.value= stringUtil!.EMPTY_STRING
addAttribute(VALUE, value)
}


}
                
            

