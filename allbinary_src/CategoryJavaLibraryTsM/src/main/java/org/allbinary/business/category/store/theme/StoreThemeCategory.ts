
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Category } from '../../../../../../org/allbinary/business/category/Category.js';
//not GWT import const Category

import { CategoryInterface } from '../../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface

import { CategoryPropertiesFactoryInterface } from '../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface

import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { ThemeData } from '../../../../../../org/allbinary/logic/visual/theme/ThemeData.js';
//not GWT import const ThemeData

import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
//not GWT import const ThemeValidation

import { ThemesData } from '../../../../../../org/allbinary/logic/visual/theme/ThemesData.js';
//not GWT import const ThemesData

import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategoryInterface } from './StoreThemeCategoryInterface.js';
//sameFolderImports - not GWT import - same folder const StoreThemeCategoryInterface

export class StoreThemeCategory extends Category implements StoreThemeCategoryInterface {
        

    private transformInfoInterface: TransformInfoInterface;

    private themeVector: BasicArrayList;

    public constructor(...args: any[]) {
        if(args.length === 3) {
            const transformInfoInterface = args[0];
            const categoryPropertiesFactoryInterface = args[1];
            const level = args[2];
            super(categoryPropertiesFactoryInterface, level);
            this.constructor$0(transformInfoInterface, categoryPropertiesFactoryInterface, level);
            
        }
        else if(args.length === 4 && args[0] instanceof TransformInfoInterface && args[1] instanceof CategoryInterface && args[2] instanceof CategoryInterface && args[3] instanceof CategoryPropertiesFactoryInterface) {
            const transformInfoInterface = args[0];
            const rootCategoryInterface = args[1];
            const parentCategoryInterface = args[2];
            const categoryPropertiesFactoryInterface = args[3];
            super(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface);
            this.constructor$1(transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface);
            
        }
        else if(args.length === 4) {
            const transformInfoInterface = args[0];
            const node = args[1];
            const categoryPropertiesFactoryInterface = args[2];
            const level = args[3];
            super(categoryPropertiesFactoryInterface, level);
            this.constructor$2(transformInfoInterface, node, categoryPropertiesFactoryInterface, level);
            
        }
        else if(args.length === 5) {
            const transformInfoInterface = args[0];
            const node = args[1];
            const rootCategoryInterface = args[2];
            const parentCategoryInterface = args[3];
            const categoryPropertiesFactoryInterface = args[4];
            super(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface);
            this.constructor$3(transformInfoInterface, node, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface);
            
        }
        
    }
    
    private constructor$0(transformInfoInterface: TransformInfoInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new BasicArrayListD();
    

    }
    
    private constructor$1(transformInfoInterface: TransformInfoInterface, rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new BasicArrayListD();
    

    }
    
    private constructor$2(transformInfoInterface: TransformInfoInterface, node: Node, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new BasicArrayListD();
    
this.addThemes(node);
    

    }
    
    private constructor$3(transformInfoInterface: TransformInfoInterface, node: Node, rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new BasicArrayListD();
    
this.addThemes(node);
    

    }
    
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


                //@Throws(Exception.constructor)
            
    public addThemes(node: Node){

    let themesNode: Node = DomSearchHelper.getNode(ThemesData.getInstance()!.NAME, node.getChildNodes())!;;
    

    let nodeList: NodeList = themesNode!.getChildNodes()!;;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let themeNode: Node = nodeList!.item(index)!;;
    

                        if(themeNode!.getNodeName()!.compareTo(ThemeData.getInstance()!.NAME) == 0)
                        
                                    {
                                    this.themeVector!.add(new ThemeValidation(this, themeNode));
    

                                    }
                                
}

}


    public addTheme(themeValidation: ThemeValidation){
this.themeVector!.add(themeValidation);
    
}


    public getThemes(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themeVector;
    
}


                //@Throws(Exception.constructor)
            
    public isValid(): Boolean{

                        if(!super.isValid().valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    let categoryHashMap: HashMap<any, any> = super.toHashMap()!;;
    
categoryHashMap!.put(ThemesData.getInstance()!.NAME, this.themeVector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    let categoryVector: BasicArrayList = super.toVector()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


}

