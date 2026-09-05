
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { TableMappingInterface } from '../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventsConfigurationInterface } from './UserEmailEventsConfigurationInterface.js';
//not GWT import - same folder const UserEmailEventsConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationInterface;

                import { UserEmailEventsConfigurationData } from './UserEmailEventsConfigurationData.js';
//not GWT import - same folder const UserEmailEventsConfigurationData = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationData;

                
export class UserEmailEventsConfigurationMapping
            extends Object
         implements TableMappingInterface {
        

    private userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface;

public constructor (userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface){

            super();
        this.userEmailEventsConfigurationInterface= userEmailEventsConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserEmailEventsConfigurationData.NAME;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}



