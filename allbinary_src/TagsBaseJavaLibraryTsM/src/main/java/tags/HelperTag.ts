
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
        



import { TagHelperFactoryInterface } from "../admin/taghelpers/TagHelperFactoryInterface.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PropertiesTag } from "./PropertiesTag.js";

export class HelperTag extends PropertiesTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tagHelperFactoryInterface: TagHelperFactoryInterface

    private anyType: any
public constructor (tagHelperFactoryInterface: TagHelperFactoryInterface){

            super();
            //var tagHelperFactoryInterface = tagHelperFactoryInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.tagHelperFactoryInterface= tagHelperFactoryInterface;
    
}


                //@Throws(Error::class)
            
    setHelper(){

                        if(this.anyType == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Creating TagHelper with: \n" +this.getPropertiesHashMap()!.toString(), this, "doStartTag");
    

                                    }
                                
this.anyType= this.tagHelperFactoryInterface!.getInstance(this.getPropertiesHashMap(), this.pageContext);
    

                                    }
                                
}


    public getHelper(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.anyType;
    
}


    public doEndTag(): number{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Tag Ended", this, "doEndTag");
    

                                    }
                                
this.anyType= 
                                        null
                                    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doEndTag();;
    
}


}
                
            

