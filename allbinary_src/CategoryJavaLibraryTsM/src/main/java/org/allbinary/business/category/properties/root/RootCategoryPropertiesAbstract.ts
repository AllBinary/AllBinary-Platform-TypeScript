
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
      
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { CategoryData } from '../../../../../../org/allbinary/business/category/CategoryData.js';
      
import { CategoryHierarchyInterface } from '../../../../../../org/allbinary/business/category/hierarchy/CategoryHierarchyInterface.js';
      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      
import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RootCategoryPropertiesInterface } from './RootCategoryPropertiesInterface.js';

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


                //@Throws(Exception.constructor)
            
    public setRootFilePath(value: AbPath){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public setRootFilePath(value: string){



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
                        return Boolean.TRUE;
    
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
                
            

