import express from 'express';
const router =express.Router();
import *  as  data from '../controllers/FormQuery.js'
import *  as  bata from '../controllers/FormCreate.js'

//second page
router.get('/sec',data.Second)
router.get('/overview/:id',data.OverView)
router.get('/fees/:id',data.Fees)
router.get('/course/:id',data.Course)
router.get('/cutoff/:id/:year/:cate',data.Cutoff)




//posting thing are here
router.post('/create/college',bata.College)
router.post('/create/course',bata.Course)
router.post('/create/fess',bata.Fess)
router.post('/create/cutoff',bata.Cutoff)

export default router;