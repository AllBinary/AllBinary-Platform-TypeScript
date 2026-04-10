
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

    
import { HtmlTag } from "../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js";

    

export class HtmlInput extends HtmlTag {
        

    private readonly END: string = ">";
        
        

    private readonly STARTINPUT: string = "<INPUT ";
        
        

    private readonly ENDINPUT: string = "</INPUT>";
        
        

    private readonly TYPE: string = "TYPE=\"";
        
        

    private readonly NAME: string = "NAME=\"";
        
        

    private before: string

    private type: string

    private name: string

    private after: string
public constructor (before: string, type: string, name: string, after: string){

            super();
            var before = before
var type = type
var name = name
var after = after
this.before= before
this.type= type
this.name= name
this.after= after
}


    public toString(): string{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var result: string = stringUtil!.EMPTY_STRING;
        
        


    var attributeKeys: any = {}[] = otherAttributes!.keySet()!.toTypedArray()!;
        
        


    var attributeSize: number = attributeKeys!.length
                ;
        
        

result= before
result += STARTINPUT
result += TYPE
result += type
result += "\" "
result += NAME
result += name
result += "\" "




                        for (
    var i: number = 0;
        
        
i < attributeSize; i++)
        {

    var key: string = attributeKeys[i]! as String;
        
        


    var value: string = otherAttributes!.get(key) as String;
        
        


    
                        if(value != 
                                    null
                                 && value.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    result += key
result += "=\""
result += value
result += "\" "

                                    }
                                
}

result += END
result += ENDINPUT
result += after



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

