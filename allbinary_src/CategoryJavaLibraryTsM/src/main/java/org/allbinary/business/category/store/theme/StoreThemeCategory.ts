
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { Category } from "../../../../../../org/allbinary/business/category/Category.js";

    
import { CategoryInterface } from "../../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { CategoryPropertiesFactoryInterface } from "../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ThemeData } from "../../../../../../org/allbinary/logic/visual/theme/ThemeData.js";

    
import { ThemeValidation } from "../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js";

    
import { ThemesData } from "../../../../../../org/allbinary/logic/visual/theme/ThemesData.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

export class StoreThemeCategory extends Category
                , StoreThemeCategoryInterface {
        

    private transformInfoInterface: TransformInfoInterface

    private themeVector: Vector
public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number)                        

                            : super(categoryPropertiesFactoryInterface, level){

            super();
            var transformInfoInterface = transformInfoInterface
var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface
var level = level


                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
}

public constructor (transformInfoInterface: TransformInfoInterface, rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface)                        

                            : super(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface){

            super();
            var transformInfoInterface = transformInfoInterface
var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number)                        

                            : super(categoryPropertiesFactoryInterface, level){

            super();
            var transformInfoInterface = transformInfoInterface
var node = node
var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface
var level = level


                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
this.addThemes(node);
    
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node, rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface)                        

                            : super(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface){

            super();
            var transformInfoInterface = transformInfoInterface
var node = node
var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryPropertiesFactoryInterface = categoryPropertiesFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
this.addThemes(node);
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


                //@Throws(Error::class)
            
    public addThemes(node: Node){
var node = node

    var themesNode: Node = DomSearchHelper.getNode(ThemesData.getInstance()!.NAME, node.getChildNodes())!;
        
        
;
    

    var nodeList: NodeList = themesNode!.getChildNodes()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var themeNode: Node = nodeList!.item(index)!;
        
        
;
    

                        if(themeNode!.getNodeName()!.compareTo(ThemeData.getInstance()!.NAME) == 0)
                        
                                    {
                                    this.themeVector!.add(new ThemeValidation(this, themeNode));
    

                                    }
                                
}

}


    public addTheme(themeValidation: ThemeValidation){
var themeValidation = themeValidation
this.themeVector!.add(themeValidation);
    
}


    public getThemes(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themeVector;
    
}


                //@Throws(Error::class)
            
    public isValid(): Boolean{

                        if(!super.isValid();

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{

    var categoryHashMap: HashMap<any, any> = super.toHashMap()!;
        
        
;
    
categoryHashMap!.put(ThemesData.getInstance()!.NAME, this.themeVector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var categoryVector: Vector = super.toVector()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


}
                
            

