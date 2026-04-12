
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

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { TagHelperFactoryInterface } from "../../admin/taghelpers/TagHelperFactoryInterface.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SqlStrings } from "../../org/allbinary/logic/communication/sql/SqlStrings.js";

    
import { BooleanUtil } from "../../org/allbinary/logic/java/bool/BooleanUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { PropertiesTag } from "../../tags/PropertiesTag.js";

    

export class TableTag extends PropertiesTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private enabled: string

    private tagHelperFactoryInterface: TagHelperFactoryInterface

    private tagRequestHelperFactoryInterface: TagHelperFactoryInterface

    private requestObject: any

    private current: Integer

    private total: Integer
public constructor (){

            super();
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public setIsSelected(enabled: string){
var enabled = enabled
this.enabled= enabled;
    
}


                //@Throws(Error::class)
            
    public isEnabled(): boolean{

                        if(!StringValidationUtil.getInstance()!.isEmpty(this.enabled);

                        )
                        
                                    {
                                    
                        if(BooleanUtil.getInstance()!.getFromString(this.enabled) || this.enabled.compareTo("on") == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    setTagHelperFactory(tagHelperFactoryInterface: TagHelperFactoryInterface){
var tagHelperFactoryInterface = tagHelperFactoryInterface
this.tagHelperFactoryInterface= tagHelperFactoryInterface;
    
}


    getTagHelperFactoryInterface(): TagHelperFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tagHelperFactoryInterface;
    
}


    setTagRequestHelperFactory(tagHelperFactoryInterface: TagHelperFactoryInterface){
var tagHelperFactoryInterface = tagHelperFactoryInterface
this.tagRequestHelperFactoryInterface= tagHelperFactoryInterface;
    
}


    getTagRequestHelperFactoryInterface(): TagHelperFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tagRequestHelperFactoryInterface;
    
}


    public setCurrent(current: Integer){
var current = current
this.current= current;
    
}


    public getCurrent(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return current;
    
}


    public setTotal(total: Integer){
var total = total
this.total= total;
    
}


    public getTotal(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


                //@Throws(LicensingException::class)
            
    public drop(): string{

        try {
            
    var anyType: any = getTagHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("drop", 
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

    var error: string = "Failed to drop table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public create(): string{

        try {
            
    var anyType: any = getTagHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("create", 
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

    var error: string = "Failed to create table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public restore(): string{

        try {
            
    var anyType: any = getTagHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("restore", 
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

    var error: string = "Failed to restore backup";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public backup(): string{

        try {
            
    var anyType: any = getTagHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;
        
        
;
    

    var addressHelperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = addressHelperClass!.getMethod("backup", 
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

    var error: string = "Failed to make backup";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public insert(): string{

        try {
            
    var helperClass: Function = requestObject!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("insert", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(requestObject, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to insert";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public delete(): string{

        try {
            
    var helperClass: Function = requestObject!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod(commonStrings!.delete, 
                            null)!;
        
        
;
    

    var result: string = method.invoke(requestObject, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to delete";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(LicensingException::class)
            
    public update(): string{

        try {
            
    var helperClass: Function = requestObject!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod("update", 
                            null)!;
        
        
;
    

    var result: string = method.invoke(requestObject, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var request: HttpServletRequest = this.pageContext!.getRequest();

                         as HttpServletRequest;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("TableTag Helper: ");
    
stringBuffer!.append(this.getTagHelperFactoryInterface()!..constructor.name.toString()!);
    
stringBuffer!.append(" Request URI: ");
    
stringBuffer!.append(request.getRequestURI());
    
this.logUtil!.putF(stringBuffer!.toString(), this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.getTagRequestHelperFactoryInterface() != 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("TableTag RequestHelper: " +this.getTagRequestHelperFactoryInterface()!..constructor.name.toString()!, this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("TableTag RequestHelper: null", this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("TableTag this.getCommand(): " +this.getCommand(), this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(commonStrings!.INSERT) == 0 || this.getCommand()!.compareTo(SqlStrings.getInstance()!.INSERT_INTO) == 0 || this.getCommand()!.compareTo(commonStrings!.DELETE) == 0 || this.getCommand()!.compareTo(commonStrings!.UPDATE) == 0 || this.getCommand()!.compareTo(SqlStrings.getInstance()!.UPDATE) == 0)
                        
                                    {
                                    this.requestObject= getTagRequestHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext);
    

                                    }
                                

                        if(this.getCommand()!.compareTo(commonStrings!.INSERT) == 0 || this.getCommand()!.compareTo(SqlStrings.getInstance()!.INSERT_INTO) == 0)
                        
                                    {
                                    this.insert();
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.DELETE) == 0)
                        
                                    {
                                    this.delete();
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.UPDATE) == 0 || this.getCommand()!.compareTo(SqlStrings.getInstance()!.UPDATE) == 0)
                        
                                    {
                                    this.update();
    

                                    }
                                

                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.BACKUP) == 0)
                        
                                    {
                                    
    var output: string = this.backup()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.RESTORE) == 0)
                        
                                    {
                                    this.getPropertiesHashMap()!.put("current", this.getCurrent());
    
this.getPropertiesHashMap()!.put("total", this.getTotal());
    

    var output: string = this.restore()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.DROP) == 0)
                        
                                    {
                                    
    var output: string = this.drop()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.CREATE) == 0)
                        
                                    {
                                    
    var output: string = this.create()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.INSERT) == 0)
                        
                                    {
                                    
    var output: string = this.insert()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.DELETE) == 0)
                        
                                    {
                                    
    var output: string = this.delete()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(commonStrings!.UPDATE) == 0)
                        
                                    {
                                    
    var output: string = this.update()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output +"<br />");
    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_BODY_INCLUDE;
    

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
                
            

