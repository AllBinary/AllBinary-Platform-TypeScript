
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
        
import { HashMap } from "../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

export class FtpConfigurationMapping
            extends Object
        
                , TableMappingInterface {
        

    private ftpConfigurationInterface: FtpConfigurationInterface
public constructor (ftpConfigurationInterface: FtpConfigurationInterface){

            super();
            var ftpConfigurationInterface = ftpConfigurationInterface
this.ftpConfigurationInterface= ftpConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(FtpConfigurationData.SERVER, this.ftpConfigurationInterface!.getServer());
    
hashMap!.put(FtpConfigurationData.USERNAME, this.ftpConfigurationInterface!.getUserName());
    
hashMap!.put(FtpConfigurationData.PASSWORD, this.ftpConfigurationInterface!.getPassword());
    
hashMap!.put(FtpConfigurationData.PATH, this.ftpConfigurationInterface!.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FtpConfigurationData.NAME;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        
;
    
vector.add(this.ftpConfigurationInterface!.getServer());
    
vector.add(this.ftpConfigurationInterface!.getUserName());
    
vector.add(this.ftpConfigurationInterface!.getPassword());
    
vector.add(this.ftpConfigurationInterface!.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

