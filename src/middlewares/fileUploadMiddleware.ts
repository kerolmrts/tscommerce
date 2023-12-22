import multer from 'multer';
import path from 'path';

const storage= multer.diskStorage({ //como o arquivo será nomeado
    destination: (req, file, cb) =>{
        cb (null, 'uploads/') //pasta que irá receber os arquivos
        },
        filename: (req, file, cb) =>{
            const filename= Date.now() + path.extname(file.originalname)
            cb (null, filename)
        }
        })

        const fileUpload= multer({storage})

        export default fileUpload;