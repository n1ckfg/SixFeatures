#include "Dot.h"

Dot :: Dot(float x, float y) {
	pos = ofVec2f(100, 100);
	target = ofVec2f(ofGetWidth(), ofRandom(ofGetHeight()));
	s = 50;
	speed = ofRandom(1, 5);
	fillOrig = ofColor(0, 100, 255);
	fillHit = ofColor(0, 200, 255);
	fillNow = fillOrig;
}

void Dot :: update() {
	pos.x = ofLerp(pos.x, target.x, 0.005 * speed);
	pos.y = ofLerp(pos.y, target.y, 0.005 * speed);

	if ((target.x > 0 && pos.x > ofGetWidth() - (s / 2)) || (target.x < 0 && pos.x < -(s / 2))) {
		target.x *= -1;
		target.y = ofRandom(ofGetHeight());
	}

	if (target.x < 0) {
		fillNow = fillHit;
	} else {
		fillNow = fillOrig;
	}
}

void Dot :: draw(float x, float y) {
	ofFill();
	ofSetColor(fillNow);
	ofEllipse(x, y, s, s);
	ofNoFill();
	ofSetColor(0);
	ofSetLineWidth(1);
	ofEllipse(x, y, s, s);
}

void Dot :: run() {
	update();
	draw(pos.x, pos.y);
}
