const express=require('express');
const router=express.Router();
const controller=require('../controller/Cmain')

router.get('/', controller.main)
router.get('/players',controller.getAllPlayer)
router.get('/players/playerId', controller.getPlayer)

router.post('/players', controller.postPlayer)
router.patch('/players/:playerId/team', controller.patchPlayer)
router.delete('/players:playerId', controller.deletePlayer)


//get/teams
router.get('/teams', controller.getTeam)

//get/teams/teamId
router.get("/teams/:teamId", controller.getTeam)

//get/teams/teamId/players
router.get("/teams/:teamId/players", controller.getTeamPlayers)

router.get('/teamgame', controller.getAllGame)

module.exports=router;