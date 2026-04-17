
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
        



import { JspTagException } from "../../../javax/servlet/jsp/JspTagException.js";

    
import { TagHelperFactoryInterface } from "../../../admin/taghelpers/TagHelperFactoryInterface.js";

    
import { StoreFrontData } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { AbResponseHandler } from "../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OutputTypeData } from "../../../org/allbinary/logic/io/OutputTypeData.js";

    
import { TransformInfoData } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoRequestHelperFactory } from "../../../taghelpers/transform/info/TransformInfoRequestHelperFactory.js";

    
import { ModifyTag } from "../../../tags/ModifyTag.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoTag extends ModifyTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string

    private storeName: string

    private objectFile: string

    private anyType: string

    private objectConfigFile: string

    private objectConfig: string

    private templateFile: string

    private template: string

    private dataFile: string

    private data: string

    private type: string
public constructor ()                        

                            : super(new TransformInfoRequestHelperFactory()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (tagHelperFactoryInterface: TagHelperFactoryInterface)                        

                            : super(tagHelperFactoryInterface){

            super();
            var tagHelperFactoryInterface = tagHelperFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public setName(value: string){
var value = value
this.name= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.NAME, this.name);
    
}


    public setStoreName(value: string){
var value = value
this.storeName= value;
    
this.getPropertiesHashMap()!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
}


    public setObjectFile(value: string){
var value = value
this.objectFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECTFILENAME, this.objectFile);
    
}


    public setObject(value: string){
var value = value
this.anyType= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECT, this.anyType);
    
}


    public setTemplateFile(value: string){
var value = value
this.templateFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.TEMPLATEFILENAME, this.templateFile);
    
}


    public setTemplate(value: string){
var value = value
this.template= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.TEMPLATE, this.template);
    
}


    public setDataFile(value: string){
var value = value
this.dataFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.DATAFILENAME, this.dataFile);
    
}


    public setData(value: string){
var value = value
this.data= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.DATA, this.data);
    
}


    public setObjectConfigFile(value: string){
var value = value
this.objectConfigFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECTCONFIGFILENAME, this.objectConfigFile);
    
}


    public setObjectConfig(value: string){
var value = value
this.objectConfig= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECTCONFIG, this.objectConfig);
    
}


    public setType(value: string){
var value = value
this.type= value;
    
this.getPropertiesHashMap()!.put(OutputTypeData.getInstance()!.NAME, this.type);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("TransformInfoTag type set: " +this.type, this, "setType");
    

                                    }
                                
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getObjectFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectFile;
    
}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

