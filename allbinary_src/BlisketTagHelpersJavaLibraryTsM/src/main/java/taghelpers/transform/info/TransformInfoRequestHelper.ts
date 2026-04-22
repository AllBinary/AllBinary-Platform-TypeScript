
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
        



import { HashMap } from "../../../java/util/HashMap.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { PageContext } from "../../../javax/servlet/jsp/PageContext.js";

    
import { ModifyTable } from "../../../admin/taghelpers/ModifyTable.js";

    
import { TransformInfoEntityBuilder } from "../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoHttpInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoHttpStoreNoManipulation } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreNoManipulation.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoHttpInterface
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        var propertiesHashMap = propertiesHashMap
var pageContext = pageContext
this.transformInfoInterface= new TransformInfoHttpStoreNoManipulation(propertiesHashMap, pageContext);
    
}


    public update(): string{

        try {
            
    var success: string = "Updated Successfully";
        
        
;
    

    var hashMapData: HashMap<any, any> = this.transformInfoInterface!.toHashMap()!;
        
        
;
    
TransformInfoEntityBuilder.getInstance()!.update(hashMapData);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update storefronts table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public insert(): string{

        try {
            
    var success: string = "Added TransformInfo Successfully";
        
        
;
    

    var values: Vector = this.transformInfoInterface!.toVector()!;
        
        
;
    
TransformInfoEntityBuilder.getInstance()!.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add storefronts table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var success: string = "Delete Successfully";
        
        
;
    
TransformInfoEntityBuilder.getInstance()!.delete(this.transformInfoInterface!.getKey();

                         as String);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to delete storefronts table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

