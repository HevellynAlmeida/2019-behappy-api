import Joi from "@hapi/joi";

<<<<<<< HEAD
import Task from "../../models/tasks";

const response_message_builder = (data, oid) => {
  return {
    status: 201,
    task: {
      oid: oid,
      title: data.title,
      description: data.description
    },
    links: [
      {
        rel: `/linkrels/tasks/${oid}/show`,
        uri: `/tasks/${oid}`
      },
      {
        rel: `/linkrels/tasks/${oid}/delete`,
        uri: `/tasks/${oid}`
      },
      {
        rel: `/linkrels/tasks/${oid}/done`,
        uri: `/tasks/${oid}/done`
      }
    ]
  };
};
=======
import knex from "../../config/knex";
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee

export default {
  method: "POST",
  path: "/tasks",
<<<<<<< HEAD
  handler: (request, reply) => {
    return Task.create(request.payload).then(oid =>
      reply.response(response_message_builder(request.payload, oid)).code(201)
    );
  },
=======
  handler: (request, reply) =>
    knex("tasks")
      .insert(request.payload)
      .then(oid =>
        reply
          .response({
            status: 201,
            task: {
              oid: oid[0],
              title: request.payload.title,
              description: request.payload.description
            },
            links: [
              {
                rel: `/linkrels/tasks/${oid[0]}/show`,
                uri: `/tasks/${oid[0]}`
              },
              {
                rel: `/linkrels/tasks/${oid[0]}/delete`,
                uri: `/tasks/${oid[0]}`
              },
              {
                rel: `/linkrels/tasks/${oid[0]}/done`,
                uri: `/tasks/${oid[0]}/done`
              }
            ]
          })
          .code(201)
      )
      .catch(err => reply.response(err)),
>>>>>>> 5093e736af733b3c5e66f02655632471b54b2eee
  options: {
    validate: {
      payload: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
      }),
      headers: {
        "content-type": Joi.string().required()
      },
      options: {
        allowUnknown: true
      }
    }
  }
};
