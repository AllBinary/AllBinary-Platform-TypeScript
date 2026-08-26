
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { GLOBALS2 } from '../../../../../../../org/allbinary/globals/GLOBALS2.js';
      const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Replace } from '../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { CustomizerTransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/CustomizerTransformInfoData.js';
      const CustomizerTransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.CustomizerTransformInfoData;

      
//not game specific package import { BodyData } from '../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js';
      const BodyData = globalThis.org.allbinary.logic.visual.transform.template.customizer.bodies.BodyData;

      
//not game specific package import { TitleData } from '../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
      const TitleData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleData;

      
//not game specific package import { CommonSeps } from '../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformTemplateCustomizerUtil
            extends Object
         {
        

    private static readonly instance: TransformTemplateCustomizerUtil = new TransformTemplateCustomizerUtil();

    public static getInstance(): TransformTemplateCustomizerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformTemplateCustomizerUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly CUSTOMIZER_NAME: string;

    private readonly BODY_VIEWNAMEKEY: string;

    private readonly TITLE_VIEWNAMEKEY: string;

    private readonly GLOBALS_NEW: string;

    private readonly GLOBALS_INSERT: string;

    private readonly GLOBALS_DELETE: string;

    private readonly GLOBALS_EDIT: string;

    private readonly GLOBALS_UPDATE: string;

private constructor (){

            super();
        
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var SPACE: string = CommonSeps.getInstance()!.SPACE;;
    
this.CUSTOMIZER_NAME= SPACE +CustomizerTransformInfoData.NAME;
    
this.BODY_VIEWNAMEKEY= SPACE +BodyData.getInstance()!.VIEWNAMEKEY;
    
this.TITLE_VIEWNAMEKEY= SPACE +TitleData.getInstance()!.VIEWNAMEKEY;
    
this.GLOBALS_NEW= GLOBALS2.NEW +SPACE;
    
this.GLOBALS_INSERT= commonStrings!.INSERT +SPACE;
    
this.GLOBALS_DELETE= commonStrings!.DELETE +SPACE;
    
this.GLOBALS_EDIT= GLOBALS2.EDIT +SPACE;
    
this.GLOBALS_UPDATE= commonStrings!.UPDATE +SPACE;
    
}


    public getPageNameHack(viewName: string, storeName: string): string{

    var SPACE: string = CommonSeps.getInstance()!.SPACE;;
    

    var ONE_EMPTY_STRING_ARRAY: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(
                                                [
                                                    viewName +SPACE
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    storeName +SPACE
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.CUSTOMIZER_NAME
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.BODY_VIEWNAMEKEY
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.TITLE_VIEWNAMEKEY
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.GLOBALS_NEW
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.GLOBALS_INSERT
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.GLOBALS_DELETE
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.GLOBALS_EDIT
                                                ], ONE_EMPTY_STRING_ARRAY);
    
hashMap!.put(
                                                [
                                                    this.GLOBALS_UPDATE
                                                ], ONE_EMPTY_STRING_ARRAY);
    

    var replace: Replace = 
                null
            ;;
    

    var rootViewName: string = replace.all(viewName)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("RootViewName for ObjectConfig: " +rootViewName, this, "getPageNameHack");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootViewName;
    
}


}
                
            

