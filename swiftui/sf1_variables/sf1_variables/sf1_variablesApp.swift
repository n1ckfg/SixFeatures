import SwiftUI

@main
struct sf1_variablesApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(width: 200, height: 200)
                .background(.gray)
        }
        .windowResizability(.contentSize)
    }
}
