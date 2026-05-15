import UIAbilityContext from '@ohos.app.ability.UIAbility';
import { Uri } from "../net/Uri";
import { Context } from "@kit.AbilityKit";

/*actual*/ export class Intent
{
  static FLAG_ACTIVITY_MULTIPLE_TASK: undefined;
  static FLAG_ACTIVITY_NEW_TASK: undefined;
  static ACTION_SEND: any;
  static EXTRA_EMAIL: string;
  static EXTRA_TEXT: string;
  static EXTRA_CC: string;
  static EXTRA_SUBJECT: string;

  private action: string = '';
  private uri: Uri | null = null;
  private packageContext: UIAbilityContext | null = null;
  private extras: Map<string, any> = new Map();

  constructor();
  constructor(intent: Intent);
  constructor(action: string);
  constructor(action: string, uri: Uri);
  constructor(packageContext: UIAbilityContext, clazz: new () => any);
  constructor(action: string, uri: Uri, packageContext: UIAbilityContext, clazz: new () => any);
  constructor(
    actionOrIntentOrContext?: string | Intent | UIAbilityContext,
    uriOrClass?: Uri | any,
    packageContext?: UIAbilityContext,
    clazz?: any
  ) {
    if (!actionOrIntentOrContext) {
      // No-arg constructor
      return;
    }
    
    if (actionOrIntentOrContext instanceof Intent) {
      // Copy constructor
      this.action = actionOrIntentOrContext.action;
      this.uri = actionOrIntentOrContext.uri;
      this.packageContext = actionOrIntentOrContext.packageContext;
      this.extras = new Map(actionOrIntentOrContext.extras);
      return;
    }
    
    if (typeof actionOrIntentOrContext === 'string') {
      // Action or (action, uri) constructor
      this.action = actionOrIntentOrContext;
      if (uriOrClass instanceof Uri) {
        this.uri = uriOrClass;
      }
      if (packageContext && clazz) {
        this.packageContext = packageContext;
      }
      return;
    }
    
    // packageContext + clazz constructor
    if (actionOrIntentOrContext && typeof actionOrIntentOrContext === 'object') {
      this.packageContext = actionOrIntentOrContext as UIAbilityContext;
    }
  }

  setFlags(FLAG_ACTIVITY_NEW_TASK: undefined) {
    return this;
  }

  setType(APPLICATION_OCTET_STREAM: string) {
    return this;
  }
  
  putExtra(name: string, value: any) {
    this.extras.set(name, value);
    return this;
  }

  getExtras(): import("../os/Bundle").Bundle {
    throw new Error('Method not implemented.');
  }

  getAction(): string {
    return this.action;
  }

  getUri(): Uri | null {
    return this.uri;
  }

  getPackageContext(): UIAbilityContext | null {
    return this.packageContext;
  }

  getExtra(name: string, defaultValue?: any): any {
    return this.extras.get(name) ?? defaultValue;
  }
    
}