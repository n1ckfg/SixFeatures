#include "ofApp.h"

void ofApp :: setup() {
	posX = 0;
	posY = 100;
	s = 50;
}

void ofApp :: update() {
	posX += 0.5;
}

void ofApp :: draw() {
	ofBackground(127);
	drawCircle();
}

void ofApp :: drawCircle() {
	ofFill();
	ofSetColor(255);
	ofEllipse(posX, posY, s, s);
	ofNoFill();
	ofSetColor(0);
	ofSetLineWidth(1);
	ofEllipse(posX, posY, s, s);
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
	posX = 0;
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
