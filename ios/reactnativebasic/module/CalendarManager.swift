//
//  CalendarManager.swift
//  reactnativebasic
//
//  Created by SMG on 2023/04/26.
//

import Foundation

@objc(CalendarManager)
class CalendarManager: NSObject {

  @objc(addEvent:location:date:)
  func addEvent(name: String, location: String, date: NSNumber) -> Void {
    // Date is ready to use!
    print(name, location, date)
   }
}
