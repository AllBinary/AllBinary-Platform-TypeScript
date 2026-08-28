
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
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { CategoryData } from '../../../../../../../org/allbinary/business/category/CategoryData.js';
      const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
//not game specific package import { CategoryUtil } from '../../../../../../../org/allbinary/business/category/CategoryUtil.js';
      const CategoryUtil = globalThis.org.allbinary.business.category.CategoryUtil;

      
//not game specific package import { CategoryHierarchyInterface } from '../../../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
      const CategoryHierarchyInterface = globalThis.org.allbinary.business.category.hierarchy.CategoryHierarchyInterface;

      
//not game specific package import { CategoryPropertiesInterface } from '../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
      const CategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

      
//not game specific package import { RootCategoryPropertiesInterface } from '../../../../../../../org/allbinary/business/category/properties/root/RootCategoryPropertiesInterface.js';
      const RootCategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.root.RootCategoryPropertiesInterface;

      
//not game specific package import { StoreFrontFactory } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { URLGLOBALS } from '../../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { PathUtil } from '../../../../../../../org/allbinary/logic/io/path/PathUtil.js';
      const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { TransformInfoHttpInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RootStoreCategoryProperties
            extends Object
         implements RootCategoryPropertiesInterface, CategoryPropertiesInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly pathData: AbPathData = AbPathData.getInstance()!;

    private fileAbPath: AbPath;

    private abPath: AbPath;

    private category: string;

    private isRealRoot: boolean;

    webAppAbPath: AbPath;

    transformInfoInterface: TransformInfoInterface;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        this.transformInfoInterface= transformInfoInterface;
    
this.abPath= AbPath.createAbPath();
    
this.category= CategoryData.getInstance()!.ROOTCATEGORY;
    
this.isRealRoot= true;
    
this.initPath();
    
this.log();
    
}


public constructor (transformInfoInterface: TransformInfoInterface, categoryAbPath: AbPath){

            super();
        this.transformInfoInterface= transformInfoInterface;
    
this.abPath= categoryAbPath;
    
this.category= this.pathData!.getNameFromPath(categoryAbPath!.toString());
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.category))
                        
                                    {
                                    this.isRealRoot= true;
    
this.category= CategoryData.getInstance()!.ROOTCATEGORY;
    

                                    }
                                
this.initPath();
    
this.log();
    
}


public constructor (transformInfoInterface: TransformInfoInterface, node: Node){

            super();
        this.transformInfoInterface= transformInfoInterface;
    

    var categoryPath: string = CategoryUtil.getNameFromNode(node)!;;
    
this.abPath= new AbPath(categoryPath, StringUtil.getInstance()!.EMPTY_STRING);
    
this.category= this.pathData!.getNameFromPath(categoryPath);
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.category))
                        
                                    {
                                    this.isRealRoot= true;
    
this.category= CategoryData.getInstance()!.ROOTCATEGORY;
    

                                    }
                                
this.initPath();
    
this.log();
    
}


public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<any, any>){

            super();
        this.transformInfoInterface= transformInfoInterface;
    

    var categoryPath: string = .toCharArray();;
    
this.abPath= new AbPath(categoryPath, StringUtil.getInstance()!.EMPTY_STRING);
    
this.category= this.pathData!.getNameFromPath(categoryPath);
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.category))
                        
                                    {
                                    this.isRealRoot= true;
    
this.category= CategoryData.getInstance()!.ROOTCATEGORY;
    

                                    }
                                
this.initPath();
    
this.log();
    
}


                //@Throws(Exception.constructor)
            
    initPath(){

    var transformInfoHttpStoreInterface: TransformInfoHttpInterface = this.transformInfoInterface as TransformInfoHttpInterface;;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(transformInfoHttpStoreInterface!.getStoreName())!;;
    

    var postPath: string = storeFrontInterface!.getCurrentHostNamePath() +storeFrontInterface!.getCategoryPath();;
    

    var httpServletRequest: HttpServletRequest = transformInfoHttpStoreInterface!.getPageContext()!.getRequest() as HttpServletRequest;;
    
this.webAppAbPath= new AbPath(httpServletRequest!.getContextPath() +postPath, StringUtil.getInstance()!.EMPTY_STRING);
    
this.setRootFilePath(new AbPath(URLGLOBALS.getMainPath() +postPath, StringUtil.getInstance()!.EMPTY_STRING));
    
}


    public isRealRoot(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRealRoot;
    
}


    public isRoot(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue();
    
}


    public setPath(path: AbPath){
this.abPath= path;
    
}


    public setRootFilePath(value: AbPath){
this.fileAbPath= value;
    
}


    public getRootFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileAbPath;
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.category;
    
}


                //@Throws(Exception.constructor)
            
    public getWebAppPath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.webAppAbPath;
    
}


    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abPath;
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue() +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION;
    
}


    public setValue(value: string){
this.category= value;
    
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public toHashMap(): HashMap<any, any>{

    var categoryHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
categoryHashMap!.put(CategoryData.getInstance()!.NAME, this.getValue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): Vector{

    var categoryVector: Vector = new Vector();;
    
categoryVector!.add(this.getValue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


                //@Throws(Exception.constructor)
            
    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public log(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("filePath = ")!.append(this.fileAbPath!.toString())!.append("\npath = ")!.append(this.abPath!.toString())!.append("\ncategory = ")!.append(this.category)!.toString(), this, "log()");
    

                                    }
                                
}


}



