
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CategoryData } from '../../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData

import { CategoryHierarchyInterface } from '../../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
//not GWT import const CategoryHierarchyInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RootCategoryPropertiesInterface } from './RootCategoryPropertiesInterface.js';
//sameFolderImports - not GWT import - same folder const RootCategoryPropertiesInterface

export class RootCategoryPropertiesAbstract
            extends Object
         implements RootCategoryPropertiesInterface {
        

    private readonly category: string = CategoryData.getInstance()!.ROOTCATEGORY;

    private readonly fileName: string = this.category +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION;

public constructor (){

            super();
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
            
    public setValue(value: string){



                            throw new Exception("No Value Allowed");
                    
}

setRootFilePath(...args: any[]): any {
   
    if (args.length === 1) return this.setRootFilePath$overload1(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.setRootFilePath$overload2(args[0]);
   
   throw new TypeError('No matching overload: setRootFilePath'); }
  
                //@Throws(Exception.constructor)
            
    public setRootFilePath$overload1(value: AbPath){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public setRootFilePath$overload2(value: string){



                            throw new Exception("No Value Allowed");
                    
}


                //@Throws(Exception.constructor)
            
    public getRootFilePath(): AbPath{



                            throw new Exception("No Value Allowed");
                    
}


                //@Throws(Exception.constructor)
            
    public isRealRoot(): boolean{



                            throw new Exception("No A Real Root");
                    
}


                //@Throws(Exception.constructor)
            
    public isRoot(): boolean{



                            throw new Exception("Root but not implemented");
                    
}


                //@Throws(Exception.constructor)
            
    public getWebAppPath(categoryHierarchyInterface: CategoryHierarchyInterface): string{



                            throw new Exception("Not Root");
                    
}


    public getPath(categoryHierarchyInterface: CategoryHierarchyInterface): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath.createAbPath();;
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileName;
    
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
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

