
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Group } from './Group.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

                
export class BasicGroupFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): BasicGroupFactory{

                        if(BasicGroupFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    BasicGroupFactory.instance= new BasicGroupFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicGroupFactory.instance as BasicGroupFactory;
    
}


    public readonly NAME: string = "GROUP_NAME";

    public readonly NO_SUCH_GROUP: string = "No Such Group: ";

    public readonly GOOD: Group = new Group("Good Guys", 0);

    public readonly ENEMY: Group = new Group("Bad Guys", 1);

    public readonly ENEMY_ON_LEVEL: Group = new Group("Bad Guys on Level", 2);

    public readonly NONE: Group = new Group("Not On A Team", 3);

    public readonly GOOD_ARRAY: Group[] = 
                                                        [
                                                            this.GOOD
                                                        ];

    public readonly ENEMY_ARRAY: Group[] = 
                                                        [
                                                            this.ENEMY
                                                        ];

    public readonly ENEMY_ON_LEVEL_ARRAY: Group[] = 
                                                        [
                                                            this.ENEMY,this.ENEMY_ON_LEVEL
                                                        ];

    public readonly NONE_ARRAY: Group[] = 
                                                        [
                                                            this.NONE
                                                        ];

}



