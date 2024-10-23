import Foundation

@objc public class RingtonePlayer: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
