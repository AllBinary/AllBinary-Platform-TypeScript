
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
        



            import { Class } from '../../java/lang/Class.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { Method } from '../../java/lang/reflect/Method.js';
      //not GWT import const Method = globalThis.java.lang.reflect.Method;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { CategoryHelperFactory } from '../../admin/taghelpers/CategoryHelperFactory.js';
      //not GWT import const CategoryHelperFactory = globalThis.admin.taghelpers.CategoryHelperFactory;

      
import { CategoryRequestHelperFactory } from '../../admin/taghelpers/CategoryRequestHelperFactory.js';
      //not GWT import const CategoryRequestHelperFactory = globalThis.admin.taghelpers.CategoryRequestHelperFactory;

      
import { CategoryData } from '../../org/allbinary/business/category/CategoryData.js';
      //not GWT import const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { TransformInfoData } from '../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      //not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class CategoryTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private xsl: string;

public constructor (){

            super();
        this.setTagHelperFactory(new CategoryHelperFactory());
    
this.setTagRequestHelperFactory(new CategoryRequestHelperFactory());
    
}


    public setXsl(value: string){
this.xsl= value;
    
}


                //@Throws(LicensingException.constructor)
            
    viewCategory(): string{

        try {
            
    var anyType: any = new CategoryRequestHelperFactory().getInstance(this.getPropertiesHashMap(), this.pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("viewCategory", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to view a Category";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "viewCategory()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    viewCategories(): string{

        try {
            
    var anyType: any = new CategoryRequestHelperFactory().getInstance(this.getPropertiesHashMap(), this.pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("viewCategories", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to view a Categories";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "viewCategories()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.TEMPLATEFILENAME, this.xsl);
    

                        if(this.getCommand()!.compareTo(CategoryData.getInstance()!.VIEW) == 0)
                        
                                    {
                                    
    var output: string = this.viewCategory()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    pageContext!.getOut()!.print(output);
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(CategoryData.getInstance()!.VIEW) == 0)
                        
                                    {
                                    
    var output: string = this.viewCategories()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    pageContext!.getOut()!.print(output);
    

                                    }
                                

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                        }
                            

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

                //: 
/* catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
*/
}


}



