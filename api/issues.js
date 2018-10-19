const express = require('express');
const issuesRouter = express.Router({mergeParams: true});


issuesRouter.get('/', (req, res, next) => {
  const sql = `SELECT * FROM Issues WHERE Issue.seriesId = $seriesId`;
  const values = {
    $seriesId : req.params.seriesId
  }
  db.all(sql, values, 
  (error, issues) => {
    if(error) {
      next(error);
    } else {
      res.status(200).json({issues: issues});
    }
  });
});


module.exports = issuesRouter;
