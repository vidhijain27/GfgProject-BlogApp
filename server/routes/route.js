import express from "express";

import { signupUser, loginUser } from "../controller/user-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
// import { createPost } from "../controller/post-controller.js";

import upload from '../../client/src/utils/upload.js';
// import CreatePost from "../../client/src/components/create/CreatePost.jsx";
// import { createPost } from "../controller/post-controller.js";

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/file/upload', uploadImage);
router.get('/file/:filename', getImage);

// router.post('/create', CreatePost);

export default router;