
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

        


            import { Exception } from '../../java/lang/Exception.js';
        
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { Portion } from '../../org/allbinary/business/installer/Portion.js';
      //not GWT import const Portion = globalThis.org.allbinary.business.installer.Portion;

      
import { StoreFrontsEntityFactory } from '../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js';
      //not GWT import const StoreFrontsEntityFactory = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntityFactory;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlTableUtil } from '../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js';
      //not GWT import const AbSqlTableUtil = globalThis.org.allbinary.logic.communication.sql.AbSqlTableUtil;

      
//not plain js import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { HtmlSelect } from '../../org/allbinary/logic/visual/dhtml/html/select/HtmlSelect.js';
      //not GWT import const HtmlSelect = globalThis.org.allbinary.logic.visual.dhtml.html.select.HtmlSelect;

      
//not plain js import { CommonPhoneStrings } from '../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not plain js import { CommonSeps } from '../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicTable } from './BasicTable.js';
//not GWT import const  = globalThis.admin.taghelpers.BasicTable;

                
export class StoreFrontsHelper extends BasicTable {
        

    private static readonly CLASS: string = "class";

    private static readonly TEXT: string = "text";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly portion: Portion;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.portion= new Portion(hashMap);
    
}


    public drop(): string{

        try {
            
    var success: string = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.dropTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, this.commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to drop storefronts table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public create(): string{

        try {
            
    var success: string = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.createTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to create new storefronts table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public restore(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.restoreTable(StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance(), this.portion)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to restore backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public backup(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.backupTable(StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to make backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    private readonly commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;

    public generateSelect(): string{

        try {
            
    var success: string = CommonSeps.getInstance()!.SPACE;;
    

    var storeNamesVector: Vector = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.getStoreFrontNames()!;;
    

    var storeSelect: HtmlSelect = new HtmlSelect(StringUtil.getInstance()!.EMPTY_STRING, this.commonPhoneStrings!.ONE, StoreFrontData.getInstance()!.SELECTSTORENAME, StringUtil.getInstance()!.EMPTY_STRING);;
    
storeSelect!.addAttribute(StoreFrontsHelper.CLASS, StoreFrontsHelper.TEXT);
    

    var size: number = storeNamesVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var storeName: string = storeNamesVector!.get(index) as string;;
    
storeSelect!.addOption(storeName);
    
}

success += storeSelect;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "generateSelect()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to generate storefronts select";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "generateSelect()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



