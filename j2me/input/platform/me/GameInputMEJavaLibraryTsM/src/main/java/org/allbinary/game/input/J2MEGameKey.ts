
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

        


//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Input } from './Input.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;

                import { InputFactory } from './InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

                
export class J2MEGameKey extends Input {
        

    public static getString(keyCode: number): string{

    var input: Input = InputFactory.getInstance()!.getInstanceById(keyCode)!;;
    

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


protected constructor (key: number, keyName: string){
            super(key, keyName);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var id: number = this.getId()!;;
    

                        if(id >= 0)
                        
                                    {
                                    
    var inputFactory: InputFactory = InputFactory.getInstance()!;;
    
inputFactory!.add(id, this);
    

                                    }
                                
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append("J2MEGameKey: ")!.append(super.toString())!.toString();;
    
}


}



