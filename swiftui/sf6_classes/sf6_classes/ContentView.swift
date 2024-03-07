import SwiftUI

struct ContentView: View {
    struct Dot {
        @State var pos: CGPoint
        @State var s: CGFloat
        @State var speed: CGFloat
        @State var target: CGPoint
        @State var fillOrig:Color
        @State var fillHit:Color
    }

    @State var dots: [Dot] = [
        Dot(pos: CGPoint(x: 50.0, y: 50.0), s: 50.0, speed: 5.0, target: CGPoint(x: 0.0, y: 0.0), fillOrig: Color(red: 0.0, green: 0.392, blue: 1.0), fillHit: Color(red: 0.0, green: 0.784, blue: 1.0)),
        Dot(pos: CGPoint(x: 50.0, y: 50.0), s: 50.0, speed: 5.0, target: CGPoint(x: 0.0, y: 0.0), fillOrig: Color(red: 0.0, green: 0.392, blue: 1.0), fillHit: Color(red: 0.0, green: 0.784, blue: 1.0))
    ]
    
    @State var x = [ 100.0, 100.0, 100.0, 100.0, 100.0 ]
    @State var speed = [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
    let y = 100.0
    let s = 50.0
    let fps = 1.0 / 60.0
    @State var width = 0.0
   
    var body: some View {
        ZStack {
            Color.gray
            
            ForEach(0..<dots.count, id: \.self) { i in
                Circle()
                    .strokeBorder(.black, lineWidth: 2)
                    .background(Circle().fill(.white))
                    .frame(width: s, height: s)
                    .position(x: dots[i].pos.x, y: dots[i].pos.y + (CGFloat(s) * CGFloat(i)))
                    .onAppear {
                        Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                            withAnimation(Animation.linear(duration: 0.0)) {
                                dots[i].pos.x += dots[i].speed
                                
                                if dots[i].pos.x > 640 || dots[i].pos.x < 0 {
                                    dots[i].speed *= -1.0
                                }
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
