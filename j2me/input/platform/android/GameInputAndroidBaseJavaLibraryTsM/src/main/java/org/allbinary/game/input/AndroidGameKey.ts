
        /* Generated Code Do Not Modify */

        


//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Input } from './Input.js';
//sameFolderImports - not GWT import - same folder const Input
import { InputFactory } from './InputFactory.js';
//sameFolderImports - not GWT import - same folder const InputFactory

export class AndroidGameKey extends Input {
        

    public static getString(keyCode: number): string{

    let input: Input = InputFactory.getInstance()!.getInstanceById(keyCode)!;;
    

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
                    

                            //For kotlin this is before the body of the constructor.
                    

    let inputFactory: InputFactory = InputFactory.getInstance()!;;
    
inputFactory!.inputIntegerArray[this.getId()]= this;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "AndroidGameKey: " +super.toString();
    
}


}

