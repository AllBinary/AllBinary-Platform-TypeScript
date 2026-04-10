
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

    
import { CategoryData } from "../../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryHierarchyInterface } from "../../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class RootCategoryPropertiesAbstract
            extends Object
        
                , RootCategoryPropertiesInterface {
        

    private readonly category: string = CategoryData.getInstance()!.ROOTCATEGORY;
        
        

    private readonly fileName: string = category +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION;
        
        
public constructor (){

            super();
            }


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue() as Object;
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.category;
    
}


                //@Throws(Error::class)
            
    public setValue(value: string){
var value = value



                            throw Error("No Value Allowed")
}


                //@Throws(Error::class)
            
    public setRootFilePath(value: AbPath){
var value = value



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    public setRootFilePath(value: string){
var value = value



                            throw Error("No Value Allowed")
}


                //@Throws(Error::class)
            
    public getRootFilePath(): AbPath{



                            throw Error("No Value Allowed")
}


                //@Throws(Error::class)
            
    public isRealRoot(): boolean{



                            throw Error("No A Real Root")
}


                //@Throws(Error::class)
            
    public isRoot(): boolean{



                            throw Error("Root but not implemented")
}


                //@Throws(Error::class)
            
    public getWebAppPath(categoryHierarchyInterface: CategoryHierarchyInterface): string{
var categoryHierarchyInterface = categoryHierarchyInterface



                            throw Error("Not Root")
}


    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath{
var categoryHierarchyInterface = categoryHierarchyInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath();
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileName;
    
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var categoryHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

categoryHashMap!.put(CategoryData.getInstance()!.NAME, this.category)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): Vector{

    var categoryVector: Vector = new Vector();
        
        

categoryVector!.add(category)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
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


}
                
            

