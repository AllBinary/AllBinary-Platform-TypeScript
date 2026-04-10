
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
        



import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

export class NoThirdPartyStore extends ThirdPartyStore {
        
 constructor ()                        

                            : super(StringUtil.getInstance()!.EMPTY_STRING){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public authorize(clientInformationInterface: AbeClientInformationInterface){
var clientInformationInterface = clientInformationInterface
this.this.setAuthorized(true)
}


}
                
            

