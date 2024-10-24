import Foundation

@objc public class Ringotone: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
