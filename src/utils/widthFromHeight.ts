export function widthFromHeight({
	oldHeight,
	oldWidth,
	ascpectRatio = oldHeight && oldWidth ? oldWidth / oldHeight : undefined,
	newHeight,
}: {
	ascpectRatio?: number,
	newHeight: number
	oldHeight?: number
	oldWidth?: number
}) {
	if (!ascpectRatio) {
		throw new Error('You have to provide either both (oldHeight and oldWidth) or ascpectRatio!');
	}
	if (!newHeight) {
		throw new Error('You have to provide newHeight!');
	}
	return ascpectRatio * newHeight;
}
