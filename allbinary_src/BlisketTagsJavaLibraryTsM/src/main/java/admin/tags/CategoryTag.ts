
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
        



import { Method } from "../../java/lang/reflect/Method.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { CategoryHelperFactory } from "../../admin/taghelpers/CategoryHelperFactory.js";

    
import { CategoryRequestHelperFactory } from "../../admin/taghelpers/CategoryRequestHelperFactory.js";

    
import { CategoryData } from "../../org/allbinary/business/category/CategoryData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { TransformInfoData } from "../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    

export class CategoryTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private xsl: string
public constructor (){

            super();
            this.setTagHelperFactory(CategoryHelperFactory());
    
this.setTagRequestHelperFactory(CategoryRequestHelperFactory());
    
}


    public setXsl(value: string){
var value = value
this.xsl= value;
    
}


                //@Throws(LicensingException::class)
            
    viewCategory(): string{

        try {
            
    var anyType: any = CategoryRequestHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("viewCategory", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to view a Category";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "viewCategory()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    viewCategories(): string{

        try {
            
    var anyType: any = CategoryRequestHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("viewCategories", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to view a Categories";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "viewCategories()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
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
                                    
    var output: string = this.viewCategory()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    pageContext!.getOut()!.print(output);
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(CategoryData.getInstance()!.VIEW) == 0)
                        
                                    {
                                    
    var output: string = this.viewCategories()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    pageContext!.getOut()!.print(output);
    

                                    }
                                

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

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
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

