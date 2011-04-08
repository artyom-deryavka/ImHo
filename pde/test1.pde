int barWidth = 5;
int[] hue;

void setup() {
	size(400, 400);
	noStroke();
	cursor(CROSS);

	colorMode(HSB, 360, height, height);
	hue = new int[width / barWidth];
}

void mouseDragged() {
	int j = 0;
	for (int i = 0; i <= width - barWidth; i += barWidth) {
		if (mouseX > i && mouseX < i + barWidth) {
			hue[j] = mouseY;
		}
		fill(hue[j], height / 1.2, height / 1.2);
		rect(i, 0, barWidth, height);
		j++;
	}
}
