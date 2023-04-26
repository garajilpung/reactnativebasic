//
//  RCTCalendarModule.m
//  reactnativebasic
//
//  Created by SMG on 2023/04/26.
//

#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString*) location) {
  RCTLogInfo(@"Pretending to crate an event %@ at %@", name, location);
  NSLog(@"%@ %@", name, location);
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName) {
  return [[UIDevice currentDevice] name];
}
@end
