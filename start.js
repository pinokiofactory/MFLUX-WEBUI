module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: { },
        path: "app",
        message: [
          "python webui.py",
        ],
        on: [{
          "event": "/http:\/\/\\S+/",   
          "done": true
        }, {
          "event": "/error:/i",
          "break": false
        }, {
          "event": "/errno/i",
          "break": false
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
