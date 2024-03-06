import SwiftUI

struct ContentView: View {
    @State var x = 100.0
    @State var speed = 5.0
    let y = 100.0
    let s = 50.0
    let fps = 1.0 / 60.0
       
    var body: some View {
        ZStack {
            Color.gray
            
            ForEach(0...3, id: \.self) { index in
                Circle()
                    .strokeBorder(.black, lineWidth: 2)
                    .background(Circle().fill(.white))
                    .frame(width: s, height: s)
                    .position(x: x, y: y + (Double(s) * Double(index)))
                    .onAppear {
                        Timer.scheduledTimer(withTimeInterval: fps, repeats: true) { timer in
                            withAnimation(Animation.linear(duration: 0.0)) {
                                x += speed
                                
                                if x > 640 || x < 0 {
                                    speed *= -1.0
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
