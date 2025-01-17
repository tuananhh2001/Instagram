import { diskStorage } from "multer";
import { extname } from "path";

export const storage = diskStorage({
    destination: "./public/images",
    filename: (req, file, callback) => {
        callback(null, generateFilename(file));
    }
});

function generateFilename(file) {
    return `${file.originalname}`;
}
