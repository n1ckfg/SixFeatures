import SwiftUI

struct ContentView: View {
    @State var x = [ 100.0, 100.0, 100.0, 100.0, 100.0 ]
    @State var speed = [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
    let y = 100.0
    let s = 50.0
    let fps = 1.0 / 60.0
    
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
