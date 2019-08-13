#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "ARComponentManager.h"
#import "AREventsManager.h"
#import "RCTARView.h"
#import "RCTARViewManager.h"
#import "RCTConvert+Components.h"
#import "RNMagicScript-Bridging-Header.h"

FOUNDATION_EXPORT double RNMagicScriptVersionNumber;
FOUNDATION_EXPORT const unsigned char RNMagicScriptVersionString[];

