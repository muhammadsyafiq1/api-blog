import express from "express"
import { addPost, deletePost, getDataByCat, getPost, updatePost } from "../controllers/posts.js"

const router = express.Router()

router.get("/", getDataByCat)
router.get("/:id", getPost)
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router