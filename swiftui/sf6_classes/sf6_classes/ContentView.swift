import SwiftUI

class Dot {
    var pos = CGPoint(x: 0.0, y: 0.0)
    var s = 50.0
    var speed = CGFloat.random(in: 1..<5)
    var target = CGPoint(x: CGFloat.random(in: 0..<640), y: CGFloat.random(in: 0..<360.0))

    var fillOrig = Color(red: 0.0, green: 0.392, blue: 1.0)
    var fillHit = Color(red: 0.0, green: 0.784, blue: 1.0)
    var fillNow = Color(red: 0.0, green: 0.0, blue: 0.0)
    
    init(){
        print("Hello World")
        fillNow = fillOrig
    }
    
    func update() {
        
    }
    
    func draw() {
        
    }
    
    func run() {
        
    }
}

struct ContentView: View {
    let numDots = 10
    //var dots = []
    //ForEach(0..<numDots, id: \.self) {
        //dots.append(Dot())
    //}
    
    @State var x = [ 100.0, 100.0, 100.0, 100.0, 100.0 ]
    @State var speed = [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
    let y = 100.0
    let s = 50.0
    let fps = 1.0 / 60.0
    @State var width = 0.0
    
    var body: some View {
        ZStack {
            Color.gray
            
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
