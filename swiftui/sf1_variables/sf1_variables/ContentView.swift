import SwiftUI

struct ContentView: View {
    let x = 100.0
    let y = 100.0
    let s = 50.0
    
    var body: some View {
        ZStack {
            Color.gray
            
            Circle()
                .strokeBorder(.black, lineWidth: 2)
                .background(Circle().fill(.white))
                .frame(width: s, height: s)
                .position(x: x, y: y)
        }
    }
}

#Preview {
    ContentView()
        .frame(width: 200, height: 200)
}
