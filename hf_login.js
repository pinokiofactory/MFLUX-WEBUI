module.exports = {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",
          env: { 
            HUGGING_FACE_TOKEN: "{{env.HUGGING_FACE_TOKEN}}"
          },
          path: "app",
          message: [
            "huggingface-cli login --token $HUGGING_FACE_TOKEN",
            "mflux-webui",
          ],
          on: [{
            "event": "/http:\/\/\\S+/",   
            "done": true
          }]
        }
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[0]}}"
        }
      }
    ]
  }