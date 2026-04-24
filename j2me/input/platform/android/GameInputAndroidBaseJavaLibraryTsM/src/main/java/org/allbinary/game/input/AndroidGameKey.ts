
        /* Generated Code Do Not Modify */
        



import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Input } from "./Input.js";

import { InputFactory } from "./InputFactory.js";

export class AndroidGameKey extends Input {
        

    public static getString(keyCode: number): string{
var keyCode = keyCode

    var input: Input = InputFactory.getInstance()!.getInstance(keyCode)!;
        
        
;
    

                        if(input != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return input.getName();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            
}

 constructor (keyCode: number, name: string){
            super(keyCode, name);
                    var keyCode = keyCode
var name = name


                            //For kotlin this is before the body of the constructor.
                    

    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        
;
    
inputFactory!.inputIntegerArray[this.getId()]= this;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "AndroidGameKey: " +super.toString();
    
}


}
                
            

