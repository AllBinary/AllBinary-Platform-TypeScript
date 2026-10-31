
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CategoryHierarchy } from '../../../../org/allbinary/business/category/hierarchy/CategoryHierarchy.js';
//not GWT import const CategoryHierarchy

import { CategoryHierarchyInterface } from '../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
//not GWT import const CategoryHierarchyInterface

import { CategoryPropertiesFactoryInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface

import { CategoryPropertiesInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface

import { RootCategoryPropertiesInterface } from '../../../../org/allbinary/business/category/properties/root/RootCategoryPropertiesInterface.js';
//not GWT import const RootCategoryPropertiesInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryInterface } from './CategoryInterface.js';
//sameFolderImports - not GWT import - same folder const CategoryInterface

export class Category
            extends Object
         implements CategoryInterface {
        

    private static readonly NOT_ROOT: string = "This is not the root so it has no file path.";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private categoryHierarchyInterface: CategoryHierarchyInterface;

    private categoryPropertiesInterface: CategoryPropertiesInterface;

    private readonly childCategoryVector: BasicArrayList = new BasicArrayListD();

    private readonly typeVector: BasicArrayList = new BasicArrayListD();

    private readonly PROPERTIES: Integer = new Integer(1);

    private readonly CATEGORY: Integer = new Integer(0);

    public constructor(...args: any[]) {
        super();
        if(args.length === 1) {
            this.constructor$0(args[0]);
        }
        else if(args.length === 2) {
            this.constructor$1(args[0], args[1]);
        }
        else if(args.length === 3) {
            this.constructor$2(args[0], args[1], args[2]);
        }
        
    }
    
    private constructor$0(categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, "Category(CategoryPropertiesFactoryInterface)");
    

                                    }
                                
this.categoryPropertiesInterface= categoryPropertiesFactoryInterface!.getInstance();
    
this.categoryHierarchyInterface= new CategoryHierarchy(this, this) as CategoryHierarchyInterface;
    
this.log();
    

    }
    
    private constructor$1(categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number): void {
        this.categoryPropertiesInterface= categoryPropertiesFactoryInterface!.getInstance();
    
this.categoryHierarchyInterface= new CategoryHierarchy(this, this, level) as CategoryHierarchyInterface;
    
this.log();
    

    }
    
    private constructor$2(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface): void {
        this.categoryPropertiesInterface= categoryPropertiesFactoryInterface!.getInstance() as CategoryPropertiesInterface;
    
this.categoryHierarchyInterface= new CategoryHierarchy(rootCategoryInterface, parentCategoryInterface) as CategoryHierarchyInterface;
    
this.log();
    

    }
    
                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface!.getKey();;
    
}


                //@Throws(Exception.constructor)
            
    public getRootFilePath(): AbPath{

    let rootAbPath: AbPath = new AbPath(NOT_ROOT, StringUtil.getInstance()!.EMPTY_STRING);;
    

    let categoryInterface: CategoryInterface = this.categoryHierarchyInterface!.getRoot()!;;
    

                        if(categoryInterface!.getProperties()!.isRoot())
                        
                                    {
                                    
    let rootCategoryPropertiesInterface: RootCategoryPropertiesInterface = categoryInterface!.getProperties() as RootCategoryPropertiesInterface;;
    
rootAbPath= rootCategoryPropertiesInterface!.getRootFilePath();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootAbPath;
    
}


                //@Throws(Exception.constructor)
            
    public getFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(this.getRootFilePath()!.toString() +this.getProperties()!.getPath(this.getHierarchy())!.toString(), this.getProperties()!.getFileName());
    
}


                //@Throws(Exception.constructor)
            
    public getWebAppPath(): AbPath{

    let categoryInterface: CategoryInterface = this.categoryHierarchyInterface!.getRoot()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryInterface!.getProperties()!.getWebAppPath();;
    
}


                //@Throws(Exception.constructor)
            
    public getPath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface!.getPath(this.categoryHierarchyInterface);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addChildProperty(categoryPropertiesInterface: CategoryPropertiesInterface): boolean{
this.typeVector!.add(this.PROPERTIES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childCategoryVector!.add(categoryPropertiesInterface);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addChild(categoryInterface: CategoryInterface): boolean{
this.removeDuplicateChild(categoryInterface);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("adding", this, "addChild");
    

                                    }
                                

    let childCategoryHierarchyInterface: CategoryHierarchyInterface = categoryInterface!.getHierarchy()!;;
    
childCategoryHierarchyInterface!.setParent(this);
    
childCategoryHierarchyInterface!.setRoot(this.getHierarchy()!.getRoot());
    
categoryInterface!.setHierarchy(childCategoryHierarchyInterface);
    
this.typeVector!.add(this.CATEGORY);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childCategoryVector!.add(categoryInterface);;
    
}


    public getChildNodes(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childCategoryVector;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeChild(categoryInterface: CategoryInterface): boolean{

    let removalVector: BasicArrayList = new BasicArrayListD();;
    

    let bool_return: boolean = false;;
    

    let size: number = this.childCategoryVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

                        if(this.CATEGORY == this.typeVector!.get(index))
                        
                                    {
                                    
    let anyType: any = this.childCategoryVector!.get(index)!;;
    

    let currentCategoryInterface: CategoryInterface = anyType as CategoryInterface;;
    

                        if(currentCategoryInterface!.getProperties()!.getValue()!.compareTo(categoryInterface!.getProperties()!.getValue()) == 0)
                        
                                    {
                                    removalVector!.add(currentCategoryInterface);
    
bool_return= true;
    

                                    }
                                

                                    }
                                
}

this.removal(removalVector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bool_return;
    
}


    removal(removalVector: BasicArrayList){

    let removalSize: number = removalVector!.size()!;;
    




                        for (
    let index: number = 0;index < removalSize; index++)
        {

    let anyType: any = removalVector!.get(index)!;;
    

    let objectIndex: number = this.childCategoryVector!.indexOf(anyType)!;;
    
this.typeVector!.remove(objectIndex);
    
this.childCategoryVector!.remove(objectIndex);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    removeDuplicateChild(categoryInterface: CategoryInterface): boolean{

    let removalVector: BasicArrayList = new BasicArrayListD();;
    

    let bool_return: boolean = false;;
    

    let size: number = this.childCategoryVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let anyType: any = this.childCategoryVector!.get(index)!;;
    

                        if(this.PROPERTIES == this.typeVector!.get(index))
                        
                                    {
                                    
    let categoryPropertiesInterface: CategoryPropertiesInterface = anyType as CategoryPropertiesInterface;;
    

                        if(categoryInterface!.getProperties()!.getValue()!.compareTo(categoryPropertiesInterface!.getValue()) == 0)
                        
                                    {
                                    removalVector!.add(categoryPropertiesInterface);
    
bool_return= true;
    
break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(this.CATEGORY == this.typeVector!.get(index))
                        
                                    {
                                    
    let existingCategoryInterface: CategoryInterface = anyType as CategoryInterface;;
    

    let categoryPropertiesInterface: CategoryPropertiesInterface = existingCategoryInterface!.getProperties()!;;
    

                        if(categoryInterface!.getProperties()!.getValue()!.compareTo(categoryPropertiesInterface!.getValue()) == 0)
                        
                                    {
                                    removalVector!.add(existingCategoryInterface);
    
bool_return= true;
    
break;

                    

                                    }
                                

                                    }
                                
}

this.removal(removalVector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bool_return;
    
}


                //@Throws(Exception.constructor)
            
    public isLeaf(): boolean{

                        if(this.childCategoryVector == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Category Error");
                    

                                    }
                                

                        if(this.childCategoryVector!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getProperties(): CategoryPropertiesInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface;
    
}


    public setProperties(categoryPropertiesInterface: CategoryPropertiesInterface){
this.categoryPropertiesInterface= categoryPropertiesInterface;
    
}


    public getHierarchy(): CategoryHierarchyInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryHierarchyInterface;
    
}


    public setHierarchy(categoryHierarchyInterface: CategoryHierarchyInterface){
this.categoryHierarchyInterface= categoryHierarchyInterface;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isValid(): Boolean{

                        if(!this.categoryPropertiesInterface!.isValid().valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let size: number = this.childCategoryVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let anyType: any = this.childCategoryVector!.get(index)!;;
    

                        if(this.PROPERTIES == this.typeVector!.get(index))
                        
                                    {
                                    
    let categoryPropertiesInterface: CategoryPropertiesInterface = anyType as CategoryPropertiesInterface;;
    

                        if(!categoryPropertiesInterface!.isValid().valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.CATEGORY == this.typeVector!.get(index))
                        
                                    {
                                    
    let categoryInterface: CategoryInterface = anyType as CategoryInterface;;
    

                        if(!categoryInterface!.isValid().valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
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


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    let categoryHashMap: HashMap<any, any> = this.categoryPropertiesInterface!.toHashMap()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    let categoryVector: BasicArrayList = this.categoryPropertiesInterface!.toVector()!;;
    
categoryVector!.add(this.childCategoryVector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


                //@Throws(Exception.constructor)
            
    public log(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Category Name: ");
    
stringBuffer!.append(this.categoryPropertiesInterface!.getValue());
    
stringBuffer!.append("\nPath = ");
    
stringBuffer!.append(this.getPath()!.toString());
    
stringBuffer!.append("\nFile Path: ");
    
stringBuffer!.append(this.getFilePath()!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "log()");
    

                                    }
                                
}


}

