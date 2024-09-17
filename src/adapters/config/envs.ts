export enum Envs {
    TRANSPORT_SERVICE = "TRANSPORT_SERVICE",
    TRANSPORT_HOST = "TRANSPORT_HOST",
    TRANSPORT_PORT = "TRANSPORT_PORT",
    TRANSPORT_SECURE = "TRANSPORT_SECURE",
    TRANSPORT_AUTH_USER = "TRANSPORT_AUTH_USER",
    TRANSPORT_AUTH_PASS = "TRANSPORT_AUTH_PASS",
    MAIL_OPTIONS_FROM = "MAIL_OPTIONS_FROM",
    MAIL_OPTIONS_TO = "MAIL_OPTIONS_TO",
    SCRAP_URL = "SCRAP_URL",
    USER_AGENT = "USER_AGENT",
    EXEC_PATH_CHROME = "EXEC_PATH_CHROME",
}


class EnvsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EnvsError";
    }
}

export const getEnv = (key: Envs): string => {

    const value = process.env[key];

    if (!value) {
        throw new EnvsError(`Env ${key} not found`);
    }

    return value;
};

