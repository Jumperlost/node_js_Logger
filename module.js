function logMessage(logType, message) {
  try {
    const allowedLogs = {
      local: [
        "Emergency",
        "Alert",
        "Critical",
        "Error",
        "Warning",
        "Notice",
        "Informational",
        "Debug",
      ],
      development: [
        "Emergency",
        "Alert",
        "Critical",
        "Error",
        "Warning",
        "Notice",
      ],
      production: ["Emergency", "Alert", "Critical", "Error"],
    };

    const corructEnv = process.env.NODE_ENV || "local";
    if (!allowedLogs[corructEnv].includes(logType)) {
      console.log(`Log type '${logType}' is  not allowed in currect env.`);
      return;
    }
    console.log(`[${logType}] ${message} (NODE_ENV: ${corructEnv})`);

    // if (corructEnv === "local") {
    //   throw new Error("This is a test for local env");
    // } else if (corructEnv === "development") {
    //   throw new Error("This is a test for dev env");
    // } else if (corructEnv === "production") {
    //   throw new Error("This is a test for prod env");
    // }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
    console.log(`Error type: ${error.constructor.name}`);
  }
}

module.exports = logMessage;
