#include "ofApp.h"

void ofApp :: setup() {
	posX = { 100, 100, 100, 100, 100 };
	posY = 100;
	s = 50;
	speed = { 1, 2, 3, 4, 5 };
}

void ofApp :: update() {
	for (int i = 0; i < posX.size(); i++) {
		posX[i] += speed[i];
		
		if (posX[i] > ofGetWidth() || posX[i] < 0) {
			speed[i] *= -1;
		}
	}
}

void ofApp :: draw() {
	ofBackground(127);
	for (int i = 0; i < posX.size(); i++) {
		drawCircle(posX[i], posY + (i * s));
	}
}

void ofApp :: drawCircle(float x, float y) {
	ofFill();
	ofSetColor(255);
	ofDrawEllipse(x, y, s, s);
	ofNoFill();
	ofSetColor(0);
	ofSetLineWidth(1);
	ofDrawEllipse(x, y, s, s);
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
