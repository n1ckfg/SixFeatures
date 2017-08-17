#include "ofApp.h"

void ofApp::setup() {
	for (int i = 0; i < numDots; i++) {
		dots.push_back(Dot(100, 100));
	}
}

void ofApp :: update() {
	//
}

void ofApp :: draw() {
	ofBackground(127);
	for (int i = 0; i < dots.size(); i++) {
		dots[i].run();
	}
}

//--------------------------------------------------------------
void ofApp :: keyPressed(int key) {
	//
}

void ofApp :: keyReleased(int key) {
	//
}

void ofApp :: mouseMoved(int x, int y) {
	//
}

void ofApp :: mouseDragged(int x, int y, int button) {
	//
}

void ofApp :: mousePressed(int x, int y, int button) {
	//
}

void ofApp :: mouseReleased(int x, int y, int button) {
	//
}

void ofApp :: mouseEntered(int x, int y) {
	//
}

void ofApp :: mouseExited(int x, int y) {
	//
}

void ofApp :: windowResized(int w, int h) {
	//
}

void ofApp :: gotMessage(ofMessage msg) {
	//
}

void ofApp :: dragEvent(ofDragInfo dragInfo) { 
	//
}
