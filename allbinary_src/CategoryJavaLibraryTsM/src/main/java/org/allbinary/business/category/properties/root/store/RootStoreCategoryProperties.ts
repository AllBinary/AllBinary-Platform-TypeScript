
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

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { CategoryData } from "../../../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryUtil } from "../../../../../../../org/allbinary/business/category/CategoryUtil.js";

    
import { CategoryHierarchyInterface } from "../../../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { CategoryPropertiesInterface } from "../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js";

    
import { RootCategoryPropertiesInterface } from "../../../../../../../org/allbinary/business/category/properties/root/RootCategoryPropertiesInterface.js";

    
import { StoreFrontFactory } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { URLGLOBALS } from "../../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { PathUtil } from "../../../../../../../org/allbinary/logic/io/path/PathUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoHttpInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class RootStoreCategoryProperties
            extends Object
        
                , RootCategoryPropertiesInterface
                , CategoryPropertiesInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private fileAbPath: AbPath

    private abPath: AbPath

    private category: string

    private isRealRoot: boolean

    webAppAbPath: AbPath

    transformInfoInterface: TransformInfoInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
                //var transformInfoInterface = transformInfoInterface
this.transformInfoInterface= transformInfoInterface
this.abPath= AbPath()
this.category= CategoryData.getInstance()!.ROOTCATEGORY
this.isRealRoot= true
this.initPath()
this.log()
}

public constructor (transformInfoInterface: TransformInfoInterface, categoryAbPath: AbPath){

            super();
                //var transformInfoInterface = transformInfoInterface
    //var categoryAbPath = categoryAbPath
this.transformInfoInterface= transformInfoInterface
this.abPath= categoryAbPath
this.category= PathUtil.getInstance()!.getNameFromPath(categoryAbPath!.toString())

    
                        if(StringValidationUtil.getInstance()!.isEmpty(this.category))
                        
                                    {
                                    this.isRealRoot= true
this.category= CategoryData.getInstance()!.ROOTCATEGORY

                                    }
                                
this.initPath()
this.log()
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node){

            super();
                //var transformInfoInterface = transformInfoInterface
    //var node = node
this.transformInfoInterface= transformInfoInterface

    var categoryPath: string = CategoryUtil.getNameFromNode(node)!;
        
        

this.abPath= AbPath(categoryPath)
this.category= PathUtil.getInstance()!.getNameFromPath(categoryPath)

    
                        if(StringValidationUtil.getInstance()!.isEmpty(this.category))
                        
                                    {
                                    this.isRealRoot= true
this.category= CategoryData.getInstance()!.ROOTCATEGORY

                                    }
                                
this.initPath()
this.log()
}

public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<Any, Any>){

            super();
                //var transformInfoInterface = transformInfoInterface
    //var categoryPropertiesHashMap = categoryPropertiesHashMap
this.transformInfoInterface= transformInfoInterface

    var categoryPath: string = new .toCharArray();
        
        

this.abPath= AbPath(categoryPath)
this.category= PathUtil.getInstance()!.getNameFromPath(categoryPath)

    
                        if(StringValidationUtil.getInstance()!.isEmpty(this.category))
                        
                                    {
                                    this.isRealRoot= true
this.category= CategoryData.getInstance()!.ROOTCATEGORY

                                    }
                                
this.initPath()
this.log()
}


                @Throws(Exception::class)
            
    initPath(){

    var transformInfoHttpStoreInterface: TransformInfoHttpInterface = this.transformInfoInterface as TransformInfoHttpInterface;
        
        


    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(transformInfoHttpStoreInterface!.getStoreName())!;
        
        


    var postPath: string = storeFrontInterface!.getCurrentHostNamePath() +storeFrontInterface!.getCategoryPath();
        
        


    var httpServletRequest: HttpServletRequest = transformInfoHttpStoreInterface!.getPageContext()!.getRequest() as HttpServletRequest;
        
        

this.webAppAbPath= AbPath(httpServletRequest!.getContextPath() +postPath)
this.setRootFilePath(AbPath(URLGLOBALS.getMainPath() +postPath))
}


    public isRealRoot(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRealRoot;
    
}


    public isRoot(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue() as Object;
    
}


    public setPath(path: AbPath){
var path = path
this.abPath= path
}


    public setRootFilePath(value: AbPath){
var value = value
this.fileAbPath= value
}


    public getRootFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileAbPath;
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.category;
    
}


                @Throws(Exception::class)
            
    public getWebAppPath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.webAppAbPath;
    
}


    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath{
    //var categoryHierarchyInterface = categoryHierarchyInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abPath;
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue() +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION;
    
}


    public setValue(value: string){
var value = value
this.category= value
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var categoryHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(CategoryData.getInstance()!.NAME, this.getValue())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): Vector{

    var categoryVector: Vector = new Vector();
        
        

add(this.getValue())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


                @Throws(Exception::class)
            
    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                @Throws(Exception::class)
            
    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                @Throws(Exception::class)
            
    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public log(){

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    put(StringMaker().
                            append("filePath = ")!.append(this.fileAbPath!.toString())!.append("\npath = ")!.append(this.abPath!.toString())!.append("\ncategory = ")!.append(this.category)!.toString(), this, "log()")

                                    }
                                
}


}
                
            

