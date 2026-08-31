
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { TableMappingInterface } from '../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      //not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
//not GWT import const ContextConfigurationInterface = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterface;

                import { ContextConfigurationData } from './ContextConfigurationData.js';
//not GWT import const ContextConfigurationData = globalThis.org.allbinary.business.context.configuration.ContextConfigurationData;

                
export class ContextConfigurationTableMapping
            extends Object
         implements TableMappingInterface {
        

    private contextConfigurationInterface: ContextConfigurationInterface;

public constructor (contextConfigurationInterface: ContextConfigurationInterface){

            super();
        this.contextConfigurationInterface= contextConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ContextConfigurationData.getInstance()!.NAME;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): Vector{

    var vector: Vector = new Vector();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}



