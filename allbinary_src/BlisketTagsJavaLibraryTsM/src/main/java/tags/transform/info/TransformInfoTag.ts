
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { JspTagException } from '../../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { TagHelperFactoryInterface } from '../../../admin/taghelpers/TagHelperFactoryInterface.js';
      const TagHelperFactoryInterface = globalThis.admin.taghelpers.TagHelperFactoryInterface;

      
//not game specific package import { StoreFrontData } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { AbResponseHandler } from '../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { OutputTypeData } from '../../../org/allbinary/logic/io/OutputTypeData.js';
      const OutputTypeData = globalThis.org.allbinary.logic.io.OutputTypeData;

      
//not game specific package import { TransformInfoData } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { TransformInfoRequestHelperFactory } from '../../../taghelpers/transform/info/TransformInfoRequestHelperFactory.js';
      const TransformInfoRequestHelperFactory = globalThis.taghelpers.transform.info.TransformInfoRequestHelperFactory;

      
//not game specific package import { ModifyTag } from '../../../tags/ModifyTag.js';
      const ModifyTag = globalThis.tags.ModifyTag;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoTag extends ModifyTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private name: string;

    private storeName: string;

    private objectFile: string;

    private anyType: string;

    private objectConfigFile: string;

    private objectConfig: string;

    private templateFile: string;

    private template: string;

    private dataFile: string;

    private data: string;

    private type: string;

public constructor (){
            super(new TransformInfoRequestHelperFactory());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (tagHelperFactoryInterface: TagHelperFactoryInterface){
            super(tagHelperFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public setName(value: string){
this.name= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.NAME, this.name);
    
}


    public setStoreName(value: string){
this.storeName= value;
    
this.getPropertiesHashMap()!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
}


    public setObjectFile(value: string){
this.objectFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECTFILENAME, this.objectFile);
    
}


    public setObject(value: string){
this.anyType= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECT, this.anyType);
    
}


    public setTemplateFile(value: string){
this.templateFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.TEMPLATEFILENAME, this.templateFile);
    
}


    public setTemplate(value: string){
this.template= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.TEMPLATE, this.template);
    
}


    public setDataFile(value: string){
this.dataFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.DATAFILENAME, this.dataFile);
    
}


    public setData(value: string){
this.data= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.DATA, this.data);
    
}


    public setObjectConfigFile(value: string){
this.objectConfigFile= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECTCONFIGFILENAME, this.objectConfigFile);
    
}


    public setObjectConfig(value: string){
this.objectConfig= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.OBJECTCONFIG, this.objectConfig);
    
}


    public setType(value: string){
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


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}



