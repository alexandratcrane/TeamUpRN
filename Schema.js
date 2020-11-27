import { ObjectId } from "bson";

class Task {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    name,
    partition,
    status = Task.STATUS_OPEN,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this.name = id;
	this.mainRole = mainRole;
    this.firstName = firstName;
    this.status = status;
  }

  static STATUS_OPEN = "Open";
  static STATUS_IN_PROGRESS = "InProgress";
  static STATUS_COMPLETE = "Complete";
  
  // TODO: implement schema
  static schema = {
  name: "User",
  properties: {
    Username: "string", 
    role: "string", /* main roles can be support, entry fragger, flex */
	rank: "string",
    status: "string",
  },
  primaryKey: "name",
};

export { Task };
