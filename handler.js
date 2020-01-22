const router = require("express").Router();
const store = require("./class-store");

router.post("/", async (req, res, next) => {
  try {
    return res.status(201).json(store.create(req.body));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    return res.status(200).json(store.get());
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:key", async (req, res, next) => {
  try {
    return res.status(200).json(store.getByKey(req.params.key));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:key", async (req, res, next) => {
  try {
    let data = store.update(req.params.key, req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:key", async (req, res, next) => {
  try {
    let data = store.delete(req.params.key);
    return res.status(204).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
