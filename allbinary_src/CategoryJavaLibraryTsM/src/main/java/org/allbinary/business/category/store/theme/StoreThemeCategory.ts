
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
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { Category } from '../../../../../../org/allbinary/business/category/Category.js';
      
import { CategoryInterface } from '../../../../../../org/allbinary/business/category/CategoryInterface.js';
      
import { CategoryPropertiesFactoryInterface } from '../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      
import { ThemeData } from '../../../../../../org/allbinary/logic/visual/theme/ThemeData.js';
      
import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
      
import { ThemesData } from '../../../../../../org/allbinary/logic/visual/theme/ThemesData.js';
      
import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategoryInterface } from './StoreThemeCategoryInterface.js';

export class StoreThemeCategory extends Category implements StoreThemeCategoryInterface {
        

    private transformInfoInterface: TransformInfoInterface

    private themeVector: Vector
public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number){
            super(categoryPropertiesFactoryInterface, level);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
}

public constructor (transformInfoInterface: TransformInfoInterface, rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface){
            super(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface, level: number){
            super(categoryPropertiesFactoryInterface, level);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
this.addThemes(node);
    
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node, rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface){
            super(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.transformInfoInterface= transformInfoInterface;
    
this.themeVector= new Vector();
    
this.addThemes(node);
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


                //@Throws(Exception.constructor)
            
    public addThemes(node: Node){

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
this.themeVector!.add(themeValidation);
    
}


    public getThemes(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themeVector;
    
}


                //@Throws(Exception.constructor)
            
    public isValid(): Boolean{

                        if(!super.isValid().valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var categoryHashMap: HashMap<any, any> = super.toHashMap()!;
;
    
categoryHashMap!.put(ThemesData.getInstance()!.NAME, this.themeVector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryHashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): Vector{

    var categoryVector: Vector = super.toVector()!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return categoryVector;
    
}


}
                
            

