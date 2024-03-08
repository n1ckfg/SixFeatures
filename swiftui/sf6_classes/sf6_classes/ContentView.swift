import SwiftUI

public class Dot: ObservableObject, Identifiable {
    public let id = UUID()
    @Published var pos: CGPoint
    @Published var s: CGFloat
    @Published var speed: CGFloat
    @Published var target: CGPoint
    @Published var fillOrig:Color
    @Published var fillHit:Color

    init() {
        self.pos = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))
        self.s = 50.0
        self.speed = CGFloat.random(in: 1..<5)
        self.target = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))
        self.fillOrig = Color(red: 0.0, green: 0.392, blue: 1.0)
        self.fillHit = Color(red: 0.0, green: 0.784, blue: 1.0)
    }
    
    public func run() {
        self.pos.x += 1.0
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
    @StateObject private var dotManager = DotManager()

    var body: some View {
        ZStack {
            Color.gray
                        
            ForEach(dotManager.dots) { dot in
                Circle()
                    .strokeBorder(.black, lineWidth: 2)
                    .background(Circle().fill(dot.fillOrig))
                    .frame(width: dot.s, height: dot.s)
                    .position(x: dot.pos.x, y: dot.pos.y)
                    .onAppear {
                        Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                            withAnimation(Animation.linear(duration: 0.0)) {
                                dot.run()
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
