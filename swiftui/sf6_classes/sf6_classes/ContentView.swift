import SwiftUI

public class Dot {
    var pos: CGPoint
    var s: CGFloat
    var speed: CGFloat
    var target: CGPoint
    var fillOrig:Color
    var fillHit:Color
    var fillNow:Color
    var fps:CGFloat
    
    init(s: CGFloat){
        self.target = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))
        self.speed = CGFloat.random(in: 1..<5)
        self.s = s
        self.pos = CGPoint(x: 0.0, y: 0.0)
        self.fillOrig = Color(red: 0.0, green: 0.392, blue: 1.0)
        self.fillHit = Color(red: 0.0, green: 0.784, blue: 1.0)
        self.fillNow = self.fillOrig
        self.fps = 1.0 / 60.0
    }
    
    func test() {
        //
    }
    
    func run() {
        Circle()
            .strokeBorder(.black, lineWidth: 2)
            .background(Circle().fill(.white))
            .frame(width: self.s, height: self.s)
            .position(x: self.pos.x, y: self.pos.y)
            .onAppear {
                Timer.scheduledTimer(withTimeInterval: self.fps, repeats: true) { timer in
                    withAnimation(Animation.linear(duration: 0.0)) {
                        self.pos.x += self.speed
                        
                        if self.pos.x > 640 || self.pos.x < 0 {
                            self.speed *= -1.0
                        }
                    }
                }
            }
    }
}

struct ContentView: View {
    let numDots = 10
    @State var dots: [Dot] = []
    
    @State var x = [ 100.0, 100.0, 100.0, 100.0, 100.0 ]
    @State var speed = [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
    let y = 100.0
    let s = 50.0
    let fps = 1.0 / 60.0
    @State var width = 0.0
   
    var body: some View {
        let dot = Dot(s: 50.0)
        dots.append(dot)

        ZStack {
            Color.gray
            
            dots[0].run()
            
            ForEach(0..<x.count, id: \.self) { i in
                Circle()
                    .strokeBorder(.black, lineWidth: 2)
                    .background(Circle().fill(.white))
                    .frame(width: s, height: s)
                    .position(x: x[i], y: y + (CGFloat(s) * CGFloat(i)))
                    .onAppear {
                        Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                            withAnimation(Animation.linear(duration: 0.0)) {
                                x[i] += speed[i]
                                
                                if x[i] > 640 || x[i] < 0 {
                                    speed[i] *= -1.0
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
