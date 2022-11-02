import {Collection, HydratedDocument} from 'mongoose';
import moment from 'moment';
import type {Freet, PopulatedFreet} from '../freet/model';
import type {Feed} from '../feed/model';
import FreetCollection from '../freet/collection';

// Update this if you add a property to the Freet type!
type FreetResponse = {
  _id: string;
  author: string;
  dateCreated: string;
  content: string;
  dateModified: string;
};

/**
 * Encode a date as an unambiguous string
 *
 * @param {Date} date - A date object
 * @returns {string} - formatted date as string
 */
const formatDate = (date: Date): string => moment(date).format('MMMM Do YYYY, h:mm:ss a');

/**
 * Transform a raw Freet object from the database into an object
 * with all the information needed by the frontend
 *
 * @param {HydratedDocument<Freet>} freet - A freet
 * @returns {FreetResponse} - The freet object formatted for the frontend
 */
const constructFreetResponse = (freet: HydratedDocument<Freet>): FreetResponse => {
  const freetCopy: PopulatedFreet = {
    ...freet.toObject({
      versionKey: false // Cosmetics; prevents returning of __v property
    })
  };
   const {username} = freetCopy.authorId;
  delete freetCopy.authorId;
  return {
    ...freetCopy,
    _id: freetCopy._id.toString(),
    author: username,
    dateCreated: formatDate(freet.dateCreated),
    dateModified: formatDate(freet.dateModified)
  };
};

/**
 * Transform a raw Freet object from the database into an object
 * with all the information needed by the frontend
 *
 * @param {HydratedDocument<Feed>} feed - A feed
 * @returns {FreetResponse} - The freet object formatted for the frontend
 */
 const constructFeedResponse = async (feed: HydratedDocument<Feed>): Promise<FreetResponse> => {
  const freetId = feed.postId;
  // console.log("freetID");
  // console.log(freetId);
  const freet = await FreetCollection.findOne(freetId);
  // console.log("FREEEEET");
  // console.log(freet);
  // console.log("RESPONSE");
  // console.log(constructFreetResponse(freet));
  return constructFreetResponse(freet);
};

export {
  constructFreetResponse,
  constructFeedResponse
};