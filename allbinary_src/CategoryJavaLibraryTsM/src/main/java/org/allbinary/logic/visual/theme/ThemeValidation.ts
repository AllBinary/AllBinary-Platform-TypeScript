
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData

import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
//not GWT import const CategoryFactoryInterface

import { StoreThemeCategoryFactory } from '../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryFactory.js';
//not GWT import const StoreThemeCategoryFactory

import { StoreThemeCategoryInterface } from '../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryInterface.js';
//not GWT import const StoreThemeCategoryInterface

import { CategoryLoaderFactory } from '../../../../../org/allbinary/data/tree/category/CategoryLoaderFactory.js';
//not GWT import const CategoryLoaderFactory

import { CategoryLoaderInterface } from '../../../../../org/allbinary/data/tree/category/CategoryLoaderInterface.js';
//not GWT import const CategoryLoaderInterface

import { DomData } from '../../../../../org/allbinary/data/tree/dom/DomData.js';
//not GWT import const DomData

import { DomNodeHelper } from '../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlData } from '../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
//not GWT import const AbSqlData

import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader

import { ValidationInterface } from '../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { PathUtil } from '../../../../../org/allbinary/logic/io/path/PathUtil.js';
//not GWT import const PathUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { CompositeTransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
//not GWT import const CompositeTransformInfoInterface

import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { CssStyleValidation } from '../../../../../org/allbinary/logic/visual/transform/template/customizer/includes/style/css/template/retail/CssStyleValidation.js';
//not GWT import const CssStyleValidation

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThemeInterface } from './ThemeInterface.js';
//sameFolderImports - not GWT import - same folder const ThemeInterface
import { ThemeData } from './ThemeData.js';
//sameFolderImports - not GWT import - same folder const ThemeData

export class ThemeValidation
            extends Object
         implements ThemeInterface, ValidationInterface, DomNodeInterface, CompositeTransformInfoInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private transformInfoInterface: TransformInfoInterface;

    private styleValidationInterface: ValidationInterface;

    private themeName: string;

    private themePreviewImageName: string;

    private webAppAbPath: AbPath;

    private categoryAbPath: AbPath;

    private fileAbPath: AbPath;

    public constructor(...args: any[]) {
        super();if(args.length === 3) {
            
            this.constructor$0(args[0], args[1], args[2]);
            
        }
        else if(args.length === 2 && args[0] instanceof TransformInfoInterface && args[1] instanceof HashMap) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$2(args[0], args[1]);
            
        }
        
    }
    
    private constructor$0(transformInfoInterface: TransformInfoInterface, cssStyleValidation: CssStyleValidation, categoryThemePath: string): void {
        this.transformInfoInterface= transformInfoInterface;
    

    let pathData: AbPathData = AbPathData.getInstance()!;;
    

    let pathUtil: PathUtil = PathUtil.getInstance()!;;
    
this.categoryAbPath= pathUtil!.removeNameFromPath(categoryThemePath);
    
this.themeName= pathData!.getNameFromPath(categoryThemePath);
    
this.styleValidationInterface= cssStyleValidation;
    
this.init();
    

    }
    
    private constructor$1(transformInfoInterface: TransformInfoInterface, hashMap: HashMap<any, any>): void {
        this.transformInfoInterface= transformInfoInterface;
    

    let categoryThemeAbPath: AbPath = new AbPath(hashMap!.get(ThemeData.getInstance()!.PATH) as string, StringUtil.getInstance()!.EMPTY_STRING);;
    

    let pathData: AbPathData = AbPathData.getInstance()!;;
    

    let pathUtil: PathUtil = PathUtil.getInstance()!;;
    
this.categoryAbPath= pathUtil!.removeNameFromPath(categoryThemeAbPath!.toString());
    
this.themeName= pathData!.getNameFromPath(categoryThemeAbPath!.toString());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("CategoryThemePath: ");
    
stringBuffer!.append(categoryThemeAbPath!.toString());
    
stringBuffer!.append(" & CategoryPath: ");
    
stringBuffer!.append(this.categoryAbPath!.toString());
    
stringBuffer!.append(" & ThemeName: ");
    
stringBuffer!.append(this.themeName);
    
this.logUtil!.putF("Http Request Constructor", this, stringBuffer!.toString());
    

                                    }
                                
