
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
        



import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

export class ThirdPartyStore
            extends Object
         {
        

    private authorized: boolean= false

    private readonly name: string
public constructor (name: string){

            super();
            var name = name
this.name= name;
    
}


    public authorize(clientInformationInterface: AbeClientInformationInterface){
var clientInformationInterface = clientInformationInterface
}


    public isAuthorized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return authorized;
    
}


    setAuthorized(authorized: boolean){
var authorized = authorized
this.authorized= authorized;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

