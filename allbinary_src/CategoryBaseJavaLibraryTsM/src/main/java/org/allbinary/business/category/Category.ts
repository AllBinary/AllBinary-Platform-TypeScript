
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { CategoryHierarchy } from "../../../../org/allbinary/business/category/hierarchy/CategoryHierarchy.js";

    
import { CategoryHierarchyInterface } from "../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { CategoryPropertiesFactoryInterface } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js";

    
import { CategoryPropertiesInterface } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js";

    
import { RootCategoryPropertiesInterface } from "../../../../org/allbinary/business/category/properties/root/RootCategoryPropertiesInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

export class Category
            extends Object
        
                , CategoryInterface {
        

    private static readonly NOT_ROOT: string = "This is not the root so it has no file path.";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private categoryHierarchyInterface: CategoryHierarchyInterface

    private categoryPropertiesInterface: CategoryPropertiesInterface

    private readonly childCategoryVector: Vector = new Vector();
        
        

    private readonly typeVector: Vector = new Vector();
        
        

    private readonly PROPERTIES: Integer = new Integer(1);
        
        

    private readonly CATEGORY: Integer = new Integer(0);
        
        
public constructor (categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface){

            super();
            var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.CONSTRUCTOR, this, "Category(CategoryPropertiesFactoryInterface)")

                                    }
                                
this.categoryPropertiesInterface= categoryPropertiesFactoryInterface!.getInstance()
this.categoryHierarchyInterface= CategoryHierarchy(this, this) as CategoryHierarchyInterface
this.this.log()
}

public constructor (categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number){

            super();
            var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface
var level = level
this.categoryPropertiesInterface= categoryPropertiesFactoryInterface!.getInstance()
this.categoryHierarchyInterface= CategoryHierarchy(this, this, level) as CategoryHierarchyInterface
this.this.log()
}