this.init();
    

    }
    
    private constructor$2(storeThemeCategoryInterface: StoreThemeCategoryInterface, node: Node): void {
        this.transformInfoInterface= storeThemeCategoryInterface!.getTransformInfoInterface();
    
this.categoryAbPath= storeThemeCategoryInterface!.getPath();
    

    let themeNameNode: Node = DomSearchHelper.getNode(ThemeData.getInstance()!.NAME, node.getChildNodes())!;;
    

    let valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, themeNameNode!.getChildNodes())!;;
    
this.themeName= DomNodeHelper.getTextNodeValue(valueNode);
    

    let previewImageNameNode: Node = DomSearchHelper.getNode(ThemeData.getInstance()!.PREVIEW_IMAGE_NAME, node.getChildNodes())!;;
    

    let previewImageNameValueNode: Node = DomSearchHelper.getNode(DomData.VALUE, previewImageNameNode!.getChildNodes())!;;
    
this.themePreviewImageName= DomNodeHelper.getTextNodeValue(previewImageNameValueNode);
    
this.webAppAbPath= storeThemeCategoryInterface!.getWebAppPath();
    
this.init(storeThemeCategoryInterface);
    

    }
    init(...args: any[]): any {
   
    if (args.length === 0) return this.init$overload1();
   
    if (args.length === 1) return this.init$overload2(args[0]);
   
   throw new TypeError('No matching overload: init'); }
  
                //@Throws(Exception.constructor)
            
    init$overload1(){

    let categoryFactoryInterface: CategoryFactoryInterface = new StoreThemeCategoryFactory(this.getTransformInfoInterface());;
    

    let categoryLoaderInterface: CategoryLoaderInterface = CategoryLoaderFactory.getInstance(categoryFactoryInterface)!;;
    

    let rootStoreThemeCategoryInterface: StoreThemeCategoryInterface = categoryFactoryInterface!.getRootInstance() as StoreThemeCategoryInterface;;
    
this.init(rootStoreThemeCategoryInterface);
    
}


                //@Throws(Exception.constructor)
            
    init$overload2(storeThemeCategoryInterface: StoreThemeCategoryInterface){
this.fileAbPath= new AbPath(storeThemeCategoryInterface!.getRootFilePath()!.toString() +this.categoryAbPath!.toString(), StringUtil.getInstance()!.EMPTY_STRING);
    
this.webAppAbPath= storeThemeCategoryInterface!.getWebAppPath();
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themeName;
    
}


    public getPreviewImageName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themePreviewImageName;
    
}


    public getPreviewImagePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.webAppAbPath!.toString() +this.categoryAbPath!.toString();
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryAbPath!.toString();;
    
}


                //@Throws(Exception.constructor)
            
    public getCssStyleValidation(): CssStyleValidation{

                        if(this.styleValidationInterface == 
                                    null
                                )
                        
                                    {
                                    
    let cssStyleFileAbPath: AbPath = new AbPath(this.fileAbPath!.toString(), this.themeName +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION);;
    

    let cryptFileReader: CryptFileReader = new CryptFileReader(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);;
    

    let document: Document = DomDocumentHelper.create(cryptFileReader!.get(cssStyleFileAbPath))!;;
    
this.styleValidationInterface= new CssStyleValidation(document);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.styleValidationInterface as CssStyleValidation;
    
}


    public isValid(): Boolean{

 try { 
    let isValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.categoryAbPath!.toString(), AbSqlData.MINSTRING, AbSqlData.MAXSTRING))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.themeName, AbSqlData.MINSTRING, AbSqlData.MAXSTRING))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!this.getCssStyleValidation()!.isValid().valueOf())
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: " +isValid, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Theme Validation Error");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    

 }
   }
 
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();
    
}


    public toVector(): BasicArrayList{

    let vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.getName());
    
vector.add(this.getPath());
    
vector.add(this.getPreviewImageName());
    
vector.add(this.getPreviewImagePath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<any, any>{

    let themeData: ThemeData = ThemeData.getInstance()!;;
    

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(themeData!.NAME, this.getName());
    
hashMap!.put(themeData!.PATH, this.getPath());
    
hashMap!.put(themeData!.PREVIEW_IMAGE_NAME, this.getPreviewImageName());
    
hashMap!.put(themeData!.PREVIEW_IMAGE_PATH, this.getPreviewImagePath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = ModDomHelper.createNameValueNodes(document, ThemeData.getInstance()!.NAME, this.toHashMap())!;;
    

    let domNodeInterface: DomNodeInterface = this.getCssStyleValidation() as DomNodeInterface;;
    
node.appendChild(domNodeInterface!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

