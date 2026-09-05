
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
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { TableMappingInterface } from '../../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailConfigurationInterface } from './UserEmailConfigurationInterface.js';
//not GWT import - same folder const UserEmailConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

                import { UserEmailConfigurationData } from './UserEmailConfigurationData.js';
//not GWT import - same folder const UserEmailConfigurationData = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationData;

                
export class UserEmailConfigurationMapping
            extends Object
         implements TableMappingInterface {
        

    private userEmailConfigurationInterface: UserEmailConfigurationInterface;

public constructor (userEmailConfigurationInterface: UserEmailConfigurationInterface){

            super();
        this.userEmailConfigurationInterface= userEmailConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserEmailConfigurationData.NAME;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}



