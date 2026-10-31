
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
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { CategoryData } from '../../../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData

import { CategoryUtil } from '../../../../../../../org/allbinary/business/category/CategoryUtil.js';
//not GWT import const CategoryUtil

import { CategoryHierarchyInterface } from '../../../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
//not GWT import const CategoryHierarchyInterface

import { CategoryPropertiesInterface } from '../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface

import { RootCategoryPropertiesInterface } from '../../../../../../../org/allbinary/business/category/properties/root/RootCategoryPropertiesInterface.js';
//not GWT import const RootCategoryPropertiesInterface

import { StoreFrontFactory } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { URLGLOBALS } from '../../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { TransformInfoHttpInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
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

    public constructor(...args: any[]) {
        super();if(args.length === 1) {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 2 && args[0] instanceof TransformInfoInterface && args[1] instanceof AbPath) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 2 && args[0] instanceof TransformInfoInterface && args[1] instanceof Node) {
            
            this.constructor$2(args[0], args[1]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$3(args[0], args[1]);
            
        }
        
    }
    
    private constructor$0(transformInfoInterface: TransformInfoInterface): void {
        this.transformInfoInterface= transformInfoInterface;
    
this.abPath= AbPath.createAbPath();
    
this.category= CategoryData.getInstance()!.ROOTCATEGORY;
    
this.isRealRoot= true;
    
this.initPath();
    
this.log();
    

    }
    
    private constructor$1(transformInfoInterface: TransformInfoInterface, categoryAbPath: AbPath): void {
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
    
    private constructor$2(transformInfoInterface: TransformInfoInterface, node: Node): void {
        this.transformInfoInterface= transformInfoInterface;
    

    let categoryPath: string = CategoryUtil.getNameFromNode(node)!;;
    
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
    
    private constructor$3(transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<any, any>): void {
        this.transformInfoInterface= transformInfoInterface;
    

    let categoryPath: string = .toCharArray();;
    
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

    let transformInfoHttpStoreInterface: TransformInfoHttpInterface = this.transformInfoInterface as TransformInfoHttpInterface;;
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(transformInfoHttpStoreInterface!.getStoreName())!;;
    

    let postPath: string = storeFrontInterface!.getCurrentHostNamePath() +storeFrontInterface!.getCategoryPath();;
    

    let httpServletRequest: HttpServletRequest = transformInfoHttpStoreInterface!.getPageContext()!.getRequest() as HttpServletRequest;;
    
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
                        return true;
    
}


    public toHashMap(): HashMap<any, any>{

    let categoryHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
categoryHashMap!.put(CategoryData.getInstance()!.NAME, this.getValue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): BasicArrayList{

    let categoryVector: BasicArrayList = new BasicArrayListD();;
    
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

