import SwiftUI

struct Dot: Identifiable {
    let id = UUID()
    var pos: CGPoint
    var s: CGFloat
    var speed: CGFloat
    var target: CGPoint
    var fillOrig: Color
    var fillHit: Color
    var fillNow: Color

    init() {
        pos = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))
        s = 50.0
        speed = CGFloat.random(in: 1..<5)
        target = CGPoint(x: 640.0, y: CGFloat.random(in: 0..<360.0))
        fillOrig = Color(red: 0.0, green: 0.392, blue: 1.0)
        fillHit = Color(red: 0.0, green: 0.784, blue: 1.0)
        fillNow = Color(red: 0.0, green: 0.0, blue: 0.0)
    }
    
    func lerp(start: CGFloat, end: CGFloat, fraction: CGFloat) -> CGFloat {
        return start + fraction * (end - start)
    }
    
    mutating func run() {
        pos.x = lerp(start: pos.x, end: target.x, fraction: 0.005 * speed)
        pos.y = lerp(start: pos.y, end: target.y, fraction: 0.005 * speed)

        if ((target.x > 0 && pos.x > 640.0 - (s/2)) || (target.x < 0 && pos.x < -(s/2))) {
            target.x *= -1.0
          target.y = CGFloat.random(in: 0..<360.0)
        }
        
        if target.x < 0 {
          fillNow = fillHit;
        } else {
          fillNow = fillOrig;
        }
    }
}

struct DotManager {
    var dots: [Dot] = []
    
    init() {
        for _ in 0..<10 {
            @State var dot = Dot()
            dots.append(dot)
        }
    }
}

struct ContentView: View {
    let fps = 1.0 / 60.0
    //@State var dotManager = DotManager()
    @State var dots: [Dot] = [Dot(), Dot()]

    //@State var dot = Dot()
    
    var body: some View {
        ZStack {
            Color.gray
                        
            ForEach(dots.indices, id: \.self) { i in
            Circle()
                .strokeBorder(.black, lineWidth: 2)
                .background(Circle().fill(dots[i].fillNow))
                .frame(width: dots[i].s, height: dots[i].s)
                .position(x: dots[i].pos.x, y: dots[i].pos.y)
                .onAppear {
                    Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                        withAnimation(Animation.linear(duration: 0.0)) {
                            dots[i].run()
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
