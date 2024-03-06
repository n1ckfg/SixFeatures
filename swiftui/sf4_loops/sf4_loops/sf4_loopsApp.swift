import SwiftUI

@main
struct sf4_loopsApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(width: 640, height: 360)
        }
        .windowResizability(.contentSize)
    }
}
