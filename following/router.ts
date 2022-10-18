import type {Request, Response} from 'express';
import express from 'express';
import FreetCollection from '../freet/collection';
import UserCollection from '../user/collection';
import followerFollowingCollection from './collection';
import * as userValidator from '../user/middleware';
import * as util from './util';

const router = express.Router();


/**
 * Create a user account.
 *
 * @name POST /api/users
 *
 * @param {string} username - username of user
 * @param {string} password - user's password
 * @return {UserResponse} - The created user
 * @throws {403} - If there is a user already logged in
 * @throws {409} - If username is already taken
 * @throws {400} - If password or username is not in correct format
 *
 */
 router.post(
  '/',
  [
    userValidator.isUserLoggedOut,
    userValidator.isValidUsername,
    userValidator.isUsernameNotAlreadyInUse,
    userValidator.isValidPassword
  ],
  async (req: Request, res: Response) => {
    const user = await UserCollection.addOne(req.body.username, req.body.password);
    req.session.userId = user._id.toString();
    res.status(201).json({
      message: `Your account was created successfully. You have been logged in as ${user.username}`,
      user: util.constructUserResponse(user)
    });
  }
);

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
    const user = await followerFollowingCollection.addOne(req.body.userId);
    const followerFollowing = await followerFollowingCollection.addOne(req.body.userId);

    // req.userId = followerFollowing._id.toString();
    res.status(201).json({
      message: `Your account was created successfully. You have been logged in as`,
      user: util.constructUserResponse(user)
    });
  }
);




export {router as followerFollowingRouter};
