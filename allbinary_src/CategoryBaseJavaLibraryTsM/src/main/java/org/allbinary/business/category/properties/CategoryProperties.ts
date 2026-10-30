
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData

import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface

import { CategoryUtil } from '../../../../../org/allbinary/business/category/CategoryUtil.js';
//not GWT import const CategoryUtil

import { CategoryHierarchyInterface } from '../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
//not GWT import const CategoryHierarchyInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlData } from '../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
//not GWT import const AbSqlData

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
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

import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryPropertiesInterface } from './CategoryPropertiesInterface.js';
//sameFolderImports - not GWT import - same folder const CategoryPropertiesInterface

export class CategoryProperties
            extends Object
         implements CategoryPropertiesInterface {
        

    private static readonly MAXDEPTH: number = 100;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private category: string;

public constructor (name: string){

            super();
        this.category= name;
    
}


public constructor (node: Node){

            super();
        this.category= CategoryUtil.getNameFromNode(node);
    
}


public constructor (categoryPropertiesHashMap: HashMap<any, any>){

            super();
        this.category= .toCharArray();
    
}


    public isRealRoot(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isRoot(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue();
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.category;
    
}


                //@Throws(Exception.constructor)
            
    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath{

    let abPathData: AbPathData = AbPathData.getInstance()!;;
    

    let pathStringBuffer: StringMaker = new StringMaker();;
    

    let list: BasicArrayList = new BasicArrayListD();;
    

    let nextParentCategoryInterface: CategoryInterface = categoryHierarchyInterface!.getParent()!;;
    

                        if(this != nextParentCategoryInterface!.getProperties())
                        
                                    {
                                    
    let depthIndex: number = 0;;
    

        while(nextParentCategoryInterface != 
                                    null
                                )
        {

                        if(nextParentCategoryInterface!.getProperties()!.isRealRoot())
                        
                                    {
                                    break;

                    

                                    }
                                

                        if(nextParentCategoryInterface!.getProperties()!.isRoot())
                        
                                    {
                                    list.addAt(0, nextParentCategoryInterface!.getPath()!.toString());
    

                                    }
                                
                        else {
                            pathStringBuffer!.delete(0, pathStringBuffer!.length());
    
list.addAt(0, pathStringBuffer!.append(abPathData!.SEPARATOR)!.append(nextParentCategoryInterface!.getProperties()!.getValue())!.toString());
    

                        }
                            

                        if(nextParentCategoryInterface == nextParentCategoryInterface!.getHierarchy()!.getParent())
                        
                                    {
                                    break;

                    

                                    }
                                
nextParentCategoryInterface= nextParentCategoryInterface!.getHierarchy()!.getParent();
    
depthIndex++;
    

                        if(depthIndex > CategoryProperties.MAXDEPTH)
                        
                                    {
                                    


                            throw new Exception("Probably Major Error");
                    

                                    }
                                
}


                                    }
                                
pathStringBuffer!.delete(0, pathStringBuffer!.length());
    
pathStringBuffer!.append(abPathData!.SEPARATOR)!.append(this.getValue());
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
pathStringBuffer!.append(list.get(index) as string);
    
}

pathStringBuffer!.append(abPathData!.SEPARATOR);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("path = " +pathStringBuffer!.toString(), this, "getPath");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(pathStringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue() +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION;
    
}


                //@Throws(Exception.constructor)
            
    public getWebAppPath(): AbPath{



                            throw new Exception("Not Root");
                    
}


    public setValue(value: string){
this.category= value;
    
}


    public isValid(): Boolean{

    let returnBoolean: Boolean = Boolean.FALSE;;
    

                        if(StringValidationUtil.getInstance()!.isValidRequired(this.category, 1, AbSqlData.MAXSTRING))
                        
                                    {
                                    returnBoolean= true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnBoolean;
    
}


    public toHashMap(): HashMap<any, any>{

    let categoryHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
categoryHashMap!.put(CategoryData.getInstance()!.NAME, this.category);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): BasicArrayList{

    let categoryVector: BasicArrayList = new BasicArrayListD();;
    
categoryVector!.add(this.category);
    



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


}

