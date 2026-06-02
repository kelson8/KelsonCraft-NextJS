import pino, {Logger} from "pino";

// https://blog.arcjet.com/structured-logging-in-json-for-next-js/
// Using pino for logging

export const logger: Logger =
    process.env["NODE_ENV"] === "production"
        ? // JSON in production
        pino({level: "warn"})
        : // Pretty print in development
        pino({
            transport: {
                target: "pino-pretty",
                options: {
                    colorize: true,
                },
            },
            level: "debug",
        });