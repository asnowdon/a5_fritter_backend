import type {Request, Response} from 'express';
import express from 'express';
import FreetCollection from '../freet/collection';
import UserCollection from '../user/collection';
import followerFollowingCollection from './collection';
import * as userValidator from '../user/middleware';
import * as util from './util';

const router = express.Router();



/**
 * Create a follower following state.
 *
 * @name POST /api/followerfollowing
 *
 * @param {Types.ObjectId} userId - The userId of the new followerfollowing 
 * @return {followerFollowingResponse} - The created followerfollowing
 * @throws {403} - If userId is invalid
 *
 */
router.post(
  '/',
  [
    userValidator.isUsernameNotAlreadyInUse
  ],
  async (req: Request, res: Response) => {
    // const user = await followerFollowingCollection.addOne(req.body.userId);
    const followerFollowing = await followerFollowingCollection.addOne(req.body.userId);

    // req.userId = followerFollowing._id.toString();
    res.status(201).json({
      message: `Your followerFollowing has been created successfully`,
      followerFollowing: followerFollowing
    });
  }
);




export {router as followerFollowingRouter};
