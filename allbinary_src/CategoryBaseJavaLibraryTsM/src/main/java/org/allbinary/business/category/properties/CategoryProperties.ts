
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { CategoryUtil } from "../../../../../org/allbinary/business/category/CategoryUtil.js";

    
import { CategoryHierarchyInterface } from "../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CategoryPropertiesInterface } from "./CategoryPropertiesInterface.js";

export class CategoryProperties
            extends Object
         implements CategoryPropertiesInterface {
        

    private static readonly MAXDEPTH: number = 100;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private category: string
public constructor (name: string){

            super();
        var name = name
this.category= name;
    
}

public constructor (node: Node){

            super();
        var node = node
this.category= CategoryUtil.getNameFromNode(node);
    
}

public constructor (categoryPropertiesHashMap: HashMap<any, any>){

            super();
        var categoryPropertiesHashMap = categoryPropertiesHashMap
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
                        return this.getValue(); as Object;
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.category;
    
}


                //@Throws(Error::class)
            
    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath{
var categoryHierarchyInterface = categoryHierarchyInterface

    var abPathData: AbPathData = AbPathData.getInstance()!;
        
        
;
    

    var pathStringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var list: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var nextParentCategoryInterface: CategoryInterface = categoryHierarchyInterface!.getParent()!;
        
        
;
    

                        if(this != nextParentCategoryInterface!.getProperties())
                        
                                    {
                                    
    var depthIndex: number = 0;
        
        
;
    

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
                                    list.add(0, nextParentCategoryInterface!.getPath()!.toString());
    

                                    }
                                
                        else {
                            pathStringBuffer!.delete(0, pathStringBuffer!.length());
    
list.add(0, pathStringBuffer!.append(abPathData!.SEPARATOR)!.append(nextParentCategoryInterface!.getProperties()!.getValue())!.toString());
    

                        }
                            

                        if(nextParentCategoryInterface == nextParentCategoryInterface!.getHierarchy()!.getParent())
                        
                                    {
                                    break;

                    

                                    }
                                
nextParentCategoryInterface= nextParentCategoryInterface!.getHierarchy()!.getParent();
    
depthIndex++;
    

                        if(depthIndex > MAXDEPTH)
                        
                                    {
                                    


                            throw new Error("Probably Major Error")

                                    }
                                
}


                                    }
                                
pathStringBuffer!.delete(0, pathStringBuffer!.length());
    
pathStringBuffer!.append(abPathData!.SEPARATOR)!.append(this.getValue());
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
pathStringBuffer!.append(list.get(index) as String);
    
}

pathStringBuffer!.append(abPathData!.SEPARATOR);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("path = " +pathStringBuffer!.toString(), this, "getPath");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(pathStringBuffer!.toString());
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getValue() +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION;
    
}


                //@Throws(Error::class)
            
    public getWebAppPath(): AbPath{



                            throw new Error("Not Root")
}


    public setValue(value: string){
var value = value
this.category= value;
    
}


    public isValid(): Boolean{

    var returnBoolean: Boolean = Boolean.FALSE;
        
        
;
    

                        if(StringValidationUtil.getInstance()!.isValidRequired(this.category, 1, AbSqlData.MAXSTRING))
                        
                                    {
                                    returnBoolean= Boolean.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnBoolean;
    
}


    public toHashMap(): HashMap<any, any>{

    var categoryHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
categoryHashMap!.put(CategoryData.getInstance()!.NAME, this.category);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): Vector{

    var categoryVector: Vector = new Vector();
        
        
;
    
categoryVector!.add(this.category);
    



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
                
            

