#pragma once
#include "ofMain.h"

class Dot {

	public:
		Dot(float x, float y);
		
		void update();
		void draw(float x, float y);
		void run();

		ofVec2f pos;
		ofVec2f target;
		float s;
		float speed;
		ofColor fillOrig;
		ofColor fillHit;
		ofColor fillNow;

};