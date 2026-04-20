const familyRouter = (router) => {
  router.get("/family", (req, res) => {
    res.send("Hello Family!");
  });

  router.get("/family/whale", (req, res) => {
    res.send("Hello Whale HANA!");
  });

  router.get("/family/hana", (req, res) => {
    res.send("Hana");
  });
};

export default familyRouter;