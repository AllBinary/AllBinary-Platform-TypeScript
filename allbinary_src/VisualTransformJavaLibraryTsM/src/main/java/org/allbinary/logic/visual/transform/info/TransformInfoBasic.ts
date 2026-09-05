
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { AbContext } from '../../../../../../org/allbinary/business/context/AbContext.js';
//not GWT import const AbContext = globalThis.org.allbinary.business.context.AbContext;

      
import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { TransformInfoObjectConfigInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
//not GWT import const TransformInfoObjectConfigInterface = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigInterface;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoHttpInterface } from './TransformInfoHttpInterface.js';
//not GWT import - same folder const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

                //Hack class should not exist
export class TransformInfoBasic extends AbContext implements TransformInfoHttpInterface {
        

    private storeFrontInterface: StoreFrontInterface;

public constructor (storeFrontInterface: StoreFrontInterface, propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super(propertiesHashMap, pageContext);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.storeFrontInterface= storeFrontInterface;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFrontInterface!.getName();;
    
}


    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.NOT_IMPLEMENTED;
    
}


    public override(hashMap: HashMap<any, any>){
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getObjectFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getObject(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getObjectConfigInterface(): TransformInfoObjectConfigInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setObjectConfigInterface(transformInfoObjectConfigInterface: Object){
}


    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getTemplateFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getTemplate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getDataFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public getDataDocument(): Document{



                            throw new Exception(commonStrings!.NOT_IMPLEMENTED);
                    
}


    public setName(value: string){
}


    public setStoreName(value: string){
}


    public setObjectFile(value: string){
}


    public setObject(anyType: Object){
}


    public setObjectConfigFile(value: string){
}


    public setTemplateFile(value: string){
}


    public setTemplate(value: string){
}


    public setDataFile(value: string){
}


    public setData(value: string){
}


    public setChild(){
}


    public isChild(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getImportUriPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setImportUriPath(importUriPath: string){
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



