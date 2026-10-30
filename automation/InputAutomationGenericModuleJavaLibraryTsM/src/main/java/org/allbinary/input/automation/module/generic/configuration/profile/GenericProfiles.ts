
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
        
import { DataOutputStream } from '../../../../../../../../java/io/DataOutputStream.js';
//not GWT import const DataOutputStream

import { File } from '../../../../../../../../java/io/File.js';
//not GWT import const File

import { FileInputStream } from '../../../../../../../../java/io/FileInputStream.js';
//not GWT import const FileInputStream

import { FileOutputStream } from '../../../../../../../../java/io/FileOutputStream.js';
//not GWT import const FileOutputStream

import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set

import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

import { DomDocumentMappingInterface } from '../../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
//not GWT import const DomDocumentMappingInterface

import { DefaultListModelHelper } from '../../../../../../../../org/allbinary/input/automation/module/DefaultListModelHelper.js';
//not GWT import const DefaultListModelHelper

import { GenericProfileActionData } from '../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionData.js';
//not GWT import const GenericProfileActionData

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfilesData } from './GenericProfilesData.js';
//not GWT import - same folder const GenericProfilesData
import { GenericProfileData } from './GenericProfileData.js';
//not GWT import - same folder const GenericProfileData
import { GenericProfile } from './GenericProfile.js';
//not GWT import - same folder const GenericProfile

export class GenericProfiles
            extends Object
         implements DomNodeInterface, DomDocumentMappingInterface {
        

    public static readonly DEFAULT_PROFILES_PATH: string = "./modules/configs/profiles/";

    public static readonly DEFAULT_PROFILE_ACTIONS_PATH: string = GenericProfiles.DEFAULT_PROFILES_PATH +"actions/";

    public static readonly DEFAULT_FILE: string = GenericProfiles.DEFAULT_PROFILES_PATH +"profiles.xml";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private hashMap: HashMap<any, any>;

    private profilesDefaultListModelHelper: DefaultListModelHelper;

    private readonly fileName: string;

public constructor (fileName: string){

            super();
        this.fileName= fileName;
    
this.profilesDefaultListModelHelper= new DefaultListModelHelper();
    
this.hashMap= StdUtil.getInstance()!.createHashMap();
    

                        if(new File(fileName).isFile())
                        
                                    {
                                    
    let bytes: number[] = new Array(100000);;
    

    let idFile: FileInputStream = new FileInputStream(fileName);;
    

    let length: number = idFile!.read(bytes)!;;
    

    let data: string = String.fromCharCode(...bytes);;
    

    let endIndex: number = data.lastIndexOf('>')!;;
    

    let document: Document = DomDocumentHelper.create(data.substring(0, endIndex +1))!;;
    

    let nodeList: NodeList = document.getElementsByTagName(GenericProfilesData.NAME)!;;
    
this.logUtil!.putF("Number Of Profiles Specified: " +nodeList!.getLength(), this, "Contructor");
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    this.initProfiles(nodeList!.item(0));
    

                                    }
                                
                        else {
                            


                            throw new Exception(GenericProfileActionData.NAME +" Name Node Node Children");
                    

                        }
                            
this.logUtil!.putF("Loaded: " +this.hashMap!.size() +" Configuration Profile Actions", this, "Contructor");
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Generic Profile: " +fileName, this, "Contructor");
    

                        }
                            
this.getDefaultListModelHelper()!.initDefaultModelList();
    
}


                //@Throws(Exception.constructor)
            
    initProfiles(node: Node){

    let nodeList: NodeList = node.getChildNodes()!;;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let profileNameNode: Node = nodeList!.item(index)!;;
    

                        if(profileNameNode!.getNodeName()!.compareTo(GenericProfileData.NAME) == 0)
                        
                                    {
                                    
    let genericProfile: GenericProfile = new GenericProfile(profileNameNode);;
    
this.hashMap!.put(genericProfile!.getName(), genericProfile);
    
this.getDefaultListModelHelper()!.add(genericProfile!.getName());
    

                                    }
                                
}

}


    public getDefaultListModelHelper(): DefaultListModelHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profilesDefaultListModelHelper;
    
}


                //@Throws(Exception.constructor)
            
    public get(name: string): GenericProfile{

    let genericProfile: GenericProfile = this.hashMap!.get(name) as GenericProfile;;
    

                        if(genericProfile == 
                                    null
                                )
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("No Generic Profile Named: " +name +" availability was: " +this.hashMap, this, commonStrings!.GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfile;
    
}


                //@Throws(Exception.constructor)
            
    public add(name: string){
this.hashMap!.put(name, new GenericProfile(name));
    
this.getDefaultListModelHelper()!.add(name);
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


                //@Throws(Exception.constructor)
            
    public remove(name: string){
this.hashMap!.remove(name);
    
this.getDefaultListModelHelper()!.remove(name);
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(GenericProfilesData.NAME)!;;
    

    let set: Set = this.hashMap!.keys()!;;
    

    let nameArray: any[] = set.toArray()!;;
    

    let size: number = nameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let genericProfile: GenericProfile = this.hashMap!.get(nameArray[index]! as string) as GenericProfile;;
    
node.appendChild(genericProfile!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{

    let document: Document = DomDocumentHelper.create()!;;
    

    let node: Node = this.toXmlNode(document)!;;
    
document.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Exception.constructor)
            
    public save(){

    let idFile: FileOutputStream = new FileOutputStream(this.fileName);;
    

    let idOutData: DataOutputStream = new DataOutputStream(idFile);;
    

    let documentString: string = XmlDocumentHelper.toString(this.toXmlDoc())!;;
    
idOutData!.writeBytes(documentString);
    
}


}

