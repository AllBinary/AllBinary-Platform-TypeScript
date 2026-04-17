
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { GLOBALS2 } from "../../../../../../../org/allbinary/globals/GLOBALS2.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Replace } from "../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { CustomizerTransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/CustomizerTransformInfoData.js";

    
import { BodyData } from "../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js";

    
import { TitleData } from "../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformTemplateCustomizerUtil
            extends Object
         {
        

    private static readonly instance: TransformTemplateCustomizerUtil = new TransformTemplateCustomizerUtil();
        
        

    public static getInstance(): TransformTemplateCustomizerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly CUSTOMIZER_NAME: string

    private readonly BODY_VIEWNAMEKEY: string

    private readonly TITLE_VIEWNAMEKEY: string

    private readonly GLOBALS_NEW: string

    private readonly GLOBALS_INSERT: string

    private readonly GLOBALS_DELETE: string

    private readonly GLOBALS_EDIT: string

    private readonly GLOBALS_UPDATE: string
private constructor (){

            super();
            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var SPACE: string = CommonSeps.getInstance()!.SPACE;
        
        
;
    
CUSTOMIZER_NAME= SPACE +CustomizerTransformInfoData.NAME;
    
BODY_VIEWNAMEKEY= SPACE +BodyData.getInstance()!.VIEWNAMEKEY;
    
TITLE_VIEWNAMEKEY= SPACE +TitleData.getInstance()!.VIEWNAMEKEY;
    
GLOBALS_NEW= GLOBALS2.NEW +SPACE;
    
GLOBALS_INSERT= commonStrings!.INSERT +SPACE;
    
GLOBALS_DELETE= commonStrings!.DELETE +SPACE;
    
GLOBALS_EDIT= GLOBALS2.EDIT +SPACE;
    
GLOBALS_UPDATE= commonStrings!.UPDATE +SPACE;
    
}


    public getPageNameHack(viewName: string, storeName: string): string{
var viewName = viewName
var storeName = storeName

    var SPACE: string = CommonSeps.getInstance()!.SPACE;
        
        
;
    

    var ONE_EMPTY_STRING_ARRAY: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
        
        
;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(
                                                [
                                                    viewName +SPACE;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    storeName +SPACE;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    CUSTOMIZER_NAME;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    BODY_VIEWNAMEKEY;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    TITLE_VIEWNAMEKEY;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    GLOBALS_NEW;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    GLOBALS_INSERT;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    GLOBALS_DELETE;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    GLOBALS_EDIT;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    GLOBALS_UPDATE;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY);
    

    var replace: Replace = 
                null
            ;
        
        
;
    

    var rootViewName: string = replace.all(viewName)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("RootViewName for ObjectConfig: " +rootViewName, this, "getPageNameHack");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootViewName;
    
}


}
                
            

