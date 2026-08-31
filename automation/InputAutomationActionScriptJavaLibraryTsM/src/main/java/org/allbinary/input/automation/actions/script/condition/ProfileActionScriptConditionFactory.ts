
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptConditionInterface } from './ProfileActionScriptConditionInterface.js';
//not GWT import const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

                import { ColorAtActionScriptConditionData } from './ColorAtActionScriptConditionData.js';
//not GWT import const ColorAtActionScriptConditionData = globalThis.org.allbinary.input.automation.actions.script.condition.ColorAtActionScriptConditionData;

                import { TimeIntervalActionScriptConditionData } from './TimeIntervalActionScriptConditionData.js';
//not GWT import const TimeIntervalActionScriptConditionData = globalThis.org.allbinary.input.automation.actions.script.condition.TimeIntervalActionScriptConditionData;

                import { AlwaysActionScriptConditionData } from './AlwaysActionScriptConditionData.js';
//not GWT import const AlwaysActionScriptConditionData = globalThis.org.allbinary.input.automation.actions.script.condition.AlwaysActionScriptConditionData;

                import { AlwaysActionScriptCondition } from './AlwaysActionScriptCondition.js';
//not GWT import const AlwaysActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.AlwaysActionScriptCondition;

                import { TimeIntervalActionScriptCondition } from './TimeIntervalActionScriptCondition.js';
//not GWT import const TimeIntervalActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.TimeIntervalActionScriptCondition;

                import { ColorAtActionScriptCondition } from './ColorAtActionScriptCondition.js';
//not GWT import const ColorAtActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.ColorAtActionScriptCondition;

                
export class ProfileActionScriptConditionFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(node: Node): ProfileActionScriptConditionInterface{

    var profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = 
                null
            ;;
    

                        if(DomSearchHelper.getNodeNoThrow(ColorAtActionScriptConditionData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptConditionInterface= new ColorAtActionScriptCondition(node);
    

                                    }
                                
                             else 
                        if(DomSearchHelper.getNodeNoThrow(TimeIntervalActionScriptConditionData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptConditionInterface= new TimeIntervalActionScriptCondition(node);
    

                                    }
                                
                             else 
                        if(DomSearchHelper.getNodeNoThrow(AlwaysActionScriptConditionData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptConditionInterface= new AlwaysActionScriptCondition(node);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return profileActionScriptConditionInterface;
    
}


private constructor (){

            super();
        }


}



