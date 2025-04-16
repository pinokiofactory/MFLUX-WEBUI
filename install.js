module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/CharafChnioune/MFLUX-WEBUI.git app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install pydantic==2.10.6"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}
