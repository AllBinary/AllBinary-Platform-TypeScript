
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RegistrationConfiguration
            extends Object
         {
        

    private static readonly SINGLETON: RegistrationConfiguration = new RegistrationConfiguration();

    public static getInstance(): RegistrationConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RegistrationConfiguration.SINGLETON;
    
}


    private registrationCode: string = "No Registration Code";

    public readonly NAME: string = "registrationid";
private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    read(){
}


                //@Throws(Exception.constructor)
            
    public write(){
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append("Registration Code: ")!.append(this.getRegistrationCode())!.toString();;
    
}


    public setRegistrationCode(registrationCode: string){
this.registrationCode= registrationCode;
    
}


    public getRegistrationCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.registrationCode;
    
}


}
                
            

