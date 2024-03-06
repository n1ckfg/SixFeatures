import SwiftUI

struct ContentView: View {
    @State var x = 0.0
    let y = 100.0
    let s = 50.0
    let fps = 1.0 / 60.0
    
    var body: some View {
        ZStack {
            Color.gray
                .onTapGesture {
                    x = 0
                }
            
            Circle()
                .strokeBorder(.black, lineWidth: 2)
                .background(Circle().fill(.white))
                .frame(width: s, height: s)
                .position(x: x, y: y)
                .onAppear {
                    Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                        withAnimation {
                            x += 1
                        }
                    }
                }
        }
    }
}

#Preview {
    ContentView()
        .frame(width: 200, height: 200)
}
