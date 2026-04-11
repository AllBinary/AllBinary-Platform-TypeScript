
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

export class EmailServerConfigurationMapping
            extends Object
        
                , TableMappingInterface {
        

    private emailServerConfigurationInterface: EmailServerConfigurationInterface
public constructor (emailServerConfigurationInterface: EmailServerConfigurationInterface){

            super();
            var emailServerConfigurationInterface = emailServerConfigurationInterface
this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(EmailServerConfigurationData.SERVER, this.emailServerConfigurationInterface!.getSmtpServer());
    
hashMap!.put(EmailServerConfigurationData.ACCOUNT, this.emailServerConfigurationInterface!.getAccountName());
    
hashMap!.put(EmailServerConfigurationData.PASSWORD, this.emailServerConfigurationInterface!.getPassword());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EmailServerConfigurationData.NAME;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        
;
    
vector.add(this.emailServerConfigurationInterface!.getSmtpServer());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

