
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
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      
import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      
import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      
import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { TimeDelayHelper } from '../../../../../../../org/allbinary/time/TimeDelayHelper.js';
      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      
import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicProfileActionScriptCondition } from './BasicProfileActionScriptCondition.js';
import { TimeIntervalActionScriptConditionInterface } from './TimeIntervalActionScriptConditionInterface.js';
import { TimeIntervalActionScriptConditionJPanel } from './TimeIntervalActionScriptConditionJPanel.js';
import { TimeIntervalActionScriptConditionData } from './TimeIntervalActionScriptConditionData.js';

export class TimeIntervalActionScriptCondition extends BasicProfileActionScriptCondition implements TimeIntervalActionScriptConditionInterface {
        

    private static readonly NAME: string = "Time Interval";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private timeIntervalActionScriptConditionJPanel: TimeIntervalActionScriptConditionJPanel

    private timeHelper: TimeDelayHelper
public constructor (node: Node){
            super(TimeIntervalActionScriptCondition.NAME, node);
                    var node = node


                            //For kotlin this is before the body of the constructor.
                    

    var actionNode: Node = DomSearchHelper.getNode(TimeIntervalActionScriptConditionData.NAME, node.getChildNodes())!;
;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;
;
    




                        for (
    var index: number = 0;
index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;
;
    

                        if(childNode!.getNodeName()!.localeCompare(TimeIntervalActionScriptConditionData.TIME) == 0)
                        
                                    {
                                    
    var interval: string = DomNodeHelper.getTextNodeValue(childNode)!;
;
    
this.setTimeDelayHelper(new TimeDelayHelper(Integer(Integer.valueOf(interval))));
    

                                    }
                                
                        else {
                            


                            throw new Exception("Time Interval Action Script Condition Unknown Node");
                    

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw new Exception("Time Interval Action Script Condition Node Null");
                    

                        }
                            
this.init();
    
}

public constructor (){
            super(TimeIntervalActionScriptCondition.NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTimeDelayHelper(new TimeDelayHelper(0));
    
this.init();
    
}


    init(){
this.timeIntervalActionScriptConditionJPanel= new TimeIntervalActionScriptConditionJPanel(this);
    
}


    public showDialog(){
this.timeIntervalActionScriptConditionJPanel!.getTimeIntervalActionJDialog()!.setVisible(true);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
;
    
hashMap!.put(TimeIntervalActionScriptConditionData.TIME, Integer.toString(this.timeHelper!.delay));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = super.toXmlNode(document)!;
;
    
node.appendChild(ModDomHelper.createNodeWithValueNodes(document, TimeIntervalActionScriptConditionData.NAME, this.toHashMap()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public log(){
this.logUtil!.putF("Time Interval: " +this.timeHelper!.delay, this, "log");
    
}


    public getTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeHelper;
    
}


    public setTimeDelayHelper(timeHelper: TimeDelayHelper){
    //var timeHelper = timeHelper
this.timeHelper= timeHelper;
    
}


                //@Throws(Exception.constructor)
            
    public shouldProcess(frame: Long): boolean{
var frame = frame

    var timeHelper: TimeDelayHelper = this.getTimeDelayHelper()!;
;
    

                        if(timeHelper!.isTimeTNT())
                        
                                    {
                                    timeHelper!.setStartTimeTNT();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.shouldProcess(frame);;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

