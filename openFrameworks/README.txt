Notes on organizing openFrameworks header files:

1. main.cpp only ever uses oF's header and the app's header.
  #include "ofMain.h"
  #include "ofApp.h"

2. ofApp.h needs oF and all its ofxAddons or other classes:
  #include "ofMain.h"
  #include "ofxAddon.h"

3. ofApp.cpp just needs its own header:
  #include "ofApp.h"

4. ofxAddon.h needs oF and any other ofxAddon or class it's using: 
  #include "ofMain.h"
  #include "otherOfxAddon.h”

5. ofxAddon.cpp just needs its header: 
  #include "ofxAddon.h"

6. ofxAddon headers that include each other must use header guards:
  #pragma once