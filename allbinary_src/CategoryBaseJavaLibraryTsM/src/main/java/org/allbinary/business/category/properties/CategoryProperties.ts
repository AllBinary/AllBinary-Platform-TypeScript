
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
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
      const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
//not game specific package import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { CategoryUtil } from '../../../../../org/allbinary/business/category/CategoryUtil.js';
      const CategoryUtil = globalThis.org.allbinary.business.category.CategoryUtil;

      
//not game specific package import { CategoryHierarchyInterface } from '../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
      const CategoryHierarchyInterface = globalThis.org.allbinary.business.category.hierarchy.CategoryHierarchyInterface;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbSqlData } from '../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
      const AbSqlData = globalThis.org.allbinary.logic.communication.sql.AbSqlData;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryPropertiesInterface } from './CategoryPropertiesInterface.js';

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

    var abPathData: AbPathData = AbPathData.getInstance()!;;
    

    var pathStringBuffer: StringMaker = new StringMaker();;
    

    var list: BasicArrayList = new BasicArrayListD();;
    

    var nextParentCategoryInterface: CategoryInterface = categoryHierarchyInterface!.getParent()!;;
    

                        if(this != nextParentCategoryInterface!.getProperties())
                        
                                    {
                                    
    var depthIndex: number = 0;;
    

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
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
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

    var returnBoolean: Boolean = Boolean.FALSE;;
    

                        if(StringValidationUtil.getInstance()!.isValidRequired(this.category, 1, AbSqlData.MAXSTRING))
                        
                                    {
                                    returnBoolean= Boolean.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnBoolean;
    
}


    public toHashMap(): HashMap<any, any>{

    var categoryHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
categoryHashMap!.put(CategoryData.getInstance()!.NAME, this.category);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


    public toVector(): Vector{

    var categoryVector: Vector = new Vector();;
    
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
                
            

