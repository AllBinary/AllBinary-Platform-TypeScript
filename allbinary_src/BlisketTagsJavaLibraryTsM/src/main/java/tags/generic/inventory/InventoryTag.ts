
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
        



import { Method } from "../../../java/lang/reflect/Method.js";

    
import { JspTagException } from "../../../javax/servlet/jsp/JspTagException.js";

    
import { AbResponseHandler } from "../../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { InventoryHelperFactory } from "../../../taghelpers/InventoryHelperFactory.js";

    
import { StoreValidationTransformTag } from "../../../tags/StoreValidationTransformTag.js";

    

export class InventoryTag extends StoreValidationTransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(LicensingException::class)
            
    search(){

        try {
            
    var anyType: any = new InventoryHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("search", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    
pageContext!.getOut()!.print(result);
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to search Inventory by keyword";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "search()", e);
    

                                    }
                                

        try {
            pageContext!.getOut()!.print(error +"<br>");
    
pageContext!.getOut()!.print("Exception: " +e +"<br>");
    

                //: 
} catch(e2) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    this.logUtil!.put("Exception in Exception Handling", this, "search()", e);
    

                                    }
                                
}

}

}


                //@Throws(LicensingException::class)
            
    viewSummary(){

        try {
            
    var anyType: any = new InventoryHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("viewSummary", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    
pageContext!.getOut()!.print(result);
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed to View Summary";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "viewSummary()", e);
    

                                    }
                                

        try {
            pageContext!.getOut()!.print(error +"<br>");
    
pageContext!.getOut()!.print("Exception: " +e +"<br>");
    

                //: 
} catch(e2) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    this.logUtil!.put("Exception in Exception Handling", this, "viewSummary())", e);
    

                                    }
                                
}

}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.SEARCH) == 0)
                        
                                    {
                                    this.setName("Basic Search Inventory View");
    
this.setObjectFile("views.generic.inventory.AutoSearchValidationInventoryView");
    
this.search();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEWSUMMARY) == 0)
                        
                                    {
                                    this.setName("Basic Inventory View");
    
this.setObjectFile("views.generic.inventory.AutoValidationInventoryView");
    
this.viewSummary();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    this.setName("Basic Inventory View");
    
this.setObjectFile("views.generic.inventory.AutoValidationInventoryView");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                                    }
                                
                        else {
                            


                            throw new Error("No Such View Command: " +this.getCommand())

                        }
                            

                                    }
                                



                            throw new Error("Command Null")

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
                
            

