import { ImageApiModel } from "./cards-item.api-model";

export const getImageApiList = (): Array<ImageApiModel> => {
	const imagesList: ImageApiModel[] = [];
	try {
		for(let i = 1; i < 11; i++) {
			imagesList.push({id: i.toString(), src: `img${i}`});
		}
		return imagesList;
	} catch (exception) {
		throw exception;
	}
};

