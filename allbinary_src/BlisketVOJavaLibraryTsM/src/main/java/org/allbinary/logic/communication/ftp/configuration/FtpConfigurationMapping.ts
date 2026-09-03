
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { TableMappingInterface } from '../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      //not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FtpConfigurationInterface } from './FtpConfigurationInterface.js';
//not GWT import const FtpConfigurationInterface = globalThis.org.allbinary.logic.communication.ftp.configuration.FtpConfigurationInterface;

                import { FtpConfigurationData } from './FtpConfigurationData.js';
//not GWT import const FtpConfigurationData = globalThis.org.allbinary.logic.communication.ftp.configuration.FtpConfigurationData;

                
export class FtpConfigurationMapping
            extends Object
         implements TableMappingInterface {
        

    private ftpConfigurationInterface: FtpConfigurationInterface;

public constructor (ftpConfigurationInterface: FtpConfigurationInterface){

            super();
        this.ftpConfigurationInterface= ftpConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(FtpConfigurationData.SERVER, this.ftpConfigurationInterface!.getServer());
    
hashMap!.put(FtpConfigurationData.USERNAME, this.ftpConfigurationInterface!.getUserName());
    
hashMap!.put(FtpConfigurationData.PASSWORD, this.ftpConfigurationInterface!.getPassword());
    
hashMap!.put(FtpConfigurationData.PATH, this.ftpConfigurationInterface!.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FtpConfigurationData.NAME;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.ftpConfigurationInterface!.getServer());
    
vector.add(this.ftpConfigurationInterface!.getUserName());
    
vector.add(this.ftpConfigurationInterface!.getPassword());
    
vector.add(this.ftpConfigurationInterface!.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}



