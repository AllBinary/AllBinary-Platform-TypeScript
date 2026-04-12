
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
        



import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { Validation } from "../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

export class DownloadableItemValidation extends Validation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private downloadableItem: DownloadableItem
public constructor (downloadableItem: DownloadableItem){

            super();
            var downloadableItem = downloadableItem
this.downloadableItem= downloadableItem;
    
}


    public isValid(): Boolean{

        try {
            
                        if(this.downloadableItem!.getId() == 
                                    null
                                 || this.downloadableItem!.getId()!.length() < 1 || this.downloadableItem!.getId()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getId() != 
                                    null
                                 && !StringValidationUtil.getInstance()!.isNumber(this.downloadableItem!.getId());

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getSystem() == 
                                    null
                                 || this.downloadableItem!.getSystem()!.length() < 1 || this.downloadableItem!.getSystem()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getPlatform() == 
                                    null
                                 || this.downloadableItem!.getPlatform()!.length() < 1 || this.downloadableItem!.getPlatform()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getSpecialName() == 
                                    null
                                 || this.downloadableItem!.getSpecialName()!.length() < 0 || this.downloadableItem!.getSpecialName()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getVersion() == 
                                    null
                                 || this.downloadableItem!.getVersion()!.length() < 1 || this.downloadableItem!.getVersion()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getChanges() == 
                                    null
                                 || this.downloadableItem!.getChanges()!.length() < 1 || this.downloadableItem!.getChanges()!.length() > AbSqlData.MAXBLOB)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.downloadableItem!.getSize() == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var size: string = this.downloadableItem!.getSize()!.toString()!;
        
        
;
    

                        if(size.length < 1 || size.length > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        }
                            

                        if(this.downloadableItem!.getValidTime() == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var size: string = this.downloadableItem!.getValidTime()!.toString()!;
        
        
;
    

                        if(size.length < 1 || size.length > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        }
                            

                        if(this.downloadableItem!.getRetries() == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var size: string = this.downloadableItem!.getRetries()!.toString()!;
        
        
;
    

                        if(size.length < 1 || size.length > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(this.downloadableItem!.getId() == 
                                    null
                                 || this.downloadableItem!.getId()!.length() < 1 || this.downloadableItem!.getId()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Id is invalid. Must be number < ");
    
stringBuffer!.appendint(AbSqlData.MAXNUM);
    
stringBuffer!.append(" and > 0 digits.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getId() != 
                                    null
                                 && !StringValidationUtil.getInstance()!.isNumber(this.downloadableItem!.getId());

                        )
                        
                                    {
                                    stringBuffer!.append("Id is invalid. Must be > 0.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getSystem() == 
                                    null
                                 || this.downloadableItem!.getSystem()!.length() < 1 || this.downloadableItem!.getSystem()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("System value is invalid. Must be < ");
    
stringBuffer!.appendint(AbSqlData.MAXSTRING);
    
stringBuffer!.append(" and > 0 characters long.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getPlatform() == 
                                    null
                                 || this.downloadableItem!.getPlatform()!.length() < 1 || this.downloadableItem!.getPlatform()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Platform value is invalid. Must be < ");
    
stringBuffer!.appendint(AbSqlData.MAXSTRING);
    
stringBuffer!.append(" and > 0 characters long.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getSpecialName() == 
                                    null
                                 || this.downloadableItem!.getSpecialName()!.length() < 0 || this.downloadableItem!.getSpecialName()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Special Name value is invalid. Must be < ");
    
stringBuffer!.appendint(AbSqlData.MAXSTRING);
    
stringBuffer!.append(" and > 0 characters long.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getVersion() == 
                                    null
                                 || this.downloadableItem!.getVersion()!.length() < 1 || this.downloadableItem!.getVersion()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Version value is invalid. Must be < ");
    
stringBuffer!.appendint(AbSqlData.MAXSTRING);
    
stringBuffer!.append(" and > 0 characters long.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getChanges() == 
                                    null
                                 || this.downloadableItem!.getChanges()!.length() < 0 || this.downloadableItem!.getChanges()!.length() > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Changes value is invalid. Must be < ");
    
stringBuffer!.appendint(AbSqlData.MAXBLOB);
    
stringBuffer!.append(" and >= 0 characters long.<br/>");
    

                                    }
                                

                        if(this.downloadableItem!.getSize() == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("File Size is null");
    

                                    }
                                
                        else {
                            
    var size: string = this.downloadableItem!.getSize()!.toString()!;
        
        
;
    

                        if(size.length < 1 || size.length > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("File Size is invalid. Must be number < ");
    
stringBuffer!.appendint(AbSqlData.MAXNUM);
    
stringBuffer!.append(" and > 0 digits.<br/>");
    

                                    }
                                

                        }
                            

                        if(this.downloadableItem!.getValidTime() == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Valid Time is null");
    

                                    }
                                
                        else {
                            
    var size: string = this.downloadableItem!.getValidTime()!.toString()!;
        
        
;
    

                        if(size.length < 1 || size.length > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Valid Time is invalid. Must be number < ");
    
stringBuffer!.appendint(AbSqlData.MAXNUM);
    
stringBuffer!.append(" and > 0 digits.<br/>");
    

                                    }
                                

                        }
                            

                        if(this.downloadableItem!.getRetries() == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Retries is null");
    

                                    }
                                
                        else {
                            
    var size: string = this.downloadableItem!.getRetries()!.toString()!;
        
        
;
    

                        if(size.length < 1 || size.length > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Retries is invalid. Must be number < ");
    
stringBuffer!.appendint(AbSqlData.MAXNUM);
    
stringBuffer!.append(" and > 0 digits.<br/>");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