public constructor (rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface){

            super();
            var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface
this.categoryPropertiesInterface= categoryPropertiesFactoryInterface!.getInstance() as CategoryPropertiesInterface
this.categoryHierarchyInterface= CategoryHierarchy(rootCategoryInterface, parentCategoryInterface) as CategoryHierarchyInterface
this.this.log()
}


                //@Throws(Error::class)
            
    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface!.getKey();
    
}


                //@Throws(Error::class)
            
    public getRootFilePath(): AbPath{

    var rootAbPath: AbPath = new AbPath(NOT_ROOT);
        
        


    var categoryInterface: CategoryInterface = this.categoryHierarchyInterface!.getRoot()!;
        
        


                        if(categoryInterface!.getProperties()!.isRoot())
                        
                                    {
                                    
    var rootCategoryPropertiesInterface: RootCategoryPropertiesInterface = categoryInterface!.getProperties() as RootCategoryPropertiesInterface;
        
        

rootAbPath= rootCategoryPropertiesInterface!.getRootFilePath()

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootAbPath;
    
}


                //@Throws(Error::class)
            
    public getFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getRootFilePath()!.toString() +this.getProperties()!.getPath(this.getHierarchy())!.toString(), this.getProperties()!.getFileName());
    
}


                //@Throws(Error::class)
            
    public getWebAppPath(): AbPath{

    var categoryInterface: CategoryInterface = this.categoryHierarchyInterface!.getRoot()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryInterface!.getProperties()!.getWebAppPath();
    
}


                //@Throws(Error::class)
            
    public getPath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface!.getPath(this.categoryHierarchyInterface);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addChildProperty(categoryPropertiesInterface: CategoryPropertiesInterface): boolean{
var categoryPropertiesInterface = categoryPropertiesInterface
this.typeVector!.add(this.PROPERTIES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childCategoryVector!.add(categoryPropertiesInterface);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addChild(categoryInterface: CategoryInterface): boolean{
var categoryInterface = categoryInterface
this.this.removeDuplicateChild(categoryInterface)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put("adding", this, "addChild")

                                    }
                                

    var childCategoryHierarchyInterface: CategoryHierarchyInterface = categoryInterface!.getHierarchy()!;
        
        

childCategoryHierarchyInterface!.setParent(this)
childCategoryHierarchyInterface!.setRoot(this.getHierarchy()!.getRoot())
categoryInterface!.setHierarchy(childCategoryHierarchyInterface)
this.typeVector!.add(this.CATEGORY)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childCategoryVector!.add(categoryInterface);
    
}


    public getChildNodes(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.childCategoryVector;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeChild(categoryInterface: CategoryInterface): boolean{
var categoryInterface = categoryInterface

    var removalVector: Vector = new Vector();
        
        


    var bool_return: boolean = false;
        
        


    var size: number = this.childCategoryVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(this.CATEGORY == this.typeVector!.get(index))
                        
                                    {
                                    
    var anyType: any = {} = this.childCategoryVector!.get(index)!;
        
        


    var currentCategoryInterface: CategoryInterface = anyType as CategoryInterface;
        
        


                        if(currentCategoryInterface!.getProperties()!.getValue()!.compareTo(categoryInterface!.getProperties()!.getValue()) == 0)
                        
                                    {
                                    removalVector!.add(currentCategoryInterface)
bool_return= true

                                    }
                                

                                    }
                                
}

this.this.removal(removalVector)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bool_return;
    
}


    removal(removalVector: Vector){
var removalVector = removalVector

    var removalSize: number = removalVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < removalSize; index++)
        {

    var anyType: any = {} = removalVector!.get(index)!;
        
        


    var objectIndex: number = this.childCategoryVector!.indexOf(anyType)!;
        
        

this.typeVector!.remove(objectIndex)
this.childCategoryVector!.remove(objectIndex)
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    removeDuplicateChild(categoryInterface: CategoryInterface): boolean{
var categoryInterface = categoryInterface

    var removalVector: Vector = new Vector();
        
        


    var bool_return: boolean = false;
        
        


    var size: number = this.childCategoryVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = {} = this.childCategoryVector!.get(index)!;
        
        


                        if(this.PROPERTIES == this.typeVector!.get(index))
                        
                                    {
                                    
    var categoryPropertiesInterface: CategoryPropertiesInterface = anyType as CategoryPropertiesInterface;
        
        


                        if(categoryInterface!.getProperties()!.getValue()!.compareTo(categoryPropertiesInterface!.getValue()) == 0)
                        
                                    {
                                    removalVector!.add(categoryPropertiesInterface)
bool_return= true
break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(this.CATEGORY == this.typeVector!.get(index))
                        
                                    {
                                    
    var existingCategoryInterface: CategoryInterface = anyType as CategoryInterface;
        
        


    var categoryPropertiesInterface: CategoryPropertiesInterface = existingCategoryInterface!.getProperties()!;
        
        


                        if(categoryInterface!.getProperties()!.getValue()!.compareTo(categoryPropertiesInterface!.getValue()) == 0)
                        
                                    {
                                    removalVector!.add(existingCategoryInterface)
bool_return= true
break;

                    

                                    }
                                

                                    }
                                
}

this.this.removal(removalVector)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bool_return;
    
}


                //@Throws(Error::class)
            
    public isLeaf(): boolean{

                        if(this.childCategoryVector == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("Category Error")

                                    }
                                

                        if(this.childCategoryVector!.length == 0)
                        
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
var categoryPropertiesInterface = categoryPropertiesInterface
this.categoryPropertiesInterface= categoryPropertiesInterface
}


    public getHierarchy(): CategoryHierarchyInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryHierarchyInterface;
    
}


    public setHierarchy(categoryHierarchyInterface: CategoryHierarchyInterface){
var categoryHierarchyInterface = categoryHierarchyInterface
this.categoryHierarchyInterface= categoryHierarchyInterface
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isValid(): Boolean{

                        if(!this.categoryPropertiesInterface!.isValid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var size: number = this.childCategoryVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = {} = this.childCategoryVector!.get(index)!;
        
        


                        if(this.PROPERTIES == this.typeVector!.get(index))
                        
                                    {
                                    
    var categoryPropertiesInterface: CategoryPropertiesInterface = anyType as CategoryPropertiesInterface;
        
        


                        if(!categoryPropertiesInterface!.isValid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.CATEGORY == this.typeVector!.get(index))
                        
                                    {
                                    
    var categoryInterface: CategoryInterface = anyType as CategoryInterface;
        
        


                        if(!categoryInterface!.isValid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


                //@Throws(Error::class)
            
    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<Any, Any>{

    var categoryHashMap: HashMap<Any, Any> = this.categoryPropertiesInterface!.toHashMap()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var categoryVector: Vector = this.categoryPropertiesInterface!.toVector()!;
        
        

categoryVector!.add(this.childCategoryVector)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


                //@Throws(Error::class)
            
    public log(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Category Name: ")
stringBuffer!.append(this.categoryPropertiesInterface!.getValue())
stringBuffer!.append("\nPath = ")
stringBuffer!.append(this.getPath()!.toString())
stringBuffer!.append("\nFile Path: ")
stringBuffer!.append(this.getFilePath()!.toString())
logUtil!.put(stringBuffer!.toString(), this, "log()")

                                    }
                                
}


}
                
            

