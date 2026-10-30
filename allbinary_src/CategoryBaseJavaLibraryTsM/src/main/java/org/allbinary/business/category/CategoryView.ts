
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CategoryPropertiesInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface

import { CategoryPropertiesView } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesView.js';
//not GWT import const CategoryPropertiesView

import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { InterfaceUtil } from '../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js';
//not GWT import const InterfaceUtil

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryInterface } from './CategoryInterface.js';
//not GWT import - same folder const CategoryInterface
import { CategoryData } from './CategoryData.js';
//not GWT import - same folder const CategoryData

export class CategoryView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private categoryInterface: CategoryInterface;

public constructor (categoryInterface: CategoryInterface){

            super();
        this.categoryInterface= categoryInterface;
    
}


    public getCategoryInterface(): CategoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(CategoryData.getInstance()!.NAME)!;;
    

    let childCategoryVector: BasicArrayList = this.categoryInterface!.getChildNodes()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Number Of Children: " +childCategoryVector!.size(), this, "toXmlNode");
    

                                    }
                                

    let size: number = childCategoryVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let anyType: any = childCategoryVector!.get(i)!;;
    

    let categoryPropertiesInterface: CategoryPropertiesInterface = 
                null
            ;;
    

                        if(InterfaceUtil.isImplemented("CategoryPropertiesInterface", anyType))
                        
                                    {
                                    categoryPropertiesInterface= anyType as CategoryPropertiesInterface;
    

                                    }
                                
                             else 
                        if(InterfaceUtil.isImplemented("CategoryInterface", anyType))
                        
                                    {
                                    
    let categoryInterface: CategoryInterface = anyType as CategoryInterface;;
    
categoryPropertiesInterface= categoryInterface!.getProperties();
    

                                    }
                                
                        else {
                            
    let isImpl: string = InterfaceUtil.viewAll(anyType!.constructor, CommonSeps.getInstance()!.NEW_LINE)!;;
    



                            throw new Exception("CategoryView found unknown object.\n" +"Show Testing:" +isImpl);
                    

                        }
                            

    let childCategoryNode: Node = new CategoryPropertiesView(categoryPropertiesInterface).toXmlNode(document)!;;
    
node.appendChild(childCategoryNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

