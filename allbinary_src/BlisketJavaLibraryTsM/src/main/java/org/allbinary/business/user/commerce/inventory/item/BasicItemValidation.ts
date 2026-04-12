
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
        



import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { Validation } from "../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class BasicItemValidation extends Validation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly MAXWEIGHT: number = 14;
        
        

    private readonly MAXPRICE: number = 14;
        
        

    private itemInterface: ItemInterface
public constructor (itemInterface: ItemInterface){

            super();
            var itemInterface = itemInterface
this.itemInterface= itemInterface;
    
}


    public isValid(): Boolean{

        try {
            
                        if(this.itemInterface!.getId() == 
                                    null
                                 || this.itemInterface!.getId()!.length() < 1 || this.itemInterface!.getId()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(this.itemInterface!.getId() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getId());

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getNumber() == 
                                    null
                                 || this.itemInterface!.getNumber()!.length() < 1 || this.itemInterface!.getNumber()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getNumber() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getNumber());

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getInBaskets() == 
                                    null
                                 || this.itemInterface!.getInBaskets()!.length() < 1 || this.itemInterface!.getInBaskets()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getInBaskets() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getInBaskets());

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getWeight() == 
                                    null
                                 || this.itemInterface!.getWeight()!.length() < 1 || this.itemInterface!.getWeight()!.length() > MAXWEIGHT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getWeight() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getWeight());

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getEnabled() == 
                                    null
                                 || this.itemInterface!.getEnabled()!.length() < 1 || this.itemInterface!.getEnabled()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getNewOrUsed() == 
                                    null
                                 || this.itemInterface!.getNewOrUsed()!.length() < 1 || this.itemInterface!.getNewOrUsed()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getSummary() == 
                                    null
                                 || this.itemInterface!.getSummary()!.length() < 1 || this.itemInterface!.getSummary()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getDescription() == 
                                    null
                                 || this.itemInterface!.getDescription()!.length() < 1 || this.itemInterface!.getDescription()!.length() > AbSqlData.MAXBLOB)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getKeywords() == 
                                    null
                                 || this.itemInterface!.getKeywords()!.length() < 1 || this.itemInterface!.getKeywords()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getCategory() == 
                                    null
                                 || this.itemInterface!.getCategory()!.length() < 1 || this.itemInterface!.getCategory()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getType() == 
                                    null
                                 || this.itemInterface!.getType()!.length() < 1 || this.itemInterface!.getType()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getPrice() == 
                                    null
                                 || !this.itemInterface!.getPrice()!.isValid();

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getCustoms() == 
                                    null
                                 || this.itemInterface!.getCustoms()!.length() < 1 || this.itemInterface!.getCustoms()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getDownloads() == 
                                    null
                                 || this.itemInterface!.getDownloads()!.length() < 1 || this.itemInterface!.getDownloads()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getGroups() == 
                                    null
                                 || this.itemInterface!.getGroups()!.length() < 1 || this.itemInterface!.getGroups()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getOptions() == 
                                    null
                                 || this.itemInterface!.getOptions()!.length() < 1 || this.itemInterface!.getOptions()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getPermissions() == 
                                    null
                                 || this.itemInterface!.getPermissions()!.length() < 1 || this.itemInterface!.getPermissions()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.itemInterface!.getSpecials() == 
                                    null
                                 || this.itemInterface!.getSpecials()!.length() < 1 || this.itemInterface!.getSpecials()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

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
    

                        if(this.itemInterface!.getId() == 
                                    null
                                 || this.itemInterface!.getId()!.length() < 1 || this.itemInterface!.getId()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Id is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(this.itemInterface!.getId() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getId());

                        )
                        
                                    {
                                    stringBuffer!.append("Id is invalid. Must be > 0.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getNumber() == 
                                    null
                                 || this.itemInterface!.getNumber()!.length() < 1 || this.itemInterface!.getNumber()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Number of items is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getNumber() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getNumber());

                        )
                        
                                    {
                                    stringBuffer!.append("Number of items value is not a valid number.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getInBaskets() == 
                                    null
                                 || this.itemInterface!.getInBaskets()!.length() < 1 || this.itemInterface!.getInBaskets()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Number in baskets is invalid. Must be < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getInBaskets() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getInBaskets());

                        )
                        
                                    {
                                    stringBuffer!.append("In Baskets value is not a valid number.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getWeight() == 
                                    null
                                 || this.itemInterface!.getWeight()!.length() < 1 || this.itemInterface!.getWeight()!.length() > MAXWEIGHT)
                        
                                    {
                                    stringBuffer!.append("Weight value is invalid. Must be < " +MAXWEIGHT +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getWeight() != 
                                    null
                                 && !stringValidationUtil!.isNumber(this.itemInterface!.getWeight());

                        )
                        
                                    {
                                    stringBuffer!.append("Weight value is not a valid number.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getEnabled() == 
                                    null
                                 || this.itemInterface!.getEnabled()!.length() < 1 || this.itemInterface!.getEnabled()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("For Sale value is invalid. Must be < " +AbSqlData.MAXSTRING +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getNewOrUsed() == 
                                    null
                                 || this.itemInterface!.getNewOrUsed()!.length() < 1 || this.itemInterface!.getNewOrUsed()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("New Or Used value is invalid. Must be < " +AbSqlData.MAXSTRING +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getSummary() == 
                                    null
                                 || this.itemInterface!.getSummary()!.length() < 1 || this.itemInterface!.getSummary()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Summary value is invalid. Must be < " +AbSqlData.MAXSTRING +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getDescription() == 
                                    null
                                 || this.itemInterface!.getDescription()!.length() < 1 || this.itemInterface!.getDescription()!.length() > AbSqlData.MAXBLOB)
                        
                                    {
                                    stringBuffer!.append("Description value is invalid. Must be < " +AbSqlData.MAXBLOB +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getKeywords() == 
                                    null
                                 || this.itemInterface!.getKeywords()!.length() < 1 || this.itemInterface!.getKeywords()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Keywords value is invalid. Must be < " +AbSqlData.MAXSTRING +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getCategory() == 
                                    null
                                 || this.itemInterface!.getCategory()!.length() < 1 || this.itemInterface!.getCategory()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Category value is invalid. Must be < " +AbSqlData.MAXSTRING +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getType() == 
                                    null
                                 || this.itemInterface!.getType()!.length() < 1 || this.itemInterface!.getType()!.length() > AbSqlData.MAXSTRING)
                        
                                    {
                                    stringBuffer!.append("Type value is invalid. Must be < " +AbSqlData.MAXSTRING +" and > 0 characters long.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getPrice() == 
                                    null
                                 || !this.itemInterface!.getPrice()!.isValid();

                        )
                        
                                    {
                                    stringBuffer!.append("Price value is invalid. Must be < " +MAXPRICE +" and > 0 in length.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getCustoms() == 
                                    null
                                 || this.itemInterface!.getCustoms()!.length() < 1 || this.itemInterface!.getCustoms()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Custom items value is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getDownloads() == 
                                    null
                                 || this.itemInterface!.getDownloads()!.length() < 1 || this.itemInterface!.getDownloads()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Downloadable item value is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getGroups() == 
                                    null
                                 || this.itemInterface!.getGroups()!.length() < 1 || this.itemInterface!.getGroups()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Group item value is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getOptions() == 
                                    null
                                 || this.itemInterface!.getOptions()!.length() < 1 || this.itemInterface!.getOptions()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Option item value is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getPermissions() == 
                                    null
                                 || this.itemInterface!.getPermissions()!.length() < 1 || this.itemInterface!.getPermissions()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Permission item value is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

                                    }
                                

                        if(this.itemInterface!.getSpecials() == 
                                    null
                                 || this.itemInterface!.getSpecials()!.length() < 1 || this.itemInterface!.getSpecials()!.length() > AbSqlData.MAXNUM)
                        
                                    {
                                    stringBuffer!.append("Special item value is invalid. Must be number < " +AbSqlData.MAXNUM +" and > 0 digits.<br />");
    

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
                
            

