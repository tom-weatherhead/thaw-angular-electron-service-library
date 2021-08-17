// angular-electron/src/app/services/file.service.ts

/*
import { Injectable } from '@angular/core';

import { createFileIOManager, IThAWImage } from 'thaw-image-processing.ts';

import { ElectronService } from '../electron/electron.service';

// interface IElectronOffscreenImage {
// 	width: number;
// 	height: number;
// 	data?: Uint8ClampedArray;
// }

@Injectable({
	providedIn: 'root'
})
export class FileService {
	constructor(private electronService: ElectronService) {}

	// interface ImageData is defined in node_modules/typescript/lib/lib.dom.d.ts line 9552

	// interface ImageData {
	// 	readonly width: number;
	// 	readonly height: number;
	// 	readonly data: Uint8ClampedArray;
	// }

	// This method creates an offscreen image:

	// public async loadImage(filePath: string): Promise<ImageData> {
	// 	if (!this.electronService.isAvailable) {
	// 		throw new Error(
	// 			'FileService.loadJpegImageFromFile() : Electron is unavailable'
	// 		);
	// 	}

	// 	const jpegData = await this.electronService.fs.promises.readFile(
	// 		filePath
	// 	);
	// 	// ... or use fs.readFileSync()

	// 	const decodedData = decode(jpegData);

	// 	return {
	// 		width: decodedData.width,
	// 		height: decodedData.height,
	// 		data: Uint8ClampedArray.from(decodedData.data)
	// 	};
	// }

	public async loadImage(filePath: string): Promise<IThAWImage> {
		if (!this.electronService.isAvailable) {
			throw new Error(
				'FileService.loadImage() : Electron is unavailable'
			);
		}

		const fileManager = createFileIOManager(this.electronService.fs);

		return fileManager.load(filePath);
	}
}
 */
