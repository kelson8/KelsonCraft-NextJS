import pino, {Logger} from "pino";

// https://blog.arcjet.com/structured-logging-in-json-for-next-js/
// Using pino for logging

// https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/
// Well this doesn't work.
// const fileTransport = pino.transport({
//     target: 'pino/file',
//     options: { destination: `${__dirname}/app.log` },
// });

// Set the log file path here.
const logFile: string = process.cwd() + "/logs/kelsoncraft-nextjs.log"

export const logger: Logger =
    process.env["NODE_ENV"] === "production"
        ? // JSON in production
        pino({level: "warn"})
        : // Pretty print in development
        pino({
            transport: {
                targets: [
                    {target: "pino-pretty", options: {colorize: true}},
                    {target: "pino/file", options: {destination: logFile, mkdir: true, pretty: true}},
                ]
            },
            level: "debug",
        });