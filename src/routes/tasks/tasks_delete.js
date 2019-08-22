<<<<<<< HEAD
import { Task } from "../../models";

const response_message_builder = (result, task_id) => {
  console.log(result);
  if (result.length == undefined || result.length == 0) {
    return {
=======
import knex from "../../config/knex";

const table_name = "tasks";

const delete_response = (result, task_id) => {
  let response = { data: ":D" };
  if (result == 1) {
    response = {
      status: "200",
      data: "Gentileza apagada",
      links: [
        {
          rel: `/linkrels/tasks/${task_id}/undelete`,
          uri: `/tasks/${task_id}/undelete`
        }
      ]
    };
  } else {
    response = {
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
      status: "400",
      data: "No data to delete"
    };
  }
<<<<<<< HEAD
  return {
    status: "200",
    data: {
      oid: result[0].oid,
      title: result[0].title,
      description: result[0].description
    },
    links: [
      {
        rel: `/linkrels/tasks/${task_id}/undelete`,
        uri: `/tasks/${task_id}/undelete`
      }
    ]
  };
=======
  return response;
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
};

const delete_response_code = result => (result == 1 ? 200 : 400);

export default {
  method: "DELETE",
  path: "/tasks/{task_id}",
  handler: (request, reply) =>
<<<<<<< HEAD
    Task.delete(request.params.task_id).then(tasks =>
      reply
        .response(response_message_builder(tasks, request.params.task_id))
        .code(delete_response_code(tasks))
    )
=======
    knex(table_name)
      .where("oid", request.params.task_id)
      .del()
      .then(results =>
        reply
          .response(delete_response(results, request.params.task_id))
          .code(delete_response_code(results))
      )
      .catch(error => {
        reply.response(delete_response(0, 0)).code(400);
      })
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
};
