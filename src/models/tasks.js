import knex from "../config/knex";
<<<<<<< HEAD
=======
import { EILSEQ } from "constants";
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee

const table_name = "tasks";

class Task {
<<<<<<< HEAD
  static delete(oid) {
    return knex(table_name)
      .where("oid", oid)
      .andWhere("delete", false)
      .update("delete", true)
      .then(tasks_deleted => {
        if (tasks_deleted > 0) return Task.getById(oid);
        else return [];
      })
      .catch(error => []);
  }
  static undelete(oid) {
    return knex(table_name)
      .where("oid", oid)
      .andWhere("delete", true)
      .update("delete", false)
      .then(tasks_undeleted => {
        if (tasks_undeleted > 0) return Task.getById(oid);
        else return [];
      })
      .catch(error => []);
  }

  static create(data) {
    return knex(table_name)
      .insert(data)
      .then(oid => oid)
      .catch(err => -1);
  }

  static getAll() {
    return knex
      .from(table_name)
      .select()
=======
  static getAll() {
    return knex
      .from(table_name)
      .select("oid", "title", "description")
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
      .then(results => Task.deserialize(results))
      .catch(err => err);
  }

  static getById(id) {
    return knex(table_name)
      .where("oid", id)
      .select()
<<<<<<< HEAD
      .then(results => {
        if (results.length == 0) return [];
        else return Task.deserialize(results);
      })
=======
      .then(results => Task.deserialize(results))
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
      .catch(err => err);
  }

  static undone(id) {
    return knex(table_name)
      .where("oid", id)
      .andWhere("done", true)
      .update("done", false)
      .then(tasks_updated => {
        if (tasks_updated > 0) return Task.getById(id);
        else return [];
      });
  }

  static done(id) {
    return knex(table_name)
      .where("oid", id)
      .andWhere("done", false)
      .update("done", true)
      .then(tasks_updated => {
        if (tasks_updated > 0) return Task.getById(id);
        else return [];
      });
  }

  static deserialize(json) {
<<<<<<< HEAD
    if (json.length == undefined || json.length == 0) return {};
=======
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
    return json.map(data => {
      let task = new Task();
      task.oid = data.oid ? data.oid : 0;
      task.title = data.title ? data.title : "";
<<<<<<< HEAD
      task.description = data.description ? data.description : "";
      task.done = data.done ? true : false;
      task.delete = data.delete ? true : false;
=======
      task.done = data.done ? data.done : false;
      task.delete = data.delete ? data.delete : false;
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
      return task;
    });
  }
}

export default Task;
