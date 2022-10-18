import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';


/**
 * This file defines the properties stored in a followerFollowing
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for followerFollowing on the backend
export type followerFollowing = {
  userId: Types.ObjectId;
  followers: Set<Types.ObjectId>;
  following: Set<User>;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Users stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const followerFollowingSchema = new Schema({
  // The user's id
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  // The set of follower of the user
  followers: {
    type: Set<Types.ObjectId>,
    required: true
  },
  // The set of following of the user
  following: {
    type: Set<User>,
    required: true
  }
});

const followerFollowingModel = model<followerFollowing>('followerFollowing', followerFollowingSchema);
export default followerFollowingModel;

// const UserModel = model<User>('User', UserSchema);
// export default UserModel;
