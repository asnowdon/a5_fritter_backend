import type {HydratedDocument, Schema, Types} from 'mongoose';
import type {followerFollowing} from './model';
import followerFollowingModel from './model';
import FollowingModel from './model';

/**
 * This file contains a class with functionality to interact with Following stored
 * in MongoDB, including adding, finding, updating, and deleting. Feel free to add
 * additional operations in this file.
 *
 * Note: HydratedDocument<User> is the output of the UserModel() constructor,
 * and contains all the information in User. https://mongoosejs.com/docs/typescript.html
 */
class followerFollowingCollection {
  /**
   * Add a new followerFollowing
   *
   * @param {Types.ObjectId} userId - The userId of the user
   * @return {Promise<HydratedDocument<followerFollowing>>} - The newly created followerFollowing
   */
     static async addOne(userId: Types.ObjectId): Promise<HydratedDocument<followerFollowing>> {
      const followers = new Set<Types.ObjectId>();
      const following = new Set<Types.ObjectId>();
  
      const followerFollowing = new followerFollowingModel({userId, followers, following});
      await followerFollowing.save(); // Saves user to MongoDB
      return followerFollowing;
    }

  /**
   * Add a new follower, user B follows user A
   *
   * @param {Types.ObjectId} userIdA - The userId of the user to update
   * @param {Types.ObjectId} userIdB - The userId of the new follower user 
   * @return {Promise<HydratedDocument<User>>} - The newly created user
   */
     static async addFollower(userIdA: Types.ObjectId, userIdB:  Types.ObjectId): Promise<HydratedDocument<followerFollowing>> {
      const followerFollowing =  await followerFollowingModel.findOne({_id: userIdA});
      (await followerFollowing).followers.add(userIdB);
      await followerFollowing.save(); // Saves user to MongoDB
      return followerFollowing;
    }

  /**
   * remove a follower, user B unfollows user A
   *
   * @param {Types.ObjectId} userIdA - The userId of the user to update
   * @param {Types.ObjectId} userIdB - The userId of the new follower user 
   * @return {Promise<HydratedDocument<User>>} - The newly created user
   */
   static async removeFollower(userIdA: Types.ObjectId, userIdB:  Types.ObjectId): Promise<HydratedDocument<followerFollowing>> {
    const followerFollowing =  await followerFollowingModel.findOne({_id: userIdA});
    (await followerFollowing).followers.delete(userIdB);
    await followerFollowing.save(); // Saves user to MongoDB
    return followerFollowing;
  }


  /**
   * Find a user by userId.
   *
   * @param {string} userId - The userId of the user to find
   * @return {Promise<HydratedDocument<User>> | Promise<null>} - The user with the given username, if any
   */
  static async findOneByUserId(userId: Types.ObjectId | string): Promise<HydratedDocument<followerFollowing>> {
    return followerFollowingModel.findOne({_id: userId});
  }


  /**
   * Delete a follower following from the collection.
   *
   * @param {string} userId - The userId of user to delete
   * @return {Promise<Boolean>} - true if the user has been deleted, false otherwise
   */
  static async deleteOne(userId: Types.ObjectId | string): Promise<boolean> {
    const user = await followerFollowingModel.deleteOne({_id: userId});
    return user !== null;
  }
}

export default followerFollowingCollection;
