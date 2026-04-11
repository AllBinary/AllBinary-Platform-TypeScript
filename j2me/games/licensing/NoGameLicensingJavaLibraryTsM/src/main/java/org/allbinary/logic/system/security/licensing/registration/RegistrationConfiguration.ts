
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
        



import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class RegistrationConfiguration
            extends Object
         {
        

    private static readonly SINGLETON: RegistrationConfiguration = new RegistrationConfiguration();
        
        

    public static getInstance(): RegistrationConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private registrationCode: string = "No Registration Code";
        
        

    public readonly NAME: string = "registrationid";
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    read(){
}


                //@Throws(Error::class)
            
    public write(){
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append("Registration Code: ")!.append(this.getRegistrationCode())!.toString();

                        ;
    
}


    public setRegistrationCode(registrationCode: string){
var registrationCode = registrationCode
this.registrationCode= registrationCode;
    
}


    public getRegistrationCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return registrationCode;
    
}


}
                
            

