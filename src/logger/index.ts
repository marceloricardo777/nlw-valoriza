import pino from "pino";
import expressPinoLogger from "express-pino-logger";
import path from 'path';
import moment from 'moment';
import fs from 'fs';

const dir = path.join(__dirname, "../../logs", `${moment().format('YYYY-MM-DD')}.log`);

// cria pasta de log caso ela não exista
!fs.existsSync(`./logs/`) && fs.mkdirSync(`./logs/`, { recursive: true })

const loggerconfig = pino({
    name: 'nlw-api',
    level: 'info',
}, pino.destination(dir)
);

export const logger = expressPinoLogger({ logger: loggerconfig });
