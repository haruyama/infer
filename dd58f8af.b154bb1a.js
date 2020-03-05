(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var i=t(1),a=t(9),o=(t(0),t(177)),r={id:"linters-bug-types",title:"Linters bug types"},c={id:"linters-bug-types",title:"Linters bug types",description:"Here is an overview of the linter checks we provide in Infer:",source:"@site/docs/03-linter-bug-types.md",permalink:"/docs/linters-bug-types",sidebar:"docs",previous:{title:"Eradicate warnings",permalink:"/docs/eradicate-warnings"},next:{title:"Building checkers with the Infer.AI framework",permalink:"/docs/absint-framework"}},l=[{value:"Assign pointer warning",id:"assign-pointer-warning",children:[]},{value:"Bad pointer comparison",id:"bad-pointer-comparison",children:[]},{value:"C++ reference captured in Objective-C block",id:"c-reference-captured-in-objective-c-block",children:[]},{value:"Direct atomic property access",id:"direct-atomic-property-access",children:[]},{value:"Global variable initialized with function or method call",id:"global-variable-initialized-with-function-or-method-call",children:[]},{value:"Registered observer being deallocated",id:"registered-observer-being-deallocated",children:[]},{value:"Strong delegate warning",id:"strong-delegate-warning",children:[]},{value:"Unavailable api in supported ios sdk",id:"unavailable-api-in-supported-ios-sdk",children:[]},{value:"Pointer To const Objective-C Class",id:"pointer-to-const-objective-c-class",children:[]},{value:"Objective-C Weak Property has Custom Setter",id:"objective-c-weak-property-has-custom-setter",children:[]},{value:"Component factory function",id:"component-factory-function",children:[]},{value:"Component initializer with side effects",id:"component-initializer-with-side-effects",children:[]},{value:"Component with multiple factory methods",id:"component-with-multiple-factory-methods",children:[]},{value:"Component with unconventional superclass",id:"component-with-unconventional-superclass",children:[]},{value:"Mutable local variable in component file",id:"mutable-local-variable-in-component-file",children:[]}],s={rightToc:l},p="wrapper";function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here is an overview of the linter checks we provide in Infer:"),Object(o.b)("h2",{id:"assign-pointer-warning"},"Assign pointer warning"),Object(o.b)("p",null,"This check fires when a pointer to an Obj-C object is tagged with an ",Object(o.b)("inlineCode",{parentName:"p"},"assign"),"\nproperty (similar to the ",Object(o.b)("inlineCode",{parentName:"p"},"-Warc-unsafe-retained-assign")," compiler flag). Not\nholding a strong reference to the object makes it easy to accidentally create\nand use a dangling pointer."),Object(o.b)("h2",{id:"bad-pointer-comparison"},"Bad pointer comparison"),Object(o.b)("p",null,"Infer reports these warnings in Objective-C when a boxed primitive type such as\n",Object(o.b)("inlineCode",{parentName:"p"},"NSNumber *")," is coerced to a boolean in a comparison. For example, consider the\ncode"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"void foo(NSNumber * n) {\n  if (n) ...\n")),Object(o.b)("p",null,"The branch in the above code will be taken when the pointer ",Object(o.b)("inlineCode",{parentName:"p"},"n")," is non-",Object(o.b)("inlineCode",{parentName:"p"},"nil"),",\nbut the programmer might have actually wanted the branch to be taken when the\ninteger pointed to by ",Object(o.b)("inlineCode",{parentName:"p"},"n")," is nonzero (e.g., she may have meant to call an\naccessor like ",Object(o.b)("inlineCode",{parentName:"p"},"[n intValue]")," instead). Infer will ask the programmer explicitly\ncompare ",Object(o.b)("inlineCode",{parentName:"p"},"n")," to ",Object(o.b)("inlineCode",{parentName:"p"},"nil")," or call an accessor to clarify her intention."),Object(o.b)("h2",{id:"c-reference-captured-in-objective-c-block"},"C++ reference captured in Objective-C block"),Object(o.b)("p",null,"With this check, Infer detects C++ references captured in a block. Doing this is\nalmost always wrong. The reason is that C++ references are not managed pointers\n(like ARC pointers) and so the referent is likely to be gone by the time the\nblock gets executed. One solution is to do a local copy of the reference and\npass that to the block. Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"(int &) v;\n...\nconst int copied_v = v;\n^{\n// use copied_v not v\n};\n")),Object(o.b)("h2",{id:"direct-atomic-property-access"},"Direct atomic property access"),Object(o.b)("p",null,"This check warns you when you are accessing an atomic property directly with an\nivar. This makes the atomic property not atomic anymore. So potentially you may\nget a race condition."),Object(o.b)("p",null,"To fix the problem you need to access properties with their getter or setter."),Object(o.b)("h2",{id:"global-variable-initialized-with-function-or-method-call"},"Global variable initialized with function or method call"),Object(o.b)("p",null,"This checker warns you when the initialization of global variable contain a\nmethod or function call. The warning wants to make you aware that some functions\nare expensive. As the global variables are initialized before main() is called,\nthese initializations can slow down the start-up time of an app."),Object(o.b)("h2",{id:"registered-observer-being-deallocated"},"Registered observer being deallocated"),Object(o.b)("p",null,"Objects register with a notification center to receive notifications. This check\nwarns you when an object is registered as observer of a NSNotificationCenter but\nit is never unregistered. This is problematic as if the object is not\nunregistered the notification center can still send notification even after the\nobject has been deallocated. In that case we would get a crash."),Object(o.b)("h2",{id:"strong-delegate-warning"},"Strong delegate warning"),Object(o.b)("p",null,"This check warns you when you have a property called delegate or variations\nthereof which is declared strong. The idea is that delegates should generally be\nweak, otherwise this may cause retain cycles."),Object(o.b)("h2",{id:"unavailable-api-in-supported-ios-sdk"},"Unavailable api in supported ios sdk"),Object(o.b)("p",null,"This checks warns you when you are using an API (constant, method call, etc.)\nthat is only defined in a version higher than the version that you support. To\nenable this check, pass to Infer the option\n",Object(o.b)("inlineCode",{parentName:"p"},"--iphoneos-target-sdk-version version"),". Calling an undefined API will lead to a\ncrash in the app. To fix this, you can choose a different API or use it inside\nan if, as in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"if ([UIFont respondsToSelector:@selector(systemFontOfSize:weight:)]) {\n  font = [UIFont systemFontOfSize:size weight:0];\n}\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"if (kCFCoreFoundationVersionNumber >= kCFCoreFoundationVersionNumber_iOS_9_0) {\n  font = [UIFont systemFontOfSize:size weight:0];\n}\n")),Object(o.b)("h2",{id:"pointer-to-const-objective-c-class"},"Pointer To const Objective-C Class"),Object(o.b)("p",null,"In Objective-C, ",Object(o.b)("inlineCode",{parentName:"p"},"const Class *")," represents a mutable pointer pointing to an\nObjective-C class where the ivars cannot be changed. More useful is\n",Object(o.b)("inlineCode",{parentName:"p"},"Class *const")," instead, meaning the destination of the pointer cannot be\nchanged."),Object(o.b)("h2",{id:"objective-c-weak-property-has-custom-setter"},"Objective-C Weak Property has Custom Setter"),Object(o.b)("p",null,"This check warns you when you have a custom setter for a weak property. When\ncompiled with Automatic Reference Counting (ARC, ",Object(o.b)("inlineCode",{parentName:"p"},"-fobj-arc"),") ARC may set the\nproperty to ",Object(o.b)("inlineCode",{parentName:"p"},"nil")," without invoking the setter, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'#import <Foundation/Foundation.h>\n\n@interface Employee : NSObject {\n  NSString* _name;\n  __weak Employee* _manager;\n}\n-(id)initWithName:(NSString*)name;\n@property(atomic, weak) Employee* manager;\n-(void)report;\n@end\n\n@implementation Employee\n\n-(id)initWithName:(NSString*)name {\n  _name = name;\n  return self;\n}\n\n-(NSString*)description {\n  return _name;\n}\n\n-(void)report {\n  NSLog(@"I work for %@", _manager);\n}\n\n-(Employee*)manager {\n  return _manager;\n}\n\n// DON\'T do this; ARC will not call this when setting _manager to nil.\n-(void)setManager:(Employee*)newManager {\n  NSLog(@"Meet the new boss...");\n  _manager = newManager;\n}\n\n@end\n\nint main(int argc, char *argv[])\n{\n  Employee* bob = [[Employee alloc] initWithName:@"Bob"];\n  Employee* sue = [[Employee alloc] initWithName:@"Sue"];\n  bob.manager = sue;\n  [bob report];\n  sue = nil;\n  [bob report];\n  return 0;\n}\n')),Object(o.b)("p",null,"This prints:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"Meet the new boss...\nI work for Sue\nI work for (null)\n")),Object(o.b)("p",null,"Note that the custom setter was only invoked once."),Object(o.b)("h2",{id:"component-factory-function"},"Component factory function"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://componentkit.org/docs/break-out-composites"}),"Doc in ComponentKit page")),Object(o.b)("h2",{id:"component-initializer-with-side-effects"},"Component initializer with side effects"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://componentkit.org/docs/no-side-effects"}),"Doc in ComponentKit page")),Object(o.b)("h2",{id:"component-with-multiple-factory-methods"},"Component with multiple factory methods"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://componentkit.org/docs/avoid-overrides"}),"Doc in ComponentKit page")),Object(o.b)("h2",{id:"component-with-unconventional-superclass"},"Component with unconventional superclass"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://componentkit.org/docs/never-subclass-components"}),"Doc in ComponentKit page")),Object(o.b)("h2",{id:"mutable-local-variable-in-component-file"},"Mutable local variable in component file"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://componentkit.org/docs/avoid-local-variables"}),"Doc in ComponentKit page")))}b.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return b}));var i=t(0),a=t.n(i),o=a.a.createContext({}),r=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=r(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===n.indexOf(i)&&(t[i]=e[i]);return t}(e,["components","mdxType","originalType","parentName"]),p=r(t),b=i,d=p[c+"."+b]||p[b]||s[b]||o;return t?a.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:i,r[1]=c;for(var b=2;b<o;b++)r[b]=t[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);