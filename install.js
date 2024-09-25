module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/CharafChnioune/mflux.git app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",           
        path: "app",               
        message: [
          "pip install -e .",
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation finished successfully! Please set your Hugging Face token in the ENVIRONMENT file before starting the application."
      }
    }
  ]
}