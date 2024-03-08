import SwiftUI

class Dot: ObservableObject, Identifiable {
    let id = UUID()
    @Published var pos: CGPoint
    @Published var s: CGFloat
    @Published var speed: CGFloat
    @Published var target: CGPoint
    @Published var fillOrig:Color
    @Published var fillHit:Color

    init() {
        pos = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))
        s = 50.0
        speed = CGFloat.random(in: 1..<5)
        target = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))
        fillOrig = Color(red: 0.0, green: 0.392, blue: 1.0)
        fillHit = Color(red: 0.0, green: 0.784, blue: 1.0)
    }
    
    func run() {
        pos.x += speed
        
        if pos.x > 640 || pos.x < 0 {
            speed *= -1.0
        }
    }
}

class DotManager: ObservableObject {
    @Published var dots: [Dot] = []
    
    init() {
        for _ in 0..<10 {
            let dot = Dot()
            self.dots.append(dot)
        }
    }
}

struct ContentView: View {
    let fps = 1.0 / 60.0
    @StateObject var dotManager = DotManager()
 
    @StateObject var dotz = Dot()
    
    var body: some View {
        ZStack {
            Color.gray
                        
            ForEach(dotManager.dots) { dot in
                Circle()
                    .strokeBorder(.black, lineWidth: 2)
                    .background(Circle().fill(dot.fillOrig))
                    .frame(width: dot.s, height: dot.s)
                    .position(x: dotz.pos.x, y: dotz.pos.y)
                    .onAppear {
                        Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                            withAnimation(Animation.linear(duration: 0.0)) {
                                dotz.run()
                            }
                        }
                    }
            }
        }
    }
}

#Preview {
    ContentView()
        .frame(width: 640, height: 360)
}
