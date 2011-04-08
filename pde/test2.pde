void setup() {
	size(400, 400);
	background(0);
	cursor(CROSS);

	fill(255, 0, 0);
	noStroke();
}

void mouseDragged() {
	arc(mouseX, mouseY, 10, 10, 0, TWO_PI);
}
