
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
        



import { RequestMapInterface } from "../../org/allbinary/logic/communication/http/request/RequestMapInterface.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInterface } from "../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { ValidationViewHelper } from "../../taghelpers/ValidationViewHelper.js";

    
import { HelperTag } from "../../tags/HelperTag.js";

    
import { InventoryItemView } from "../../views/admin/inventory/InventoryItemView.js";

    
import { DownloadableInventoryItemView } from "../../views/admin/inventory/download/DownloadableInventoryItemView.js";

    

export class InventoryItemViewParentTagHelper
            extends Object
         {
        

    private static readonly instance: InventoryItemViewParentTagHelper = new InventoryItemViewParentTagHelper();
        
        

    public static getInstance(): InventoryItemViewParentTagHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getInventoryItemView(inventoryTag: HelperTag): InventoryItemView{
var inventoryTag = inventoryTag

                        if(inventoryTag != 
                                    null
                                )
                        
                                    {
                                    this.checkForValidationViewHelper(inventoryTag!.getHelper());
    

    var validationViewHelper: ValidationViewHelper = inventoryTag!.getHelper();

                         as ValidationViewHelper;
        
        
;
    

    var viewObject: TransformInterface = validationViewHelper!.getViewObject()!;
        
        
;
    

                        if(viewObject!.getTypeId() != InventoryItemView.TYPE_ID)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Must have ");
    
stringBuffer!.append("InventoryItemView and not: ");
    
stringBuffer!.append(inventoryTag!.getHelper()!..constructor.name.toString()!);
    



                            throw new Error(stringBuffer!.toString())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewObject as InventoryItemView;
    

                                    }
                                
                        else {
                            


                            throw new Error("Must have parent tag.")

                        }
                            
}


                //@Throws(Error::class)
            
    public getDownloadableInventoryItemView(inventoryTag: HelperTag): DownloadableInventoryItemView{
var inventoryTag = inventoryTag

                        if(inventoryTag != 
                                    null
                                )
                        
                                    {
                                    this.checkForValidationViewHelper(inventoryTag!.getHelper());
    

    var validationViewHelper: ValidationViewHelper = inventoryTag!.getHelper();

                         as ValidationViewHelper;
        
        
;
    

    var viewObject: TransformInterface = validationViewHelper!.getViewObject()!;
        
        
;
    

                        if(viewObject!.getTypeId() != DownloadableInventoryItemView.TYPE_ID)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Must have ");
    
stringBuffer!.append("DownloadableInventoryItemView and not: ");
    
stringBuffer!.append(inventoryTag!.getHelper()!..constructor.name.toString()!);
    



                            throw new Error(stringBuffer!.toString())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewObject as DownloadableInventoryItemView;
    

                                    }
                                
                        else {
                            


                            throw new Error("Must have parent tag.")

                        }
                            
}


                //@Throws(Error::class)
            
    public getRequestMapInterface(inventoryTag: HelperTag): RequestMapInterface{
var inventoryTag = inventoryTag

                        if(inventoryTag != 
                                    null
                                )
                        
                                    {
                                    this.checkForValidationViewHelper(inventoryTag!.getHelper());
    

    var validationViewHelper: ValidationViewHelper = inventoryTag!.getHelper();

                         as ValidationViewHelper;
        
        
;
    

    var viewObject: TransformInterface = validationViewHelper!.getViewObject()!;
        
        
;
    

                        if(viewObject!.getTypeId() != InventoryItemView.TYPE_ID && viewObject!.getTypeId() != DownloadableInventoryItemView.TYPE_ID)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Must have ");
    
stringBuffer!.append("specific TYPE_ID and not: ");
    
stringBuffer!.append(inventoryTag!.getHelper()!..constructor.name.toString()!);
    



                            throw new Error(stringBuffer!.toString())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewObject as RequestMapInterface;
    

                                    }
                                
                        else {
                            


                            throw new Error("Must have parent tag.")

                        }
                            
}


                //@Throws(Error::class)
            
    public checkForValidationViewHelper(helperObject: any = {}){
var helperObject = helperObject

                        if(!(helperObject is ValidationViewHelper))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Must have ");
    
stringBuffer!.append("ValidationViewHelper");
    
stringBuffer!.append("and not: ");
    
stringBuffer!.append(helperObject!.constructor.name.toString()!);
    



                            throw new Error(stringBuffer!.toString())

                                    }
                                
}


}
                
            

