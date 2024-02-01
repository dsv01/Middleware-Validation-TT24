//Importações para as routers
import { Router } from "express";
const router = Router();

//Importações do multer
import {photoUpload, audioUpload, videoUpload} from "../config/files";

//Importação de middleware
import {premium} from "../middlewares/premium"
import {validatorUser} from "../config/validator"

//Importação da controller
import {createUser, readUser, updateUser, destroyUser, madePost, fileOk, setPremium} from "../controllers/userController"
import {createPost, readPost, updatePost, destroyPost} from "../controllers/postController"

//Definiçõs dos arquivos de multer

//Definição das rotas do usuario
router.post("/user", validatorUser("createUser")!, createUser)
// router.post("/user", createUser)
router.get("/user/:id", readUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", destroyUser)
router.post("/madePost", madePost)


//Definição de rotas do post
router.post("/post", createPost)
router.get("/post/:id", readPost)
router.put("/post/:id", updatePost)
router.delete("/post/:id", destroyPost)

//Definição de rotas para envio de arquivos
router.post("/user/setAvatar/:id", photoUpload.single("avatarImage"), fileOk);
router.post("/user/audio/:id", premium, audioUpload.single("audio"), fileOk);
router.post("/user/video/:id", premium, videoUpload.single("video"), fileOk);

//Definição para as rotas relacionadas as caracteristicas premium do usuario
router.get("/user/setPremium/:id", setPremium);

export default router;