
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
      
import { TableMappingInterface } from '../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      
import { TransformInfoObjectConfigInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInfoInterface extends TableMappingInterface {
        

    log(): string

                //@Throws(Exception.constructor)
            
    override(hashMap: HashMap<any, any>)

    getName(): string

    setStoreName(value: string)

    getStoreName(): string

    getObjectFile(): string

    getObject(): any

                //@Throws(Exception.constructor)
            
    getTemplateFilePath(): AbPath

    getTemplateFile(): string

    getTemplate(): string

                //@Throws(Exception.constructor)
            
    getDataFilePath(): AbPath

    getDataFile(): string

                //@Throws(Exception.constructor)
            
    getDataDocument(): Document

    setName(value: string)

    setObjectFile(value: string)

    setObject(anyType: Object)

                //@Throws(Exception.constructor)
            
    setObjectConfigInterface(transformInfoObjectConfigInterface: Object)

                //@Throws(Exception.constructor)
            
    getObjectConfigInterface(): TransformInfoObjectConfigInterface

    setTemplateFile(value: string)

    setTemplate(value: string)

    setDataFile(value: string)

    setData(value: string)

    setChild()

    isChild(): boolean

}
                
            

