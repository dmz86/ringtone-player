// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RingtonePlayer",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "RingtonePlayer",
            targets: ["RingtonePlayerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "RingtonePlayerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/RingtonePlayerPlugin"),
        .testTarget(
            name: "RingtonePlayerPluginTests",
            dependencies: ["RingtonePlayerPlugin"],
            path: "ios/Tests/RingtonePlayerPluginTests")
    ]
)