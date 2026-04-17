
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Input
            extends Object
         {
        

    private id: number= 0

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (id: number, name: string){

            super();
            var id = id
var name = name
this.setId(id);
    
this.setName(name);
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    setId(key: number){
var key = key
this.id= key;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    setName(keyName: string){
var keyName = keyName
this.name= keyName;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Name: ");
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(" Id: ");
    
stringBuffer!.appendint(this.getId());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

