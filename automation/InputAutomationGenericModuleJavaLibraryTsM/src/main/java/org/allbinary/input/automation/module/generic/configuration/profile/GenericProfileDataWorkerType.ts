
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { InputImageType } from '../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
      //not GWT import const InputImageType = globalThis.org.allbinary.input.media.image.InputImageType;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileDataWorkerTypeInterface } from './GenericProfileDataWorkerTypeInterface.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfileDataWorkerTypeInterface;

                import { SavedCaptureGenericProfileDataWorkerType } from './SavedCaptureGenericProfileDataWorkerType.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.SavedCaptureGenericProfileDataWorkerType;

                import { GenericProfileDataWorkerData } from './GenericProfileDataWorkerData.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfileDataWorkerData;

                
export class GenericProfileDataWorkerType
            extends Object
         implements GenericProfileDataWorkerTypeInterface {
        

    private static hashMap: HashMap<any, any> = new HashMap<any, any>();

    public static SAVED_CAPTURE: GenericProfileDataWorkerType = SavedCaptureGenericProfileDataWorkerType.SAVED_CAPTURE;

    public static SCREEN_CAPTURE: GenericProfileDataWorkerType = new GenericProfileDataWorkerType("Screen " +InputImageType.CAPTURE.getName());

    public static COMPARISON: GenericProfileDataWorkerType = new GenericProfileDataWorkerType(InputImageType.COMPARISON.getName());

    public static MOTION: GenericProfileDataWorkerType = new GenericProfileDataWorkerType(InputImageType.MOTION.getName());

    public static getInstance(node: Node): GenericProfileDataWorkerType{

    var name: string = DomNodeHelper.getTextNodeValue(node)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GenericProfileDataWorkerType.hashMap!.get(name) as GenericProfileDataWorkerType;
    
}


    private name: string;

public constructor (name: string){

            super();
        this.setName(name);
    
GenericProfileDataWorkerType.hashMap!.put(this.getName(), this);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createTextNode(document, GenericProfileDataWorkerData.NAME, this.name)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "GenericProfileDataWorkerType: " +this.getName();
    
}


}



