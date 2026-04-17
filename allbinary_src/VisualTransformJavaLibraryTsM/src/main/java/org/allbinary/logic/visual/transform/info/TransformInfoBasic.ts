
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { AbContext } from "../../../../../../org/allbinary/business/context/AbContext.js";

    
import { StoreFrontInterface } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { TransformInfoObjectConfigInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoBasic extends AbContext implements TransformInfoHttpInterface {
        

    private storeFrontInterface: StoreFrontInterface
public constructor (storeFrontInterface: StoreFrontInterface, propertiesHashMap: HashMap<any, any>, pageContext: PageContext)                        

                            : super(propertiesHashMap, pageContext){

            super();
            var storeFrontInterface = storeFrontInterface
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
this.storeFrontInterface= storeFrontInterface;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFrontInterface!.getName();

                        ;
    
}


    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.NOT_IMPLEMENTED;
    
}


    public override(hashMap: HashMap<any, any>){
var hashMap = hashMap
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
var transformInfoObjectConfigInterface = transformInfoObjectConfigInterface
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


                //@Throws(Error::class)
            
    public getDataDocument(): Document{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


    public setName(value: string){
var value = value
}


    public setStoreName(value: string){
var value = value
}


    public setObjectFile(value: string){
var value = value
}


    public setObject(anyType: Object){
var anyType = anyType
}


    public setObjectConfigFile(value: string){
var value = value
}


    public setTemplateFile(value: string){
var value = value
}


    public setTemplate(value: string){
var value = value
}


    public setDataFile(value: string){
var value = value
}


    public setData(value: string){
var value = value
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
var importUriPath = importUriPath
}


                //@Throws(Error::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

