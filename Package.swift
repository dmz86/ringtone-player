// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RingtoneController",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "RingtoneController",
            targets: ["RingotonePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "RingotonePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/RingotonePlugin"),
        .testTarget(
            name: "RingotonePluginTests",
            dependencies: ["RingotonePlugin"],
            path: "ios/Tests/RingotonePluginTests")
    ]
)